'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Wybierz inwestycję',
    text: 'Sprawdź lokalizacje, standard oraz typy dostępnych mieszkań i wybierz projekt dopasowany do swoich potrzeb.',
  },
  {
    number: '02',
    title: 'Skontaktuj się z doradcą',
    text: 'Otrzymaj aktualną ofertę, rzuty mieszkań, szczegóły inwestycji oraz odpowiedzi na najważniejsze pytania.',
  },
  {
    number: '03',
    title: 'Poznaj dostępne lokale',
    text: 'Wspólnie dobierz metraż, układ i rozwiązanie, które najlepiej odpowiada Twojemu stylowi życia.',
  },
  {
    number: '04',
    title: 'Umów prezentację',
    text: 'Przejdź przez kolejne etapy w prosty, spokojny i przejrzysty sposób z pomocą naszego zespołu.',
  },
];

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#20324a] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#d6b07a]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-[760px]"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d6b07a]">
            Jak to działa
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Prosty proces od pierwszego kontaktu do wyboru mieszkania.
          </h2>

          <p className="mt-5 max-w-[620px] text-base leading-8 text-white/70">
            Każdy etap prowadzimy w przejrzysty sposób, aby wybór inwestycji i
            kontakt z doradcą były intuicyjne i spokojne.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 xl:block" />

          {steps.map((step) => (
            <motion.article
              key={step.number}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-sm bg-[#d6b07a]/10 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-20 w-20 rounded-sm bg-white/5 blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="text-sm font-semibold tracking-[0.25em] text-[#d6b07a]"
                  >
                    {step.number}
                  </motion.span>

                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-white/10 transition duration-300 group-hover:w-12 group-hover:bg-[#d6b07a]/50" />
                    <span className="h-2 w-2 rounded-full bg-[#d6b07a]/70 transition duration-300 group-hover:scale-125" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold leading-7 text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/72">
                  {step.text}
                </p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.15 }}
                  className="mt-6 h-px origin-left bg-gradient-to-r from-[#d6b07a]/60 to-transparent"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}