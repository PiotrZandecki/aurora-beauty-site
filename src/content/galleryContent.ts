import type { Language } from "@/types/site";

type GalleryItem = {
  id: string;
  title: string;
  categoryId: string;
  category: string;
  description: string;
  detail: string;
};

type GalleryHighlight = {
  title: string;
  description: string;
};

type GalleryContent = {
  introEyebrow: string;
  introTitle: string;
  introDescription: string;
  visualLabel: string;
  allFilterLabel: string;
  filtersTitle: string;
  openLabel: string;
  closeLabel: string;
  modalCategoryLabel: string;
  modalDescriptionLabel: string;
  modalDetailLabel: string;
  modalCtaLabel: string;
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
    introTitle: "Efekty, klimat i detale, które pokazują styl salonu.",
    introDescription:
      "Galeria pomaga zobaczyć kierunek estetyczny Aurora Beauty Studio: naturalne efekty, subtelne detale, spokojną atmosferę i dopracowaną prezentację usług.",
    visualLabel: "Kierunek estetyczny",
    allFilterLabel: "Wszystkie",
    filtersTitle: "Filtruj galerię",
    openLabel: "Otwórz podgląd",
    closeLabel: "Zamknij podgląd",
    modalCategoryLabel: "Kategoria",
    modalDescriptionLabel: "Opis",
    modalDetailLabel: "Na co zwrócić uwagę",
    modalCtaLabel: "Zapytaj o podobny efekt",
    items: [
      {
        id: "natural-glow",
        title: "Natural glow",
        categoryId: "facial-care",
        category: "Pielęgnacja twarzy",
        description:
          "Świeży, promienny kierunek pielęgnacji dla skóry, która potrzebuje odświeżenia i komfortu.",
        detail:
          "Ten typ efektu dobrze komunikuje naturalność, lekkość i zadbaną skórę bez ciężkiego, przerysowanego rezultatu.",
      },
      {
        id: "soft-brows",
        title: "Soft brows",
        categoryId: "brows-lashes",
        category: "Brwi i rzęsy",
        description:
          "Subtelnie uporządkowana oprawa oczu, która podkreśla rysy twarzy i nie dominuje całego wyglądu.",
        detail:
          "W galerii warto pokazywać zbliżenia brwi i rzęs, aby użytkowniczka mogła ocenić precyzję oraz poziom naturalności.",
      },
      {
        id: "occasion-makeup",
        title: "Occasion makeup",
        categoryId: "makeup",
        category: "Makijaż",
        description:
          "Makijaż dopasowany do okazji, stylizacji, światła i oczekiwanego poziomu intensywności.",
        detail:
          "Najlepiej sprawdzają się ujęcia pokazujące cerę, oko i całościowy balans makijażu — zarówno na żywo, jak i na zdjęciach.",
      },
      {
        id: "studio-details",
        title: "Studio details",
        categoryId: "studio",
        category: "Wnętrze salonu",
        description:
          "Detale przestrzeni, które budują poczucie spokoju, estetyki i profesjonalnego standardu.",
        detail:
          "Zdjęcia wnętrza pomagają zmniejszyć niepewność przed pierwszą wizytą i pokazują charakter miejsca.",
      },
      {
        id: "before-after",
        title: "Before & after",
        categoryId: "transformation",
        category: "Metamorfoza",
        description:
          "Porównanie kierunku przed i po, pokazujące zmianę w sposób czytelny, elegancki i uczciwy.",
        detail:
          "Przy metamorfozach kluczowe jest podobne światło, kadr i neutralna prezentacja, aby efekt był wiarygodny.",
      },
      {
        id: "beauty-ritual",
        title: "Beauty ritual",
        categoryId: "atmosphere",
        category: "Atmosfera",
        description:
          "Ujęcia pokazujące spokojny rytm wizyty, komfort klientki i dopracowany charakter usługi.",
        detail:
          "Takie zdjęcia dobrze wspierają markę premium, bo pokazują nie tylko efekt, ale też doświadczenie wizyty.",
      },
    ],
    highlightsEyebrow: "Rola galerii",
    highlightsTitle:
      "Galeria powinna budować zaufanie, nie tylko wyglądać ładnie.",
    highlightsDescription:
      "Dobrze dobrane zdjęcia pomagają klientce zrozumieć styl salonu, poziom naturalności efektów i atmosferę miejsca jeszcze przed pierwszym kontaktem.",
    highlights: [
      {
        title: "Efekty usług",
        description:
          "Zdjęcia po zabiegach i stylizacjach pokazują jakość pracy oraz pomagają wybrać właściwy kierunek usługi.",
      },
      {
        title: "Wnętrze salonu",
        description:
          "Ujęcia przestrzeni budują poczucie bezpieczeństwa i pokazują standard miejsca, do którego klientka przychodzi.",
      },
      {
        title: "Detale i atmosfera",
        description:
          "Produkty, światło, stanowisko pracy i spokojne detale wzmacniają premium charakter marki.",
      },
    ],
    noteTitle: "Jak korzystać z galerii",
    noteDescription:
      "Kliknij wybrany element, aby zobaczyć większy podgląd i krótki opis. Przy realnych zdjęciach ten układ można wykorzystać do prezentacji efektów, wnętrza, metamorfoz i materiałów z sesji.",
    ctaTitle: "Podoba Ci się kierunek estetyczny salonu?",
    ctaDescription:
      "Jeśli szukasz naturalnego efektu, spokojnej atmosfery i dopracowanej usługi, przejdź do kontaktu i opisz, czego potrzebujesz.",
    ctaButton: "Przejdź do kontaktu",
  },

  en: {
    introEyebrow: "Gallery",
    introTitle: "Results, atmosphere and details that show the studio style.",
    introDescription:
      "The gallery helps present the aesthetic direction of Aurora Beauty Studio: natural results, subtle details, calm atmosphere and polished service presentation.",
    visualLabel: "Aesthetic direction",
    allFilterLabel: "All",
    filtersTitle: "Filter gallery",
    openLabel: "Open preview",
    closeLabel: "Close preview",
    modalCategoryLabel: "Category",
    modalDescriptionLabel: "Description",
    modalDetailLabel: "What to notice",
    modalCtaLabel: "Ask about a similar result",
    items: [
      {
        id: "natural-glow",
        title: "Natural glow",
        categoryId: "facial-care",
        category: "Facial care",
        description:
          "A fresh, radiant care direction for skin that needs refreshment and comfort.",
        detail:
          "This type of result communicates naturalness, lightness and well-cared-for skin without a heavy or overdone effect.",
      },
      {
        id: "soft-brows",
        title: "Soft brows",
        categoryId: "brows-lashes",
        category: "Brows and lashes",
        description:
          "Subtly refined eye-area styling that enhances facial features without dominating the entire look.",
        detail:
          "Close-up shots of brows and lashes help visitors judge precision and the level of naturalness.",
      },
      {
        id: "occasion-makeup",
        title: "Occasion makeup",
        categoryId: "makeup",
        category: "Makeup",
        description:
          "Makeup adjusted to the occasion, outfit, lighting and desired level of intensity.",
        detail:
          "The best visuals show skin, eyes and the overall makeup balance — both in person and in photos.",
      },
      {
        id: "studio-details",
        title: "Studio details",
        categoryId: "studio",
        category: "Studio interior",
        description:
          "Space details that build a sense of calm, aesthetics and professional standard.",
        detail:
          "Interior photos reduce uncertainty before the first visit and show the character of the place.",
      },
      {
        id: "before-after",
        title: "Before & after",
        categoryId: "transformation",
        category: "Transformation",
        description:
          "A clear and elegant comparison showing the direction before and after the service.",
        detail:
          "For transformations, similar light, framing and honest presentation are key to making the result credible.",
      },
      {
        id: "beauty-ritual",
        title: "Beauty ritual",
        categoryId: "atmosphere",
        category: "Atmosphere",
        description:
          "Visuals showing the calm rhythm of the visit, client comfort and the refined character of the service.",
        detail:
          "These visuals support a premium brand because they show not only the result, but also the experience.",
      },
    ],
    highlightsEyebrow: "Gallery purpose",
    highlightsTitle: "A gallery should build trust, not just look pretty.",
    highlightsDescription:
      "Well-selected photos help clients understand the studio style, the natural level of results and the atmosphere of the place before first contact.",
    highlights: [
      {
        title: "Service results",
        description:
          "After-service visuals show work quality and help visitors choose the right direction.",
      },
      {
        title: "Studio interior",
        description:
          "Photos of the space build comfort and show the standard of the place the client is visiting.",
      },
      {
        title: "Details and atmosphere",
        description:
          "Products, lighting, workstation and calm detail shots strengthen the premium character of the brand.",
      },
    ],
    noteTitle: "How to use the gallery",
    noteDescription:
      "Click an item to see a larger preview and short description. With real photos, this layout can present results, interiors, transformations and session materials.",
    ctaTitle: "Do you like the studio’s aesthetic direction?",
    ctaDescription:
      "If you are looking for a natural result, calm atmosphere and refined service, go to contact and describe what you need.",
    ctaButton: "Go to contact",
  },
};
