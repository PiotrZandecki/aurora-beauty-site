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
      eyebrow: "Premium beauty studio",
      title: "Naturalne piękno dopracowane z uważnością.",
      description:
        "Studio beauty specjalizujące się w pielęgnacji twarzy, stylizacji brwi i rzęs oraz makijażu okazjonalnym — z naciskiem na subtelny efekt, komfort i dopracowane doświadczenie od pierwszego kontaktu po finalny rezultat.",
      primaryCta: "Zobacz usługi",
      secondaryCta: "Umów wizytę",
      highlights: [
        "Pielęgnacja twarzy",
        "Stylizacja brwi i rzęs",
        "Makijaż okazjonalny",
      ],
      stats: [
        { value: "3", label: "obszary specjalizacji" },
        { value: "1:1", label: "indywidualne podejście" },
        { value: "Soft", label: "naturalny efekt premium" },
      ],
      servicesEyebrow: "Oferta",
      servicesTitle:
        "Usługi stworzone z myślą o naturalnym, dopracowanym efekcie.",
      servicesDescription:
        "Wybierz obszar, który najlepiej odpowiada Twoim potrzebom — pielęgnacja skóry, oprawa oczu albo makijaż na ważną okazję.",
      services: [
        {
          title: "Pielęgnacja twarzy",
          description:
            "Zabiegi oczyszczające, regenerujące i odżywcze dobierane do aktualnych potrzeb skóry.",
        },
        {
          title: "Brwi i rzęsy",
          description:
            "Stylizacja oprawy oczu, która porządkuje rysy twarzy i podkreśla spojrzenie bez przerysowania.",
        },
        {
          title: "Makijaż okazjonalny",
          description:
            "Makijaż dopasowany do urody, światła, stylizacji i charakteru wydarzenia.",
        },
      ],
      benefitsEyebrow: "Dlaczego Aurora",
      benefitsTitle:
        "Spokojna wizyta, jasna komunikacja i efekt, który pasuje do Ciebie.",
      benefitsDescription:
        "W branży beauty zaufanie powstaje z detali: sposobu rozmowy, standardu pracy, atmosfery oraz efektu, który wygląda dobrze nie tylko po wyjściu z salonu.",
      benefits: [
        {
          title: "Naturalny efekt",
          description:
            "Zabiegi i stylizacje mają podkreślać urodę, nie ją przytłaczać. Stawiamy na świeżość, proporcje i elegancję.",
        },
        {
          title: "Indywidualny dobór",
          description:
            "Przed usługą omawiamy potrzeby, oczekiwania i ewentualne ograniczenia, aby dobrać odpowiednią ścieżkę.",
        },
        {
          title: "Komfort od początku",
          description:
            "Strona, kontakt i sama wizyta prowadzą użytkowniczkę prostą drogą: od zainteresowania do spokojnej decyzji.",
        },
      ],
      ctaTitle: "Chcesz dobrać usługę do swoich potrzeb?",
      ctaDescription:
        "Napisz, jaki efekt chcesz uzyskać albo wybierz interesującą Cię usługę. Pomożemy dobrać najlepszy kierunek przed wizytą.",
      ctaButton: "Przejdź do kontaktu",
    },
    pages: {
      about: {
        eyebrow: "O salonie",
        title:
          "Studio beauty, w którym najważniejsze są spokój, detal i naturalny efekt.",
        description:
          "Poznaj podejście Aurora Beauty Studio — miejsce stworzone dla osób, które chcą wyglądać świeżo, elegancko i nadal jak najlepsza wersja siebie.",
      },
      services: {
        eyebrow: "Usługi",
        title:
          "Pielęgnacja, stylizacja i makijaż dopasowane do Twoich potrzeb.",
        description:
          "Oferta obejmuje najważniejsze obszary beauty: pielęgnację twarzy, stylizację brwi i rzęs oraz makijaż okazjonalny.",
      },
      pricing: {
        eyebrow: "Cennik",
        title: "Przejrzyste ceny i usługi opisane bez zbędnego chaosu.",
        description:
          "Sprawdź orientacyjne ceny, czas trwania oraz pakiety usług. Finalny zakres może zostać dopasowany po krótkiej konsultacji.",
      },
      gallery: {
        eyebrow: "Galeria",
        title: "Efekty, klimat i detale, które pokazują styl salonu.",
        description:
          "Galeria pomaga zobaczyć kierunek estetyczny: naturalne efekty, spokojną atmosferę i dopracowane detale pracy.",
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Umów wizytę albo zapytaj, która usługa będzie najlepsza.",
        description:
          "Skontaktuj się telefonicznie, mailowo, przez social media albo formularz kontaktowy. Odpowiemy i pomożemy dobrać najlepszą opcję.",
      },
    },
    footer:
      "Premium beauty studio — pielęgnacja twarzy, brwi, rzęsy i makijaż okazjonalny.",
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
      eyebrow: "Premium beauty studio",
      title: "Natural beauty, refined with care.",
      description:
        "A beauty studio specializing in facial care, brows, lashes and occasion makeup — focused on subtle results, comfort and a polished experience from the first message to the final effect.",
      primaryCta: "View services",
      secondaryCta: "Book a visit",
      highlights: ["Facial care", "Brows and lashes", "Occasion makeup"],
      stats: [
        { value: "3", label: "specialized service areas" },
        { value: "1:1", label: "individual approach" },
        { value: "Soft", label: "natural premium result" },
      ],
      servicesEyebrow: "Services",
      servicesTitle: "Services designed for a natural, polished result.",
      servicesDescription:
        "Choose the area that best matches your needs — skin care, eye-area styling or makeup for an important occasion.",
      services: [
        {
          title: "Facial care",
          description:
            "Cleansing, regenerating and nourishing treatments selected according to current skin needs.",
        },
        {
          title: "Brows and lashes",
          description:
            "Eye-area styling that brings structure to the face and enhances the look without an overdone effect.",
        },
        {
          title: "Occasion makeup",
          description:
            "Makeup adjusted to natural features, lighting, styling and the character of the event.",
        },
      ],
      benefitsEyebrow: "Why Aurora",
      benefitsTitle:
        "A calm visit, clear communication and a result that feels like you.",
      benefitsDescription:
        "In beauty, trust is built through details: communication, work standards, atmosphere and a result that looks good beyond the salon visit.",
      benefits: [
        {
          title: "Natural result",
          description:
            "Treatments and styling are designed to enhance beauty, not overpower it. We focus on freshness, proportion and elegance.",
        },
        {
          title: "Individual selection",
          description:
            "Before the service, needs, expectations and possible limitations are discussed to choose the right direction.",
        },
        {
          title: "Comfort from the start",
          description:
            "The website, contact and visit experience guide the client through a simple path from interest to confident decision.",
        },
      ],
      ctaTitle: "Want to choose the right service for your needs?",
      ctaDescription:
        "Describe the result you want or choose the service you are interested in. We will help select the best direction before your visit.",
      ctaButton: "Go to contact",
    },
    pages: {
      about: {
        eyebrow: "About the studio",
        title:
          "A beauty studio where calm, detail and natural results matter most.",
        description:
          "Discover the approach behind Aurora Beauty Studio — a place created for people who want to look fresh, elegant and still like the best version of themselves.",
      },
      services: {
        eyebrow: "Services",
        title: "Care, styling and makeup tailored to your needs.",
        description:
          "The offer covers the key beauty areas: facial care, brow and lash styling, and occasion makeup.",
      },
      pricing: {
        eyebrow: "Pricing",
        title:
          "Clear prices and services described without unnecessary clutter.",
        description:
          "Check approximate prices, duration and service packages. The final scope may be adjusted after a short consultation.",
      },
      gallery: {
        eyebrow: "Gallery",
        title: "Results, atmosphere and details that show the studio style.",
        description:
          "The gallery helps present the aesthetic direction: natural results, calm atmosphere and carefully refined details.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Book a visit or ask which service will suit you best.",
        description:
          "Get in touch by phone, e-mail, social media or the contact form. We will reply and help you choose the best option.",
      },
    },
    footer:
      "Premium beauty studio — facial care, brows, lashes and occasion makeup.",
  },
};
