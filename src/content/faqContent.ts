import type { Language } from "@/types/site";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
};

export const faqContent: Record<Language, FaqContent> = {
  pl: {
    eyebrow: "FAQ",
    title: "Najczęstsze pytania przed pierwszą wizytą.",
    description:
      "Ta sekcja pomaga szybko odpowiedzieć na podstawowe wątpliwości i skraca drogę do kontaktu lub rezerwacji.",
    items: [
      {
        question: "Czy muszę wiedzieć dokładnie, którą usługę wybrać?",
        answer:
          "Nie. Możesz napisać, czego potrzebujesz albo jaki efekt chcesz uzyskać, a salon pomoże dobrać odpowiednią usługę.",
      },
      {
        question: "Czy ceny na stronie są ostateczne?",
        answer:
          "Na tym etapie ceny są przykładowe. W finalnej wersji można podać prawdziwy cennik, zakresy cen albo informację o wycenie indywidualnej.",
      },
      {
        question: "Czy formularz kontaktowy już wysyła wiadomości?",
        answer:
          "Aktualnie formularz działa jako bezpieczny placeholder frontendu. Pokazuje komunikat po wysłaniu, ale nie przesyła danych na e-mail.",
      },
      {
        question: "Czy strona może zostać połączona z systemem rezerwacji?",
        answer:
          "Tak. W kolejnym etapie można dodać link do Booksy, WhatsApp, Calendly, Google Forms albo własny formularz z backendem.",
      },
    ],
  },

  en: {
    eyebrow: "FAQ",
    title: "Common questions before the first visit.",
    description:
      "This section answers basic concerns and shortens the path to contact or booking.",
    items: [
      {
        question: "Do I need to know exactly which service to choose?",
        answer:
          "No. You can describe what you need or what result you want, and the studio can help choose the right service.",
      },
      {
        question: "Are the prices on the website final?",
        answer:
          "At this stage, prices are examples. In the final version, we can add real pricing, price ranges or individual quotation notes.",
      },
      {
        question: "Does the contact form already send messages?",
        answer:
          "Currently, the form works as a safe frontend placeholder. It shows a message after submit, but it does not send data by e-mail yet.",
      },
      {
        question: "Can the website be connected with a booking system?",
        answer:
          "Yes. In the next stage, we can add a Booksy, WhatsApp, Calendly, Google Forms link or a custom backend-powered form.",
      },
    ],
  },
};
