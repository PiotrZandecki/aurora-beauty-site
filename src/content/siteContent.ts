import type { Language } from "@/types/site";

type NavigationItem = {
  label: string;
  href: string;
};

type PageIntroContent = {
  eyebrow: string;
  title: string;
  description: string;
};

type StatItem = {
  value: string;
  label: string;
};

type HomeServiceItem = {
  title: string;
  description: string;
};

type HomeBenefitItem = {
  title: string;
  description: string;
};

type HomeContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  stats: StatItem[];
  highlights: string[];

  servicesEyebrow: string;
  servicesTitle: string;
  servicesDescription: string;
  services: HomeServiceItem[];

  benefitsEyebrow: string;
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: HomeBenefitItem[];

  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
};

type SiteContent = {
  brand: string;
  languageLabel: string;
  themeLabel: string;
  footer: string;
  nav: NavigationItem[];
  pages: {
    about: PageIntroContent;
    services: PageIntroContent;
    pricing: PageIntroContent;
    gallery: PageIntroContent;
    locations: PageIntroContent;
    feedback: PageIntroContent;
    booking: PageIntroContent;
    contact: PageIntroContent;
  };
  home: HomeContent;
};

export const siteContent: Record<Language, SiteContent> = {
  pl: {
    brand: "Aurora Beauty Studio",
    languageLabel: "EN",
    themeLabel: "Motyw",
    footer: "Natural beauty, refined with care.",
    nav: [
      { label: "Home", href: "/" },
      { label: "O nas", href: "/about" },
      { label: "Usługi", href: "/services" },
      { label: "Cennik", href: "/pricing" },
      { label: "Galeria", href: "/gallery" },
      { label: "Lokalizacje", href: "/locations" },
      { label: "Opinie", href: "/feedback" },
      { label: "Rezerwacja", href: "/booking" },
      { label: "Kontakt", href: "/contact" },
    ],
    pages: {
      about: {
        eyebrow: "O nas",
        title:
          "Beauty studio stworzone dla naturalnych efektów i spokojnego doświadczenia.",
        description:
          "Aurora Beauty Studio łączy pielęgnację, estetykę i komfort wizyty. To przestrzeń, w której usługa ma być nie tylko skuteczna, ale też spokojna, dopracowana i przyjemna.",
      },
      services: {
        eyebrow: "Usługi",
        title: "Pielęgnacja, brwi, rzęsy i makijaż w dopracowanym wydaniu.",
        description:
          "Oferta skupia się na usługach, które podkreślają naturalną urodę, poprawiają komfort skóry i pomagają przygotować się do ważnych okazji.",
      },
      pricing: {
        eyebrow: "Cennik",
        title: "Przejrzyste ceny i pakiety dopasowane do potrzeb.",
        description:
          "Cennik został zaprojektowany tak, aby łatwo porównać zakres usług, czas trwania i kierunek efektu przed rezerwacją wizyty.",
      },
      gallery: {
        eyebrow: "Galeria",
        title: "Zobacz efekty, atmosferę i estetykę salonu.",
        description:
          "Galeria pokazuje kierunek wizualny Aurora Beauty Studio: naturalne efekty, spokojne detale, elegancką przestrzeń i dopracowane doświadczenie klientki.",
      },
      locations: {
        eyebrow: "Lokalizacje",
        title: "Znajdź najbliższy salon Aurora Beauty Studio.",
        description:
          "Sprawdź najbliższą lokalizację na podstawie położenia urządzenia albo przejrzyj pełną listę salonów Aurora na całym świecie.",
      },
      feedback: {
        eyebrow: "Opinie",
        title: "Feedback z różnych źródeł, jeden spójny obraz doświadczenia.",
        description:
          "Zobacz opinie wysłane przez formularz strony, komentarze z Facebooka oraz recenzje Google. To przekrojowy obraz tego, jak klientki odbierają usługę, atmosferę i efekty.",
      },
      booking: {
        eyebrow: "Rezerwacja",
        title: "Wybierz usługę, osobę obsługującą i dogodny termin.",
        description:
          "Frontendowy moduł rezerwacji gotowy pod backend: wybór usługi, lokalizacji, pracownika oraz dostępnego terminu w kalendarzu najbliższych dni.",
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Umów wizytę albo zapytaj o najlepszy kierunek usługi.",
        description:
          "Napisz, czego potrzebujesz, wybierz lokalizację albo sprawdź najbliższy salon. Aurora Beauty Studio ułatwia kontakt, rezerwację i wybór właściwej usługi.",
      },
    },
    home: {
      eyebrow: "Premium beauty studio",
      title: "Naturalne piękno, dopracowane z troską.",
      description:
        "Aurora Beauty Studio to spokojna przestrzeń dla pielęgnacji twarzy, stylizacji brwi i rzęs oraz makijażu okazjonalnego. Wszystko po to, aby efekt był świeży, naturalny i dopasowany do Ciebie.",
      primaryCta: "Zobacz usługi",
      secondaryCta: "Umów wizytę",
      stats: [
        { value: "3", label: "główne obszary usług" },
        { value: "5★", label: "standard doświadczenia" },
        { value: "60+", label: "minut spokojnej wizyty" },
      ],
      highlights: [
        "indywidualne podejście do skóry",
        "naturalny, elegancki efekt",
        "spokojna atmosfera wizyty",
      ],

      servicesEyebrow: "Oferta",
      servicesTitle: "Usługi, które budują świeży i dopracowany wygląd.",
      servicesDescription:
        "Najważniejsze obszary pracy salonu skupiają się na cerze, oprawie oczu i makijażu dopasowanym do okazji.",
      services: [
        {
          title: "Pielęgnacja twarzy",
          description:
            "Zabiegi dla skóry, która potrzebuje oczyszczenia, ukojenia, regeneracji albo naturalnego blasku.",
        },
        {
          title: "Brwi i rzęsy",
          description:
            "Stylizacja oprawy oczu nastawiona na naturalny, schludny i elegancki efekt bez przerysowania.",
        },
        {
          title: "Makijaż okazjonalny",
          description:
            "Makijaż dopasowany do urody, stylizacji, światła i charakteru wydarzenia.",
        },
      ],

      benefitsEyebrow: "Dlaczego Aurora",
      benefitsTitle:
        "Spokojna wizyta, jasny proces i efekt, który wygląda naturalnie.",
      benefitsDescription:
        "Strona prowadzi klientkę od pierwszego wrażenia, przez ofertę i cennik, aż do kontaktu, lokalizacji i rezerwacji wizyty.",
      benefits: [
        {
          title: "Naturalny kierunek",
          description:
            "Efekty są dopasowane do urody i potrzeb, bez ciężkiego lub przypadkowego rezultatu.",
        },
        {
          title: "Czytelna oferta",
          description:
            "Każda usługa ma opis, czas, efekt i wskazanie, dla kogo będzie najlepsza.",
        },
        {
          title: "Premium doświadczenie",
          description:
            "Wizualny styl, język, animacje i rezerwacja wspierają wrażenie spokojnej marki beauty.",
        },
      ],

      ctaTitle: "Gotowa/gotowy sprawdzić, która usługa będzie najlepsza?",
      ctaDescription:
        "Przejdź do rezerwacji, wybierz usługę, osobę obsługującą i dogodny termin wizyty.",
      ctaButton: "Zarezerwuj wizytę",
    },
  },

  en: {
    brand: "Aurora Beauty Studio",
    languageLabel: "PL",
    themeLabel: "Theme",
    footer: "Natural beauty, refined with care.",
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Gallery", href: "/gallery" },
      { label: "Locations", href: "/locations" },
      { label: "Feedback", href: "/feedback" },
      { label: "Booking", href: "/booking" },
      { label: "Contact", href: "/contact" },
    ],
    pages: {
      about: {
        eyebrow: "About",
        title:
          "A beauty studio created for natural results and a calm experience.",
        description:
          "Aurora Beauty Studio combines care, aesthetics and visit comfort. It is a space where the service should feel effective, calm, refined and pleasant.",
      },
      services: {
        eyebrow: "Services",
        title: "Facial care, brows, lashes and makeup in a refined form.",
        description:
          "The offer focuses on services that enhance natural beauty, improve skin comfort and help prepare for important occasions.",
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Clear pricing and packages tailored to client needs.",
        description:
          "The pricing page is designed to make it easy to compare service scope, duration and expected result before booking.",
      },
      gallery: {
        eyebrow: "Gallery",
        title: "See the results, atmosphere and studio aesthetic.",
        description:
          "The gallery presents the visual direction of Aurora Beauty Studio: natural results, calm details, elegant space and a polished client experience.",
      },
      locations: {
        eyebrow: "Locations",
        title: "Find your nearest Aurora Beauty Studio.",
        description:
          "Check the nearest location using your device position or browse the full list of Aurora studios around the world.",
      },
      feedback: {
        eyebrow: "Feedback",
        title: "Reviews from different sources, one consistent experience.",
        description:
          "See feedback submitted through the website form, Facebook comments and Google reviews. Together, they show how clients experience the service, atmosphere and results.",
      },
      booking: {
        eyebrow: "Booking",
        title: "Choose a service, specialist and preferred time.",
        description:
          "A backend-ready booking frontend: service, location, employee and available appointment time selection with a calendar preview.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Book a visit or ask about the best service direction.",
        description:
          "Describe what you need, choose a location or check the nearest studio. Aurora Beauty Studio makes contact, booking and choosing the right service easier.",
      },
    },
    home: {
      eyebrow: "Premium beauty studio",
      title: "Natural beauty, refined with care.",
      description:
        "Aurora Beauty Studio is a calm space for facial care, brow and lash styling, and occasion makeup. Everything is designed to create a fresh, natural result tailored to you.",
      primaryCta: "View services",
      secondaryCta: "Book a visit",
      stats: [
        { value: "3", label: "main service areas" },
        { value: "5★", label: "experience standard" },
        { value: "60+", label: "minutes of calm care" },
      ],
      highlights: [
        "individual skin-focused approach",
        "natural, elegant result",
        "calm visit atmosphere",
      ],

      servicesEyebrow: "Offer",
      servicesTitle: "Services that create a fresh and polished look.",
      servicesDescription:
        "The studio’s key service areas focus on skin, eye-area styling and makeup tailored to the occasion.",
      services: [
        {
          title: "Facial care",
          description:
            "Treatments for skin that needs cleansing, soothing, regeneration or a natural glow boost.",
        },
        {
          title: "Brows and lashes",
          description:
            "Eye-area styling focused on a natural, clean and elegant effect without overdoing the result.",
        },
        {
          title: "Occasion makeup",
          description:
            "Makeup tailored to natural features, outfit, lighting and the character of the event.",
        },
      ],

      benefitsEyebrow: "Why Aurora",
      benefitsTitle:
        "A calm visit, clear process and a result that looks natural.",
      benefitsDescription:
        "The website guides the client from first impression, through offer and pricing, to contact, locations and appointment booking.",
      benefits: [
        {
          title: "Natural direction",
          description:
            "Results are adjusted to natural features and needs, without a heavy or random effect.",
        },
        {
          title: "Clear offer",
          description:
            "Each service includes description, duration, result and guidance on who it is best for.",
        },
        {
          title: "Premium experience",
          description:
            "Visual style, copy, animations and booking flow support the feeling of a calm beauty brand.",
        },
      ],

      ctaTitle: "Ready to check which service will suit you best?",
      ctaDescription:
        "Go to booking, choose a service, specialist and preferred appointment time.",
      ctaButton: "Book a visit",
    },
  },
};
