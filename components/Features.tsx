const features = [
  {
    title: 'Luksusowe rezydencje',
    text: 'Nowoczesne mieszkania i apartamenty projektowane z myślą o komforcie, estetyce i wysokim standardzie wykończenia.',
    price: 'od 499 000 zł',
    icon: 'https://cdn.lordicon.com/kjwsfekk.json',
  },
  {
    title: 'Miejski styl życia',
    text: 'Inwestycje w dobrze skomunikowanych lokalizacjach, blisko usług, zieleni i codziennych udogodnień.',
    price: 'od 519 000 zł',
    icon: 'https://cdn.lordicon.com/jeuxydnh.json',
  },
  {
    title: 'Prestiżowe osiedla',
    text: 'Dopracowana architektura, wysoka jakość części wspólnych i przestrzenie zaprojektowane dla wymagających.',
    price: 'od 590 000 zł',
    icon: 'https://cdn.lordicon.com/tjjwskjx.json',
  },
];

export default function Features() {
  return (
    <section id="oferta" className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-5 lg:grid-cols-3">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-sm bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4ece1]">
                <lord-icon
                  src={item.icon}
                  trigger="loop"
                  delay="1500"
                  colors="primary:#1b2434,secondary:#b48b54"
                  style={{ width: '36px', height: '36px' }}
                ></lord-icon>
              </div>

              <h3 className="text-xl font-semibold text-[#1f2937]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>

              <div className="mt-5 border-t border-slate-200 pt-4 text-sm font-medium text-slate-500">
                {item.price}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}