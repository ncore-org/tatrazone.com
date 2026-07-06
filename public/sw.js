// Tatrazone PWA Service Worker v2.0
// Deployed via GitHub Pages at /tatrazone.com/

const CACHE_VERSION = 'tz-v2';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const PAGE_CACHE = `${CACHE_VERSION}-pages`;
const FONT_CACHE = `${CACHE_VERSION}-fonts`;

const PRECACHE_URLS = [
  '/tatrazone.com/',
  '/tatrazone.com/manifest.json',
  '/tatrazone.com/icons/icon-192.svg',
  '/tatrazone.com/icons/icon-512.svg',
  '/tatrazone.com/offline.html',
];

const BASE = '/tatrazone.com';

// Install - precache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

// Activate - clean old cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key.startsWith('tz-') && !key.startsWith(CACHE_VERSION))
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET
  if (request.method !== 'GET') return;

  // API calls - network only
  if (url.pathname.includes('/api/')) return;

  // Fonts - cache first (extremely long)
  if (url.pathname.includes('/_next/static/media/') || url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(cacheFirst(request, FONT_CACHE));
    return;
  }

  // Images - cache first
  if (request.destination === 'image' || url.pathname.startsWith(`${BASE}/images/`)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  // SVG icons - cache first
  if (url.pathname.startsWith(`${BASE}/icons/`)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Next.js static assets - cache first
  if (url.pathname.startsWith(`${BASE}/_next/static/`)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // HTML pages - network first with timeout + offline fallback
  if (request.mode === 'navigate' || request.headers.get('Accept')?.includes('text/html')) {
    event.respondWith(networkFirstWithTimeout(request, 5000));
    return;
  }

  // Everything else - stale while revalidate
  event.respondWith(staleWhileRevalidate(request, PAGE_CACHE));
});

// Cache-first strategy
async function cacheFirst(request, cacheName) {
  try {
    const cached = await caches.match(request);
    if (cached) return cached;
  } catch (e) {
    // Cache read error, fall through to network
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // If it's a font request and fetch fails, return a fallback
    if (request.destination === 'font') {
      return new Response('', { status: 200, headers: { 'Content-Type': 'font/woff2' } });
    }
    return new Response('Offline', { status: 503 });
  }
}

// Network-first with timeout + offline fallback
async function networkFirstWithTimeout(request, timeoutMs) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), timeoutMs)
  );

  try {
    const response = await Promise.race([fetch(request), timeoutPromise]);
    if (response.ok) {
      const cache = await caches.open(PAGE_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // Try cache
    try {
      const cached = await caches.match(request);
      if (cached) return cached;
    } catch (e) {
      // Cache error
    }

    // Try serving the offline page
    try {
      const offlinePage = await caches.match(`${BASE}/offline.html`);
      if (offlinePage) return offlinePage;
    } catch (e) {
      // Offline page miss
    }

    return new Response('Offline', {
      status: 503,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }
}

// Stale-while-revalidate
async function staleWhileRevalidate(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);

    const fetchPromise = fetch(request)
      .then((response) => {
        if (response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      })
      .catch(() => cached);

    return cached || fetchPromise;
  } catch (error) {
    return fetch(request).catch(() => new Response('', { status: 503 }));
  }
}

// Push notification event
self.addEventListener('push', (event) => {
  if (!event.data) return;

  const data = event.data.json();
  const options = {
    title: data.title || 'Tatrazone',
    body: data.body || 'Nowe promocje czekają!',
    icon: `${BASE}/icons/icon-192.svg`,
    badge: `${BASE}/icons/icon-192.svg`,
    data: { url: data.url || `${BASE}/` },
    vibrate: [200, 100, 200],
  };

  event.waitUntil(
    self.registration.showNotification(options.title, options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || `${BASE}/`;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Focus existing tab if available
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.focus();
          client.navigate(urlToOpen);
          return;
        }
      }
      // Open new tab
      if (clients.openWindow) {
        clients.openWindow(urlToOpen);
      }
    })
  );
});

// Message handler for skipWaiting
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
