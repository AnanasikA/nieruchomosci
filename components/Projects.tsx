import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projekty" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[700px]">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#b48b54]">
              Aktualne inwestycje
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1b2434] sm:text-4xl">
              Poznaj projekty dostępne w naszej ofercie.
            </h2>
          </div>

          <a
            href="#kontakt"
            className="inline-flex rounded-sm border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Zapytaj o ofertę
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-sm bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium">
                  <span className="rounded-md bg-[#f4ece1] px-3 py-1 text-[#8d6a3d]">
                    {project.location}
                  </span>
                  <span className="rounded-md bg-[#eef4ee] px-3 py-1 text-[#4f6b52]">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#1b2434]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {project.subtitle}
                </p>

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Metraż</span>
                    <span className="font-medium text-[#1b2434]">
                      {project.metrage}
                    </span>
                  </div>
                </div>

               <Link
  href={`/inwestycje/${project.slug}`}
  className="mt-5 inline-flex items-center justify-center rounded-sm bg-[#20324a] px-5 py-3 text-sm font-medium !text-white no-underline transition hover:bg-[#17263b]"
>
  Zobacz szczegóły
</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}