export default function Footer() {
  return (
    <footer className="border-t border-[#e8dfd2] bg-[#f8f5ef] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Crescent
          </p>
          <p className="mt-1 text-sm font-semibold tracking-[0.18em] text-[#1b2434]">
            Development
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Nowoczesne inwestycje mieszkaniowe tworzone z myślą o jakości,
            estetyce i komforcie życia.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#1b2434]">Menu</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <a href="#">Start</a>
            <a href="#o-nas" className="block">O nas</a>
            <a href="#projekty" className="block">Inwestycje</a>
            <a href="#kontakt" className="block">Kontakt</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#1b2434]">Kontakt</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>kontakt@crescentdevelopment.pl</p>
            <p>+48 123 456 789</p>
            <p>ul. Nowoczesna 12, 50-001 Wrocław</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#1b2434]">Godziny pracy</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>Pon. – Pt.: 9:00 – 17:00</p>
            <p>Sob.: po wcześniejszym kontakcie</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1280px] border-t border-[#e8dfd2] pt-6 text-sm text-slate-500">
        © 2026 Crescent Development. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}