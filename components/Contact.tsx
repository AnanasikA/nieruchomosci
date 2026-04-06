'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="kontakt" className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-2xl bg-[#20324a] px-6 py-10 text-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] sm:px-8 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-sm bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-sm bg-[#d6b07a]/10 blur-3xl" />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[620px]"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d6b07a]">
                Kontakt
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Porozmawiajmy o Twoim nowym mieszkaniu.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/75">
                Skontaktuj się z naszym zespołem, aby otrzymać aktualną ofertę,
                dostępne lokale, rzuty mieszkań, orientacyjne ceny i harmonogram
                realizacji inwestycji.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-sm border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b07a]">
                    E-mail
                  </p>
                  <a
                    href="mailto:kontakt@crescentdevelopment.pl"
                    className="mt-2 block text-sm text-white/80 transition hover:text-white"
                  >
                    kontakt@crescentdevelopment.pl
                  </a>
                </div>

                <div className="rounded-sm border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b07a]">
                    Telefon
                  </p>
                  <a
                    href="tel:+48123456789"
                    className="mt-2 block text-sm text-white/80 transition hover:text-white"
                  >
                    +48 123 456 789
                  </a>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-white/55">
                Odpowiadamy zwykle w ciągu 1 dnia roboczego i pomagamy dobrać
                inwestycję dopasowaną do Twoich potrzeb.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-sm border border-white/10 bg-white/6 p-5 backdrop-blur-md sm:p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white/85"
                  >
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Twoje imię i nazwisko"
                    className="w-full rounded-sm border border-white/10 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#d6b07a]/60 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-white/85"
                  >
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+48 000 000 000"
                    className="w-full rounded-sm border border-white/10 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#d6b07a]/60 focus:bg-white/10"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white/85"
                >
                  Adres e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="twoj@email.pl"
                  className="w-full rounded-sm border border-white/10 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#d6b07a]/60 focus:bg-white/10"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="investment"
                  className="mb-2 block text-sm font-medium text-white/85"
                >
                  Interesująca inwestycja
                </label>
                <select
                  id="investment"
                  name="investment"
                  className="w-full rounded-sm border border-white/10 bg-white/8 px-4 py-3 text-sm text-white outline-none transition focus:border-[#d6b07a]/60 focus:bg-white/10"
                  defaultValue=""
                >
                  <option value="" disabled className="text-slate-900">
                    Wybierz inwestycję
                  </option>
                  <option value="skyline" className="text-slate-900">
                    Skyline Towers
                  </option>
                  <option value="midtown" className="text-slate-900">
                    Midtown Lofts
                  </option>
                  <option value="shoreline" className="text-slate-900">
                    The Shoreline
                  </option>
                </select>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white/85"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Napisz, jakiego mieszkania szukasz lub o co chcesz zapytać..."
                  className="w-full resize-none rounded-sm border border-white/10 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-[#d6b07a]/60 focus:bg-white/10"
                />
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[420px] text-xs leading-6 text-white/50">
                  Wysyłając formularz, wyrażasz zgodę na kontakt w sprawie oferty
                  i przedstawienia dostępnych lokali.
                </p>

                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="rounded-md bg-[#d6b07a] px-6 py-3 text-sm font-semibold text-[#1b2434] transition hover:shadow-lg"
                >
                  Wyślij zapytanie
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}