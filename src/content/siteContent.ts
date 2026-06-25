import type { Language, NavigationItem } from "@/types/site";

type PageContent = {
  eyebrow: string;
  title: string;
  description: string;
};

type HomeService = {
  title: string;
  description: string;
};

type HomeBenefit = {
  title: string;
  description: string;
};

type HomeStat = {
  value: string;
  label: string;
};

type SiteContent = {
  brand: string;
  languageLabel: string;
  themeLabel: string;
  nav: NavigationItem[];
  home: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
    stats: HomeStat[];
    servicesEyebrow: string;
    servicesTitle: string;
    servicesDescription: string;
    services: HomeService[];
    benefitsEyebrow: string;
    benefitsTitle: string;
    benefitsDescription: string;
    benefits: HomeBenefit[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  pages: {
    about: PageContent;
    services: PageContent;
    pricing: PageContent;
    gallery: PageContent;
    contact: PageContent;
  };
  footer: string;
};

export const siteContent: Record<Language, SiteContent> = {
  pl: {
    brand: "Aurora Beauty Studio",
    languageLabel: "EN",
    themeLabel: "Motyw",
    nav: [
      { href: "/", label: "Start" },
      { href: "/about", label: "O nas" },
      { href: "/services", label: "Usługi" },
      { href: "/pricing", label: "Cennik" },
      { href: "/gallery", label: "Galeria" },
      { href: "/contact", label: "Kontakt" },
    ],
    home: {
      eyebrow: "Beauty studio",
      title: "Subtelna pielęgnacja, elegancki efekt.",
      description:
        "Nowoczesna strona wizytówkowa dla salonu beauty z dwoma językami, jasnym i ciemnym motywem oraz gotową strukturą pod dalszą rozbudowę.",
      primaryCta: "Zobacz usługi",
      secondaryCta: "Umów wizytę",
      highlights: [
        "Pielęgnacja twarzy",
        "Stylizacja brwi i rzęs",
        "Makijaż okazjonalny",
      ],
      stats: [
        { value: "6+", label: "kategorii usług" },
        { value: "2", label: "wersje językowe" },
        { value: "24/7", label: "dostęp online" },
      ],
      servicesEyebrow: "Oferta",
      servicesTitle: "Usługi, które budują naturalny efekt premium.",
      servicesDescription:
        "Na stronie głównej pokazujemy tylko najważniejsze kategorie. Pełne opisy, ceny i szczegóły trafią na osobną podstronę usług.",
      services: [
        {
          title: "Pielęgnacja twarzy",
          description:
            "Zabiegi oczyszczające, regenerujące i odżywcze dopasowane do potrzeb skóry.",
        },
        {
          title: "Brwi i rzęsy",
          description:
            "Stylizacja, laminacja i koloryzacja podkreślająca naturalną oprawę oczu.",
        },
        {
          title: "Makijaż okazjonalny",
          description:
            "Elegancki makijaż na ważne wydarzenia, sesje zdjęciowe i uroczystości.",
        },
      ],
      benefitsEyebrow: "Dlaczego my",
      benefitsTitle: "Spokojne doświadczenie od pierwszego kliknięcia.",
      benefitsDescription:
        "Ten układ ma od razu komunikować elegancję, zaufanie i prostą ścieżkę do kontaktu.",
      benefits: [
        {
          title: "Przejrzysta komunikacja",
          description:
            "Klient szybko widzi, czym zajmuje się salon i gdzie znaleźć szczegóły.",
        },
        {
          title: "Elegancki wygląd",
          description:
            "Jasna kolorystyka daje lekki, beauty charakter, a dark mode dodaje nowoczesności.",
        },
        {
          title: "Gotowe pod rozwój",
          description:
            "Struktura strony pozwala łatwo rozbudować ofertę, galerię, cennik i formularz.",
        },
      ],
      ctaTitle: "Gotowa na spokojną chwilę dla siebie?",
      ctaDescription:
        "Sekcja CTA prowadzi użytkownika do kontaktu lub rezerwacji. Później możemy podpiąć tu formularz, WhatsApp, Booksy albo inny system zapisów.",
      ctaButton: "Przejdź do kontaktu",
    },
    pages: {
      about: {
        eyebrow: "O firmie",
        title: "Studio stworzone z myślą o komforcie, jakości i detalu.",
        description:
          "Tutaj opiszemy historię salonu, filozofię pracy, doświadczenie zespołu oraz podejście do klientek i klientów.",
      },
      services: {
        eyebrow: "Oferta",
        title: "Usługi beauty dopasowane do różnych potrzeb.",
        description:
          "W tym miejscu pojawią się kategorie usług, krótkie opisy zabiegów oraz ich najważniejsze korzyści.",
      },
      pricing: {
        eyebrow: "Cennik",
        title: "Przejrzysty cennik bez zbędnego chaosu.",
        description:
          "Tutaj przygotujemy listę usług z cenami, czasem trwania oraz ewentualnymi pakietami.",
      },
      gallery: {
        eyebrow: "Galeria",
        title: "Efekty pracy pokazane w elegancki sposób.",
        description:
          "Ta podstrona będzie miejscem na zdjęcia salonu, realizacje, metamorfozy lub portfolio.",
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Umów wizytę albo zapytaj o szczegóły.",
        description:
          "Tutaj dodamy dane kontaktowe, adres, social media, mapę oraz formularz kontaktowy.",
      },
    },
    footer: "Wersja startowa strony beauty — PL/EN + light/dark mode.",
  },

  en: {
    brand: "Aurora Beauty Studio",
    languageLabel: "PL",
    themeLabel: "Theme",
    nav: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
    ],
    home: {
      eyebrow: "Beauty studio",
      title: "Subtle care, elegant results.",
      description:
        "A modern business website starter for a beauty studio with two languages, light and dark mode, and a clean structure for further development.",
      primaryCta: "View services",
      secondaryCta: "Book a visit",
      highlights: ["Facial care", "Brows and lashes", "Occasional makeup"],
      stats: [
        { value: "6+", label: "service categories" },
        { value: "2", label: "language versions" },
        { value: "24/7", label: "online access" },
      ],
      servicesEyebrow: "Services",
      servicesTitle: "Services designed for a natural premium effect.",
      servicesDescription:
        "The homepage highlights only the most important categories. Full descriptions, prices and details will live on the dedicated services page.",
      services: [
        {
          title: "Facial care",
          description:
            "Cleansing, regenerating and nourishing treatments adjusted to skin needs.",
        },
        {
          title: "Brows and lashes",
          description:
            "Styling, lamination and tinting that enhance the natural eye area.",
        },
        {
          title: "Occasional makeup",
          description:
            "Elegant makeup for important events, photoshoots and celebrations.",
        },
      ],
      benefitsEyebrow: "Why choose us",
      benefitsTitle: "A calm experience from the very first click.",
      benefitsDescription:
        "This layout is designed to communicate elegance, trust and a simple path to contact.",
      benefits: [
        {
          title: "Clear communication",
          description:
            "Visitors quickly understand what the studio offers and where to find details.",
        },
        {
          title: "Elegant visual style",
          description:
            "The light palette creates a soft beauty feel, while dark mode adds a modern touch.",
        },
        {
          title: "Ready to expand",
          description:
            "The structure makes it easy to extend services, gallery, pricing and contact forms.",
        },
      ],
      ctaTitle: "Ready for a calm moment for yourself?",
      ctaDescription:
        "This CTA section guides visitors toward contact or booking. Later we can connect it with a form, WhatsApp, Booksy or another booking system.",
      ctaButton: "Go to contact",
    },
    pages: {
      about: {
        eyebrow: "About",
        title: "A studio designed around comfort, quality and detail.",
        description:
          "This page will describe the studio story, work philosophy, team experience and client-focused approach.",
      },
      services: {
        eyebrow: "Services",
        title: "Beauty services tailored to different needs.",
        description:
          "This page will contain service categories, short treatment descriptions and their key benefits.",
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Clear pricing without unnecessary clutter.",
        description:
          "This page will include services, prices, duration and potential packages.",
      },
      gallery: {
        eyebrow: "Gallery",
        title: "Work results presented in an elegant way.",
        description:
          "This page will contain studio photos, results, transformations or a portfolio.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Book a visit or ask for details.",
        description:
          "This page will include contact details, address, social media, map and a contact form.",
      },
    },
    footer: "Beauty website starter — PL/EN + light/dark mode.",
  },
};
