import type { Language } from "@/types/site";

type Testimonial = {
  name: string;
  service: string;
  quote: string;
};

type TestimonialsContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: Testimonial[];
};

export const testimonialsContent: Record<Language, TestimonialsContent> = {
  pl: {
    eyebrow: "Opinie",
    title: "Zaufanie buduje się przez doświadczenie.",
    description:
      "Ta sekcja jest miejscem na prawdziwe opinie klientek i klientów. Na razie używamy przykładowych treści, żeby dopracować układ.",
    items: [
      {
        name: "Katarzyna",
        service: "Pielęgnacja twarzy",
        quote:
          "Bardzo spokojna atmosfera, jasne wyjaśnienie każdego kroku i efekt, który wygląda naturalnie. Dokładnie tego szukałam.",
      },
      {
        name: "Marta",
        service: "Brwi i rzęsy",
        quote:
          "Stylizacja brwi wyszła subtelnie, ale różnica była widoczna od razu. Podoba mi się, że efekt nie jest przerysowany.",
      },
      {
        name: "Aleksandra",
        service: "Makijaż wieczorowy",
        quote:
          "Makijaż trzymał się cały wieczór i świetnie wyglądał na zdjęciach. Wszystko było dopasowane do mojej stylizacji.",
      },
    ],
  },

  en: {
    eyebrow: "Testimonials",
    title: "Trust is built through experience.",
    description:
      "This section is a place for real client reviews. For now, we use sample content to refine the layout.",
    items: [
      {
        name: "Katarzyna",
        service: "Facial care",
        quote:
          "A very calm atmosphere, clear explanation of every step and a result that looked natural. Exactly what I was looking for.",
      },
      {
        name: "Marta",
        service: "Brows and lashes",
        quote:
          "The brow styling was subtle, but the difference was visible immediately. I liked that the effect was not overdone.",
      },
      {
        name: "Aleksandra",
        service: "Evening makeup",
        quote:
          "The makeup lasted all evening and looked great in photos. Everything was matched to my outfit and the occasion.",
      },
    ],
  },
};
