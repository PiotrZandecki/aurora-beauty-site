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
      "Autorska propozycja dla skóry, która potrzebuje odświeżenia, ukojenia i naturalnego blasku. Zabieg łączy krótką konsultację, delikatne oczyszczenie oraz regenerującą pielęgnację dobraną do aktualnych potrzeb skóry.",
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
      "A signature choice for skin that needs refreshment, comfort and natural glow. The treatment combines a short consultation, gentle cleansing and regenerating care selected according to current skin needs.",
    badge: "Most requested",
    details: [
      "duration: around 75 minutes",
      "for tired, dry or dull-looking skin",
      "result: fresher, calmer and more radiant skin",
    ],
    buttonLabel: "Ask about treatment",
  },
};
