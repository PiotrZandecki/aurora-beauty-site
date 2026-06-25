import type { Language } from "@/types/site";

type GalleryPreviewItem = {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
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
        imageSrc: "/images/natural-glow.png",
        imageAlt:
          "Naturalny efekt glow po pielęgnacji twarzy w premium beauty studio",
      },
      {
        title: "Soft brows",
        category: "Brwi i rzęsy",
        description: "Oprawa oczu podkreślona w naturalny, elegancki sposób.",
        imageSrc: "/images/soft-brows.png",
        imageAlt: "Naturalnie podkreślone brwi i rzęsy w premium beauty studio",
      },
      {
        title: "Occasion makeup",
        category: "Makijaż",
        description: "Makijaż dopasowany do wydarzenia, stylizacji i światła.",
        imageSrc: "/images/occasion-makeup.png",
        imageAlt: "Elegancki makijaż okazjonalny w premium beauty studio",
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
        imageSrc: "/images/natural-glow.png",
        imageAlt:
          "Natural glow result after facial care in a premium beauty studio",
      },
      {
        title: "Soft brows",
        category: "Brows and lashes",
        description: "Eye-area styling enhanced in a natural and elegant way.",
        imageSrc: "/images/soft-brows.png",
        imageAlt:
          "Naturally enhanced brows and lashes in a premium beauty studio",
      },
      {
        title: "Occasion makeup",
        category: "Makeup",
        description:
          "Makeup adjusted to the event, outfit and lighting conditions.",
        imageSrc: "/images/occasion-makeup.png",
        imageAlt: "Elegant occasion makeup in a premium beauty studio",
      },
    ],
  },
};
