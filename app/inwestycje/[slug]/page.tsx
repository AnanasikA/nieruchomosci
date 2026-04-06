import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import {
  Building2,
  Dumbbell,
  CarFront,
  Trees,
  ShieldCheck,
  MapPin,
} from 'lucide-react';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const amenityIcons = [
  Building2,
  CarFront,
  Dumbbell,
  Trees,
  ShieldCheck,
  MapPin,
];

export default async function InvestmentPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#f6f3ee] text-[#1d2736]">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,23,34,0.34)_0%,rgba(16,23,34,0.74)_100%)]" />

        <div className="relative mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Link
            href="/#projekty"
            className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium !text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Wróć do inwestycji
          </Link>

          <div className="flex min-h-[78vh] items-end py-10">
            <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#d3b07a]">
                  Inwestycja premium
                </p>

                <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                  {project.subtitle}
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                  {project.intro}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-sm border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                    {project.location}
                  </span>
                  <span className="rounded-sm border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                    {project.status}
                  </span>
                  <span className="rounded-sm border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                    {project.metrage}
                  </span>
                </div>
              </div>

              <div className="rounded-sm border border-white/15 bg-white/10 p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-md lg:p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                  Kluczowe informacje
                </p>

                <div className="mt-6 space-y-4">
                  {project.details.slice(0, 5).map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-white/60">{item.label}</span>
                      <span className="text-right text-sm font-medium text-white">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="#kontakt-inwestycja"
                    className="inline-flex w-full items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-medium !text-[#1d2736] transition hover:bg-[#f3eee6]"
                  >
                    Zapytaj o ofertę
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b48b54]">
              O inwestycji
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Architektura, lokalizacja i komfort w spójnej formie
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              {project.description}
            </p>
          </div>
        </div>
      </section>
<section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-[1280px]">
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b48b54]">
        Atuty inwestycji
      </p>

      <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
        Najważniejsze elementy projektu
      </h2>
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {[0, 1, 2].map((columnIndex) => {
        const items = project.amenities.slice(
          columnIndex * 2,
          columnIndex * 2 + 2
        );

        return (
          <div
            key={columnIndex}
            className="rounded-sm border border-[#ece4d9] bg-[#fcfaf7] p-6"
          >
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-[#ece4d9] pb-6 last:border-0 last:pb-0"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3eee6]">
                    <img
                      src={item.icon}
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                  </div>

                  <p className="text-lg leading-8 text-[#1d2736]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <section className="bg-[#f1ece4] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b48b54]">
                Plany mieszkań
              </p>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Dostępne układy
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Przykładowe układy mieszkań dostępnych w inwestycji.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {project.floorPlans.map((plan) => (
              <article
  key={plan.title}
  className="overflow-hidden rounded-sm border border-[#e7dfd4] bg-white shadow-[0_18px_50px_rgba(20,30,45,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(20,30,45,0.10)]"
>
  {/* IMAGE FULL */}
  <div className="relative h-[340px] w-full overflow-hidden">
    <img
      src={plan.image}
      alt={plan.title}
      className="h-full w-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

  {/* CONTENT */}
  <div className="p-6">
    <div className="flex flex-wrap gap-3 text-sm">
      <span className="rounded-sm bg-[#f3eee6] px-3 py-1 text-[#8d6a3d]">
        {plan.size}
      </span>

      <span className="rounded-sm bg-[#eef4ee] px-3 py-1 text-[#4f6b52]">
        {plan.rooms}
      </span>
    </div>

    <h3 className="mt-5 text-2xl font-semibold text-[#1d2736]">
      {plan.title}
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      Funkcjonalny układ z dobrze wykorzystaną przestrzenią dzienną
      i komfortową strefą prywatną.
    </p>

    <a
      href="#kontakt-inwestycja"
      className="mt-6 inline-flex rounded-sm bg-[#20324a] px-6 py-3 text-sm font-medium !text-white transition hover:bg-[#17263b]"
    >
      Zapytaj o ten układ
    </a>
  </div>
</article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b48b54]">
            Dla kogo
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {project.audienceTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {project.audienceText}
          </p>
        </div>
      </section>

      <section id="kontakt-inwestycja" className="px-4 pb-20 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-[1280px] overflow-hidden rounded-sm bg-[#1f3148] text-white shadow-[0_24px_80px_rgba(18,28,43,0.18)]">
    <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
      <div className="px-8 py-12 lg:px-12 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d3b07a]">
          Kontakt i oferta
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {project.ctaTitle}
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
          {project.ctaText}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-sm border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Otrzymasz
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              Aktualny cennik mieszkań
            </p>
          </div>

          <div className="rounded-sm border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Otrzymasz
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              Rzuty i dostępne układy
            </p>
          </div>

          <div className="rounded-sm border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Otrzymasz
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              Informację o terminach i dostępności
            </p>
          </div>

          <div className="rounded-sm border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Otrzymasz
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              Kontakt z doradcą inwestycji
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/5 px-8 py-12 lg:border-l lg:border-t-0 lg:px-12 lg:py-16">
        <div className="rounded-sm border border-white/10 bg-[#223752] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d3b07a]">
            Skontaktuj się z nami
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                Telefon
              </p>
              <a
                href="tel:+48123456789"
                className="mt-2 inline-block text-xl font-medium text-white transition hover:text-[#d3b07a]"
              >
                +48 123 456 789
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                E-mail
              </p>
              <a
                href="mailto:kontakt@twojafirma.pl"
                className="mt-2 inline-block text-xl font-medium text-white transition hover:text-[#d3b07a]"
              >
                kontakt@twojafirma.pl
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                Godziny kontaktu
              </p>
              <p className="mt-2 text-base leading-7 text-white/75">
                Pon.–Pt. 8:00–18:00
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href="/#kontakt"
              className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3 text-sm font-medium !text-[#1f3148] transition hover:bg-[#f3eee6]"
            >
              Przejdź do formularza
            </a>

            <a
              href="tel:+48123456789"
              className="inline-flex items-center justify-center rounded-sm border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Zadzwoń teraz
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}