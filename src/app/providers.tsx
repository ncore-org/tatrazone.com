"use client";

import { type ReactNode } from "react";
import { CartProvider } from "./providers/CartContext";
import { ToastProvider } from "./providers/ToastContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <ToastProvider>{children}</ToastProvider>
    </CartProvider>
  );
}
