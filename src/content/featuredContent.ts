import type { Language } from "@/types/site";

type FeaturedContent = {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  details: string[];
  buttonLabel: string;
};

export const featuredContent: Record<Language, FeaturedContent> = {
  pl: {
    eyebrow: "Wyróżniona usługa",
    title: "Signature Glow Treatment",
    description:
      "Przykładowy zabieg flagowy salonu — połączenie konsultacji, delikatnego oczyszczenia i regenerującej pielęgnacji twarzy. To dobra sekcja do promowania najważniejszej usługi albo sezonowej oferty.",
    badge: "Najczęściej wybierane",
    details: [
      "czas trwania: około 75 minut",
      "dla skóry zmęczonej, suchej lub pozbawionej blasku",
      "efekt: świeższa, bardziej promienna i ukojona skóra",
    ],
    buttonLabel: "Zapytaj o zabieg",
  },

  en: {
    eyebrow: "Featured service",
    title: "Signature Glow Treatment",
    description:
      "A sample flagship treatment — combining consultation, gentle cleansing and regenerating facial care. This section is a good place to promote the most important service or seasonal offer.",
    badge: "Most requested",
    details: [
      "duration: around 75 minutes",
      "for tired, dry or dull-looking skin",
      "result: fresher, calmer and more radiant skin",
    ],
    buttonLabel: "Ask about treatment",
  },
};
