import type { Language, NavigationItem } from "@/types/site";

type PageContent = {
  eyebrow: string;
  title: string;
  description: string;
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
