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
      "Krótka sekcja, która pomaga szybko rozwiać wątpliwości i ułatwia podjęcie decyzji o kontakcie lub rezerwacji.",
    items: [
      {
        question: "Czy muszę wiedzieć dokładnie, którą usługę wybrać?",
        answer:
          "Nie. Wystarczy opisać, czego potrzebujesz albo jaki efekt chcesz uzyskać. Na tej podstawie można dobrać najlepszą usługę lub zaproponować krótką konsultację.",
      },
      {
        question: "Czy ceny na stronie są ostateczne?",
        answer:
          "Cennik pokazuje podstawowe ceny i orientacyjny zakres usług. Finalna cena może zależeć od wybranego wariantu, czasu pracy, kondycji skóry lub dodatkowych elementów usługi.",
      },
      {
        question: "Jak przygotować się do pierwszej wizyty?",
        answer:
          "Najlepiej przyjść bez pośpiechu i, jeśli to możliwe, bez ciężkiego makijażu przy usługach pielęgnacyjnych. Przy makijażu okazjonalnym warto zabrać inspiracje lub zdjęcie stylizacji.",
      },
      {
        question: "Jak najlepiej umówić termin?",
        answer:
          "Najprościej skorzystać z formularza kontaktowego, telefonu, wiadomości e-mail albo Instagrama. W wiadomości warto podać usługę, preferowany termin i krótki opis oczekiwanego efektu.",
      },
    ],
  },

  en: {
    eyebrow: "FAQ",
    title: "Common questions before the first visit.",
    description:
      "A short section that helps answer key concerns and makes the decision to contact or book easier.",
    items: [
      {
        question: "Do I need to know exactly which service to choose?",
        answer:
          "No. It is enough to describe what you need or what result you want. Based on that, the right service or a short consultation can be recommended.",
      },
      {
        question: "Are the prices on the website final?",
        answer:
          "The pricing page shows base prices and approximate service scope. The final price may depend on the selected variant, work time, skin condition or additional service elements.",
      },
      {
        question: "How should I prepare for my first visit?",
        answer:
          "It is best to arrive without rushing and, if possible, without heavy makeup for facial treatments. For occasion makeup, inspiration photos or outfit references are helpful.",
      },
      {
        question: "What is the best way to book an appointment?",
        answer:
          "The easiest way is to use the contact form, phone, e-mail or Instagram. In the message, it helps to include the service, preferred date and a short description of the desired result.",
      },
    ],
  },
};
