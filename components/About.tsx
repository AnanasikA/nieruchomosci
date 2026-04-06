type AboutProps = {
  onOpenModal: () => void;
};

export default function About({ onOpenModal }: AboutProps) {

  return (
    <section id="o-nas" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b48b54]">
            O firmie
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#1b2434] sm:text-4xl">
            Projektujemy inwestycje mieszkaniowe dopasowane do codziennego życia.
          </h2>

          <p className="mt-5 max-w-[620px] text-base leading-8 text-slate-600">
            Crescent Development tworzy nowoczesne osiedla i apartamenty w
            lokalizacjach, które łączą wygodę, dobrą komunikację i wysoki
            standard architektury. Skupiamy się na funkcjonalnych układach,
            estetyce części wspólnych i jakości, która pozostaje wartością na lata.
          </p>

          <p className="mt-4 max-w-[620px] text-base leading-8 text-slate-600">
            Każdy projekt rozwijamy z myślą o realnych potrzebach mieszkańców:
            świetle dziennym, praktycznych metrażach, dostępie do zieleni
            i nowoczesnej przestrzeni do życia.
          </p>

          <button
  type="button"
  onClick={onOpenModal}
  className="mt-8 inline-flex rounded-full bg-[#d6b07a] px-6 py-3 text-sm font-semibold text-[#1b2434] transition hover:-translate-y-0.5 hover:shadow-lg"
>
  Porozmawiaj z doradcą
</button>
        </div>

        <div className="overflow-hidden p-3">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
            alt="Nowoczesna inwestycja mieszkaniowa"
            className="h-[560px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}