import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kariéra",
  description: "Pracovné miesta v Tatrazone. Pridajte sa k nášmu tímu.",
};

const JOBS = [
  {
    title: "Frontend Developer",
    location: "Bratislava / Remote",
    type: "Plný úväzok",
    desc: "Hľadáme skúseného frontend vývojára so znalosťou Reactu a Next.js.",
  },
  {
    title: "Zákaznícka podpora",
    location: "Bratislava",
    type: "Plný úväzok",
    desc: "Pripoj sa k nášmu tímu a pomáhaj zákazníkom s ich otázkami a objednávkami.",
  },
  {
    title: "Logistický špecialista",
    location: "Bratislava",
    type: "Plný úväzok",
    desc: "Zabezpeč plynulý chod skladu a proces expedície objednávok.",
  },
];

export default function KarieraPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="container-site py-12 md:py-16 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kariéra v Tatrazone
          </h1>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Pridajte sa k nášmu dynamickému tímu a podieľajte sa na budovaní
            moderného e-shopu pre slovenský trh. Ponúkame flexibilnú pracovnú
            dobu a priestor na rast.
          </p>
          <div className="space-y-4">
            {JOBS.map((job) => (
              <div
                key={job.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-primary-50 text-primary-700 font-medium px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-600 font-medium px-3 py-1 rounded-full">
                      {job.location}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{job.desc}</p>
                <button className="mt-4 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                  Zobraziť viac →
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
