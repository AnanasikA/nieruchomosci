'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Zamknij popup"
        onClick={onClose}
        className="absolute inset-0 bg-[#0f1720]/70 backdrop-blur-sm"
      />

      <div className="relative z-10 w-full max-w-[560px] rounded-[28px] border border-white/10 bg-[#111827] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#d6b07a]">
              Umów konsultację
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Porozmawiajmy o Twoim nowym mieszkaniu
            </h2>
            <p className="mt-3 max-w-[420px] text-sm leading-6 text-white/70">
              Zostaw swoje dane, a skontaktujemy się z Tobą, aby przedstawić
              dostępne inwestycje i odpowiedzieć na pytania.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <form className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/75">Imię</label>
              <input
                type="text"
                placeholder="Np. Anna"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#d6b07a]/50 focus:bg-white/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/75">Telefon</label>
              <input
                type="tel"
                placeholder="+48 123 456 789"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#d6b07a]/50 focus:bg-white/10"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/75">E-mail</label>
            <input
              type="email"
              placeholder="twoj@email.pl"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#d6b07a]/50 focus:bg-white/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/75">Wiadomość</label>
            <textarea
              rows={4}
              placeholder="Napisz, jaka inwestycja Cię interesuje lub o co chcesz zapytać..."
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#d6b07a]/50 focus:bg-white/10"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#d6b07a] px-6 py-3.5 text-sm font-semibold text-[#1b2434] transition hover:bg-[#e0bc8a]"
          >
            Wyślij zapytanie
          </button>
        </form>
      </div>
    </div>
  );
}