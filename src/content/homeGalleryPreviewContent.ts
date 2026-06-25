import type { Language } from "@/types/site";

type GalleryPreviewItem = {
  title: string;
  category: string;
  description: string;
};

type HomeGalleryPreviewContent = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  items: GalleryPreviewItem[];
};

export const homeGalleryPreviewContent: Record<
  Language,
  HomeGalleryPreviewContent
> = {
  pl: {
    eyebrow: "Efekty i klimat",
    title: "Zobacz kierunek estetyczny salonu.",
    description:
      "Galeria pomaga ocenić styl pracy jeszcze przed pierwszą wizytą: naturalne efekty, spokojne detale i dopracowaną atmosferę miejsca.",
    buttonLabel: "Przejdź do galerii",
    items: [
      {
        title: "Natural glow",
        category: "Pielęgnacja twarzy",
        description: "Świeży, wypoczęty wygląd skóry bez ciężkiego efektu.",
      },
      {
        title: "Soft brows",
        category: "Brwi i rzęsy",
        description: "Oprawa oczu podkreślona w naturalny, elegancki sposób.",
      },
      {
        title: "Occasion makeup",
        category: "Makijaż",
        description: "Makijaż dopasowany do wydarzenia, stylizacji i światła.",
      },
    ],
  },

  en: {
    eyebrow: "Results and atmosphere",
    title: "See the studio’s aesthetic direction.",
    description:
      "The gallery helps understand the style before the first visit: natural results, calm details and a polished studio atmosphere.",
    buttonLabel: "Go to gallery",
    items: [
      {
        title: "Natural glow",
        category: "Facial care",
        description: "A fresh, rested skin appearance without a heavy effect.",
      },
      {
        title: "Soft brows",
        category: "Brows and lashes",
        description: "Eye-area styling enhanced in a natural and elegant way.",
      },
      {
        title: "Occasion makeup",
        category: "Makeup",
        description:
          "Makeup adjusted to the event, outfit and lighting conditions.",
      },
    ],
  },
};
