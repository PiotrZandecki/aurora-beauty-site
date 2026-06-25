import type { Language } from "@/types/site";

type GalleryItem = {
  title: string;
  category: string;
  description: string;
};

type GalleryHighlight = {
  title: string;
  description: string;
};

type GalleryContent = {
  introEyebrow: string;
  introTitle: string;
  introDescription: string;
  featuredLabel: string;
  items: GalleryItem[];
  highlightsEyebrow: string;
  highlightsTitle: string;
  highlightsDescription: string;
  highlights: GalleryHighlight[];
  noteTitle: string;
  noteDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
};

export const galleryContent: Record<Language, GalleryContent> = {
  pl: {
    introEyebrow: "Galeria",
    introTitle:
      "Miejsce na efekty pracy, klimat salonu i wizualną historię marki.",
    introDescription:
      "Galeria pomaga użytkownikowi szybko poczuć styl salonu. Później możemy tutaj dodać prawdziwe zdjęcia wnętrza, realizacje, metamorfozy i materiały z social mediów.",
    featuredLabel: "Przykładowe ujęcie",
    items: [
      {
        title: "Natural glow",
        category: "Pielęgnacja twarzy",
        description:
          "Placeholder pod zdjęcie efektu zabiegu pielęgnacyjnego lub detalu skóry po wizycie.",
      },
      {
        title: "Soft brows",
        category: "Brwi i rzęsy",
        description:
          "Miejsce na zdjęcie stylizacji brwi, laminacji albo subtelnego podkreślenia oprawy oczu.",
      },
      {
        title: "Evening makeup",
        category: "Makijaż",
        description:
          "Układ pod zdjęcie makijażu wieczorowego, ślubnego albo sesyjnego.",
      },
      {
        title: "Studio details",
        category: "Wnętrze salonu",
        description:
          "Tutaj może pojawić się zdjęcie stanowiska pracy, recepcji, kosmetyków albo detali wystroju.",
      },
      {
        title: "Before & after",
        category: "Metamorfoza",
        description:
          "Placeholder pod zestawienie przed i po, które później możemy rozbudować o slider.",
      },
      {
        title: "Beauty ritual",
        category: "Atmosfera",
        description:
          "Miejsce na zdjęcie pokazujące spokojny, elegancki klimat wizyty.",
      },
    ],
    highlightsEyebrow: "Co pokazać",
    highlightsTitle:
      "Galeria powinna budować zaufanie, nie tylko wyglądać ładnie.",
    highlightsDescription:
      "Dobrze dobrane zdjęcia pomagają klientce lub klientowi zrozumieć styl salonu jeszcze przed pierwszą wizytą.",
    highlights: [
      {
        title: "Efekty usług",
        description:
          "Zdjęcia po zabiegach pokazują jakość pracy i pomagają wybrać odpowiednią usługę.",
      },
      {
        title: "Wnętrze salonu",
        description:
          "Kilka ujęć przestrzeni buduje poczucie bezpieczeństwa i pokazuje standard miejsca.",
      },
      {
        title: "Detale i atmosfera",
        description:
          "Ujęcia produktów, stanowiska i spokojnych detali wzmacniają premium charakter strony.",
      },
    ],
    noteTitle: "W kolejnym etapie",
    noteDescription:
      "Możemy dodać prawdziwe zdjęcia, filtrowanie galerii, powiększanie zdjęć po kliknięciu, sekcję Instagram albo slider metamorfoz przed/po.",
    ctaTitle: "Podoba Ci się styl galerii?",
    ctaDescription:
      "Po dodaniu prawdziwych zdjęć ta podstrona będzie jednym z najmocniejszych elementów zaufania na stronie.",
    ctaButton: "Przejdź do kontaktu",
  },

  en: {
    introEyebrow: "Gallery",
    introTitle:
      "A place for results, studio atmosphere and the visual story of the brand.",
    introDescription:
      "The gallery helps visitors quickly understand the studio style. Later we can add real interior photos, work results, transformations and social media materials.",
    featuredLabel: "Sample shot",
    items: [
      {
        title: "Natural glow",
        category: "Facial care",
        description:
          "A placeholder for a treatment result photo or skin detail after a visit.",
      },
      {
        title: "Soft brows",
        category: "Brows and lashes",
        description:
          "A place for brow styling, lamination or subtle eye-area enhancement photos.",
      },
      {
        title: "Evening makeup",
        category: "Makeup",
        description:
          "A layout for evening, bridal or photoshoot makeup images.",
      },
      {
        title: "Studio details",
        category: "Studio interior",
        description:
          "This can show the workstation, reception, cosmetics or interior details.",
      },
      {
        title: "Before & after",
        category: "Transformation",
        description:
          "A placeholder for before-and-after comparison that can later become a slider.",
      },
      {
        title: "Beauty ritual",
        category: "Atmosphere",
        description:
          "A place for a photo showing the calm and elegant atmosphere of a visit.",
      },
    ],
    highlightsEyebrow: "What to show",
    highlightsTitle: "A gallery should build trust, not just look pretty.",
    highlightsDescription:
      "Well-selected photos help visitors understand the studio style before their first visit.",
    highlights: [
      {
        title: "Service results",
        description:
          "After-treatment photos show work quality and help visitors choose the right service.",
      },
      {
        title: "Studio interior",
        description:
          "A few photos of the space build comfort and show the standard of the place.",
      },
      {
        title: "Details and mood",
        description:
          "Product, workstation and calm detail shots strengthen the premium character of the website.",
      },
    ],
    noteTitle: "Next stage",
    noteDescription:
      "We can add real photos, gallery filtering, image enlargement on click, Instagram section or a before-and-after transformation slider.",
    ctaTitle: "Do you like the gallery direction?",
    ctaDescription:
      "After adding real photos, this page can become one of the strongest trust-building parts of the website.",
    ctaButton: "Go to contact",
  },
};
