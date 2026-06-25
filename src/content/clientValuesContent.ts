import type { Language } from "@/types/site";

type ClientValue = {
  title: string;
  description: string;
};

type ClientValuesContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ClientValue[];
};

export const clientValuesContent: Record<Language, ClientValuesContent> = {
  pl: {
    eyebrow: "Doświadczenie klientki",
    title: "Co powinno zostać po wizycie?",
    description:
      "Dobra usługa beauty to nie tylko efekt w lustrze. To także poczucie spokoju, zrozumienia i pewności, że wybrany kierunek naprawdę pasuje do Ciebie.",
    items: [
      {
        title: "Poczucie zaopiekowania",
        description:
          "Od pierwszej wiadomości po zalecenia po wizycie — komunikacja powinna być jasna, spokojna i konkretna.",
      },
      {
        title: "Efekt bez przerysowania",
        description:
          "Celem jest świeży, elegancki rezultat, który podkreśla naturalne rysy i nie wymaga tłumaczenia, że „to miało tak wyglądać”.",
      },
      {
        title: "Jasna decyzja",
        description:
          "Klientka powinna wiedzieć, co zostało wykonane, dlaczego i jak utrzymać efekt po wyjściu z salonu.",
      },
    ],
  },

  en: {
    eyebrow: "Client experience",
    title: "What should remain after the visit?",
    description:
      "A good beauty service is not only about the result in the mirror. It is also about calm, clarity and confidence that the chosen direction truly suits you.",
    items: [
      {
        title: "Feeling taken care of",
        description:
          "From the first message to aftercare guidance — communication should be clear, calm and specific.",
      },
      {
        title: "A result without overdoing",
        description:
          "The goal is a fresh, elegant result that enhances natural features and does not need explanation.",
      },
      {
        title: "A clear decision",
        description:
          "The client should know what was done, why it was chosen and how to maintain the effect after leaving the studio.",
      },
    ],
  },
};
