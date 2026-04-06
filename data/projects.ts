export type FloorPlan = {
  title: string;
  size: string;
  rooms: string;
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  status: string;
  metrage: string;
  image: string;
  heroImage: string;
  description: string;
  intro: string;
  details: {
    label: string;
    value: string;
  }[];
 amenities: {
  label: string;
  icon: string;
}[];
  gallery: string[];
  floorPlans: FloorPlan[];
  audienceTitle: string;
  audienceText: string;
  ctaTitle: string;
  ctaText: string;
};

export const projects: Project[] = [
  {
    slug: 'skyline-towers',
    title: 'Skyline Towers',
    subtitle: 'Apartamenty premium w centrum Wrocławia',
    location: 'Wrocław',
    status: 'Sprzedaż trwa',
    metrage: '42–96 m²',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80',
    intro:
      'Nowoczesna inwestycja mieszkaniowa łącząca miejski charakter z ponadczasową architekturą i wysokim standardem wykończenia.',
    description:
      'Skyline Towers to projekt zaprojektowany z myślą o osobach, które oczekują wygodnej lokalizacji, dopracowanej estetyki i funkcjonalnych układów mieszkań. Inwestycja oferuje elegancką architekturę, duże przeszklenia oraz komfortowe części wspólne, które podkreślają nowoczesny charakter całego kompleksu.',
    details: [
      { label: 'Lokalizacja', value: 'centrum Wrocławia' },
      { label: 'Metraże', value: '42–96 m²' },
      { label: 'Pokoje', value: '2–4' },
      { label: 'Termin oddania', value: 'IV kw. 2027' },
      { label: 'Standard', value: 'premium' },
      { label: 'Miejsca postojowe', value: 'hala podziemna' },
    ],
   amenities: [
  {
    label: 'Przestronne przeszklenia i duża ilość światła',
    icon: '/icons/balcony.png',
  },
  {
    label: 'Hala garażowa',
    icon: '/icons/parking.png',
  },
  {
    label: 'Strefa fitness',
    icon: '/icons/gym.png',
  },
  {
    label: 'Zielone patio',
    icon: '/icons/trees.png',
  },
  {
    label: 'Monitoring i ochrona',
    icon: '/icons/security.png',
  },
  {
    label: 'Świetna lokalizacja',
    icon: '/icons/location.png',
  },
],
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
    ],
    floorPlans: [
      {
        title: 'Apartament A.12',
        size: '47,80 m²',
        rooms: '2 pokoje',
        image: '/plans/plan-1.png',
      },
      {
        title: 'Apartament B.08',
        size: '63,40 m²',
        rooms: '3 pokoje',
        image: '/plans/plan-2.png',
      },
      {
        title: 'Apartament C.15',
        size: '84,10 m²',
        rooms: '4 pokoje',
        image: '/plans/plan-3.png',
      },
    ],
    audienceTitle: 'Dla osób, które chcą mieszkać nowocześnie i centralnie',
    audienceText:
      'To propozycja dla klientów ceniących miejski styl życia, wygodny dostęp do usług oraz apartamentowy standard w prestiżowej lokalizacji.',
    ctaTitle: 'Zapytaj o ofertę tej inwestycji',
    ctaText:
      'Skontaktuj się z nami, aby otrzymać aktualną ofertę mieszkań, rzuty oraz szczegóły dostępności.',
  },
  {
    slug: 'midtown-lofts',
    title: 'Midtown Lofts',
    subtitle: 'Lofty z charakterem w nowoczesnej części Warszawy',
    location: 'Warszawa',
    status: 'Ostatnie lokale',
    metrage: '48–110 m²',
    image:
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1800&q=80',
    intro:
      'Industrialna estetyka, duże przeszklenia i funkcjonalne wnętrza tworzą inwestycję dla osób, które szukają miejskiego stylu życia w dopracowanej formie.',
    description:
      'Midtown Lofts to inwestycja inspirowana loftowym klimatem nowoczesnych dzielnic biznesowych. Projekt wyróżnia się ponadstandardową wysokością mieszkań, dużymi oknami oraz wyrazistą architekturą. To propozycja dla osób ceniących nowoczesność, otwarte układy wnętrz i prestiżową lokalizację blisko centrum miasta.',
    details: [
      { label: 'Lokalizacja', value: 'Warszawa, dzielnica biznesowa' },
      { label: 'Metraże', value: '48–110 m²' },
      { label: 'Pokoje', value: '2–5' },
      { label: 'Termin oddania', value: 'II kw. 2026' },
      { label: 'Standard', value: 'loft premium' },
      { label: 'Miejsca postojowe', value: 'garaż podziemny' },
    ],
   amenities: [
  {
    label: 'Przestronne przeszklenia i duża ilość światła',
    icon: '/icons/balcony.png',
  },
  {
    label: 'Hala garażowa',
    icon: '/icons/parking.png',
  },
  {
    label: 'Strefa fitness',
    icon: '/icons/gym.png',
  },
  {
    label: 'Zielone patio',
    icon: '/icons/trees.png',
  },
  {
    label: 'Monitoring i ochrona',
    icon: '/icons/security.png',
  },
  {
    label: 'Świetna lokalizacja',
    icon: '/icons/location.png',
  },
],
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1400&q=80',
    ],
    floorPlans: [
      {
        title: 'Loft M.04',
        size: '52,20 m²',
        rooms: '2 pokoje',
        image: '/plans/plan-1.png',
      },
      {
        title: 'Loft M.11',
        size: '71,90 m²',
        rooms: '3 pokoje',
        image: '/plans/plan-2.png',
      },
      {
        title: 'Loft P.02',
        size: '96,50 m²',
        rooms: '4 pokoje',
        image: '/plans/plan-3.png',
      },
    ],
    audienceTitle: 'Dla klientów szukających loftowego stylu i prestiżu',
    audienceText:
      'Idealna propozycja dla osób aktywnych zawodowo, par oraz inwestorów, którzy szukają nowoczesnej nieruchomości w dynamicznej części miasta.',
    ctaTitle: 'Sprawdź dostępność ostatnich loftów',
    ctaText:
      'Umów rozmowę i poznaj dostępne układy mieszkań, standard inwestycji oraz aktualne warunki zakupu.',
  },
  {
    slug: 'the-shoreline',
    title: 'The Shoreline',
    subtitle: 'Jasne mieszkania blisko terenów nadmorskich',
    location: 'Gdańsk',
    status: 'Przedsprzedaż',
    metrage: '38–88 m²',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80',
    intro:
      'Inwestycja zaprojektowana z myślą o świetle, przestrzeni i codziennym komforcie życia w pobliżu zieleni oraz terenów rekreacyjnych.',
    description:
      'The Shoreline to projekt dla osób, które chcą mieszkać nowocześnie, ale w bardziej spokojnym, naturalnym otoczeniu. Osiedle łączy jasną architekturę, przyjazne układy mieszkań oraz dostęp do terenów spacerowych i rekreacyjnych. To dobra propozycja zarówno dla rodzin, jak i osób szukających mieszkania inwestycyjnego w atrakcyjnej lokalizacji.',
    details: [
      { label: 'Lokalizacja', value: 'Gdańsk, strefa nadmorska' },
      { label: 'Metraże', value: '38–88 m²' },
      { label: 'Pokoje', value: '2–4' },
      { label: 'Termin oddania', value: 'I kw. 2028' },
      { label: 'Standard', value: 'nowoczesny rodzinny' },
      { label: 'Miejsca postojowe', value: 'zewnętrzne i podziemne' },
    ],
    amenities: [
  {
    label: 'Przestronne przeszklenia i duża ilość światła',
    icon: '/icons/balcony.png',
  },
  {
    label: 'Hala garażowa',
    icon: '/icons/parking.png',
  },
  {
    label: 'Strefa fitness',
    icon: '/icons/gym.png',
  },
  {
    label: 'Zielone patio',
    icon: '/icons/trees.png',
  },
  {
    label: 'Monitoring i ochrona',
    icon: '/icons/security.png',
  },
  {
    label: 'Świetna lokalizacja',
    icon: '/icons/location.png',
  },
],
    gallery: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    ],
    floorPlans: [
      {
        title: 'Mieszkanie S.03',
        size: '41,60 m²',
        rooms: '2 pokoje',
        image: '/plans/plan-1.png',
      },
      {
        title: 'Mieszkanie S.14',
        size: '58,90 m²',
        rooms: '3 pokoje',
        image: '/plans/plan-2.png',
      },
      {
        title: 'Mieszkanie S.21',
        size: '79,30 m²',
        rooms: '4 pokoje',
        image: '/plans/plan-3.png',
      },
    ],
    audienceTitle: 'Dla rodzin i osób szukających spokoju blisko miasta',
    audienceText:
      'To inwestycja dla klientów, którzy chcą połączyć nowoczesne mieszkanie z bardziej naturalnym otoczeniem i codziennym komfortem życia.',
    ctaTitle: 'Zapytaj o start sprzedaży i dostępne układy',
    ctaText:
      'Zostaw kontakt, a prześlemy Ci szczegóły inwestycji, rzuty mieszkań oraz informacje o dostępności lokali.',
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);