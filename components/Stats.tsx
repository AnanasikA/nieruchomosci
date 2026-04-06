'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: StatItem[] = [
  { value: 12, suffix: '+', label: 'zrealizowanych inwestycji' },
  { value: 450, suffix: '+', label: 'sprzedanych mieszkań' },
  { value: 8, label: 'lokalizacji w Polsce' },
  { value: 15, suffix: '+', label: 'lat doświadczenia' },
];

function AnimatedNumber({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 22,
    stiffness: 90,
    mass: 0.8,
  });

  const rounded = useTransform(springValue, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplay(latest);
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#20324a] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 max-w-[620px]"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d6b07a]">
            Nasze doświadczenie
          </p>

          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Liczby, które pokazują skalę naszych realizacji.
          </h2>

          <p className="mt-4 max-w-[560px] text-base leading-7 text-white/70">
            Stawiamy na jakość realizacji, dopracowaną architekturę i inwestycje,
            które odpowiadają na realne potrzeby mieszkańców.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item, index) => (
            <motion.article
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.96 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.55,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-10 top-0 h-24 w-24 rounded-full bg-[#d6b07a]/10 blur-2xl" />
                <div className="absolute bottom-0 right-0 h-20 w-20 rounded-full bg-white/5 blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-white/35">
                    0{index + 1}
                  </span>
                  <span className="h-px w-12 bg-white/10" />
                </div>

                <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  <AnimatedNumber value={item.value} suffix={item.suffix} />
                </div>

                <p className="mt-3 max-w-[18ch] text-sm leading-6 text-white/70">
                  {item.label}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}