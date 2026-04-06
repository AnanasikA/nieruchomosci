'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Anna i Michał',
    role: 'Klienci – Skyline Towers',
    text: 'Bardzo dobry kontakt, przejrzysty proces i konkretne informacje na każdym etapie. Dzięki temu wybór mieszkania był dużo prostszy.',
  },
  {
    name: 'Karolina S.',
    role: 'Klientka – Midtown Lofts',
    text: 'Doceniam estetykę inwestycji i pomoc doradcy. Wszystko było jasno wyjaśnione i bez niepotrzebnego chaosu.',
  },
  {
    name: 'Tomasz R.',
    role: 'Klient – The Shoreline',
    text: 'Nowoczesny projekt, dobra lokalizacja i sprawna obsługa. Całość od początku wyglądała bardzo profesjonalnie.',
  },
  {
    name: 'Ewa M.',
    role: 'Klientka – Skyline Towers',
    text: 'Podobało mi się to, że wszystko było pokazane w prosty sposób. Mieliśmy jasne informacje i spokojny kontakt z doradcą.',
  },
  {
    name: 'Paweł K.',
    role: 'Klient – Midtown Lofts',
    text: 'Bardzo estetyczna inwestycja i dobry standard. Od pierwszej rozmowy cały proces wydawał się uporządkowany i profesjonalny.',
  },
  {
    name: 'Magdalena i Piotr',
    role: 'Klienci – The Shoreline',
    text: 'Najbardziej doceniliśmy dobrą komunikację i konkretne odpowiedzi. Dzięki temu łatwiej było nam podjąć decyzję.',
  },
];

function getVisibleCount(width: number) {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateCount = () => setVisibleCount(getVisibleCount(window.innerWidth));
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const maxIndex = Math.max(testimonials.length - visibleCount, 0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const visibleTestimonials = useMemo(() => {
    return testimonials.slice(activeIndex, activeIndex + visibleCount);
  }, [activeIndex, visibleCount]);

  const dotsCount = maxIndex + 1;

  return (
    <section className="bg-[#f8f5ef] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-[760px] text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b48b54]">
            Opinie klientów
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#1b2434] sm:text-4xl lg:text-5xl">
            Spokojny proces, dobra komunikacja i inwestycje dopracowane w szczegółach.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Zależy nam nie tylko na jakości inwestycji, ale też na tym, aby cały
            proces wyboru mieszkania był jasny, wygodny i dobrze zorganizowany.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-${visibleCount}`}
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleTestimonials.map((item) => (
                <article
                  key={item.name + item.role}
                  className="flex h-full flex-col rounded-sm border border-[#e7dfd3] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-5 text-4xl leading-none text-[#d6b07a]/40">“</div>

                  <p className="flex-1 text-sm leading-8 text-slate-600">
                    {item.text}
                  </p>

                  <div className="mt-6 border-t border-[#efe7dc] pt-4">
                    <div className="text-sm font-semibold text-[#1b2434]">
                      {item.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {item.role}
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              {Array.from({ length: dotsCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Przejdź do zestawu opinii ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-8 bg-[#d6b07a]'
                      : 'w-2.5 bg-[#ddd3c5] hover:bg-[#cdb89a]'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                className="rounded-md border border-[#e7dfd3] bg-[#fcfaf6] px-4 py-2 text-sm font-medium text-[#1b2434] transition hover:bg-[#f5efe6]"
              >
                Wstecz
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="rounded-md bg-[#20324a] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#17263b]"
              >
                Dalej
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}