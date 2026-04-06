'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, PhoneCall } from 'lucide-react';

const navLinks = [
  { label: 'Start', href: '#' },
  { label: 'Nieruchomości', href: '#oferta' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Projekty', href: '#projekty' },
  { label: 'Kontakt', href: '#kontakt' },
];

type HeaderProps = {
  onOpenModal: () => void;
};

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'border-b border-white/10 bg-[#0f1720]/75 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex flex-col text-white">
            <span className="text-[10px] uppercase tracking-[0.42em] text-white/55 transition group-hover:text-[#d6b07a]">
              Crescent
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              Development
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium tracking-[0.08em] !text-white/82 transition duration-300 hover:text-white"
              >
                <span className="relative after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-[#d6b07a] after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+48123456789"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 !text-white/80 backdrop-blur-md transition hover:border-[#d6b07a]/50 hover:bg-white/10 hover:text-[#d6b07a]"
              aria-label="Zadzwoń"
            >
              <PhoneCall size={18} />
            </a>

            <button
  type="button"
  onClick={onOpenModal}
  className="rounded-full border border-[#d6b07a]/40 bg-[#d6b07a] px-5 py-2.5 text-sm font-semibold text-[#1d2736] transition hover:scale-[1.02] hover:bg-[#e0bc8a]"
>
  Umów konsultację
</button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/10 md:hidden"
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#0f1720]/88 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-28">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 pb-4 text-lg font-medium tracking-[0.06em] !text-white/90 transition hover:text-[#d6b07a]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-10">
            <a
              href="tel:+48123456789"
              className="rounded-sm border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium !text-white/85 transition hover:bg-white/10"
            >
              +48 123 456 789
            </a>

            <button
  type="button"
  onClick={onOpenModal}
  className="rounded-full border border-[#d6b07a]/40 bg-[#d6b07a] px-5 py-2.5 text-sm font-semibold text-[#1d2736] transition hover:scale-[1.02] hover:bg-[#e0bc8a]"
>
  Umów konsultację
</button>
          </div>
        </div>
      </div>
    </>
  );
}