'use client';

import { motion } from 'framer-motion';

const topItems = [
  {
    title: 'Starannie wybrane lokalizacje',
    text: 'Nasze inwestycje powstają w miejscach, które zapewniają wygodny dojazd, dostęp do usług i komfort codziennego życia.',
    icon: 'https://cdn.lordicon.com/kwzoevky.json',
  },
  {
    title: 'Przemyślana architektura',
    text: 'Projektujemy mieszkania i części wspólne tak, aby były funkcjonalne, jasne i wygodne w codziennym użytkowaniu.',
    icon: 'https://cdn.lordicon.com/ymrcxweu.json',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#f7f3ed] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-[520px]"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b48b54]">
              Dlaczego my
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-[#1b2434] sm:text-4xl">
              Inwestycje tworzone z myślą o codziennym komforcie.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Łączymy dobrą lokalizację, funkcjonalne układy mieszkań
              i nowoczesną architekturę, dzięki czemu nasze projekty są
              wygodne do życia dziś i wartościowe również w przyszłości.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {topItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -4 }}
                className="rounded-sm border border-[#e7dfd3] bg-white p-7 shadow-sm transition duration-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#f3eadf]">
                  <lord-icon
                    src={item.icon}
                    trigger="hover"
                    colors="primary:#1b2434,secondary:#b48b54"
                    style={{ width: '36px', height: '36px' }}
                  ></lord-icon>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#1b2434]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="mt-8 rounded-sm bg-[#20324a] px-6 py-8 text-white sm:px-8 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[760px]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d6b07a]">
                Nasze podejście
              </p>

              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Standard, który widać w detalach i czuć w codziennym użytkowaniu.
              </h3>

              <p className="mt-4 text-base leading-8 text-white/75">
                Dbamy o estetykę części wspólnych, jakość materiałów oraz
                przejrzysty proces zakupu, aby każdy etap był spokojny
                i zrozumiały dla klienta.
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-semibold">15+</div>
                <p className="mt-1 text-sm text-white/60">lat doświadczenia</p>
              </div>

              <div>
                <div className="text-3xl font-semibold">450+</div>
                <p className="mt-1 text-sm text-white/60">sprzedanych mieszkań</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}