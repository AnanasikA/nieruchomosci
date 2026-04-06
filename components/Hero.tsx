export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(15,23,32,0.86) 0%, rgba(15,23,32,0.62) 38%, rgba(15,23,32,0.22) 100%), url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-[1280px] items-center px-4 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="max-w-[880px]">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
            Nowoczesne inwestycje mieszkaniowe
          </p>

          <h1 className="text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-7xl">
            Nowoczesne mieszkania
            <span className="block text-[#d6b07a]">w dobrych lokalizacjach</span>
          </h1>

          <p className="mt-6 max-w-[560px] text-base leading-7 text-white/78 sm:text-lg">
            Tworzymy inwestycje, które łączą estetykę, funkcjonalne układy
            i komfort codziennego życia.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projekty"
              className="rounded-full bg-[#d6b07a] px-6 py-3 text-sm font-semibold text-[#1b2434] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Zobacz inwestycje
            </a>

            <a
              href="#kontakt"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold !text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Poproś o ofertę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}