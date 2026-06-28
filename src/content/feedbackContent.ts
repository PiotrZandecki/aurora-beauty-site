import type { Language } from "@/types/site";

type FeedbackItem = {
  name: string;
  meta: string;
  rating: number;
  quote: string;
};

type FeedbackGroup = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: FeedbackItem[];
};

type FeedbackContent = {
  eyebrow: string;
  title: string;
  description: string;
  sourceLabel: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  groups: FeedbackGroup[];
};

export const feedbackContent: Record<Language, FeedbackContent> = {
  pl: {
    eyebrow: "Feedback",
    title: "Opinie z różnych źródeł, jeden spójny obraz doświadczenia.",
    description:
      "Sekcja feedbacku pokazuje trzy typy opinii: wiadomości wysłane przez formularz strony, opinie z Facebooka oraz recenzje z Google. Dzięki temu użytkownik widzi zarówno spontaniczne komentarze, jak i bardziej publiczne rekomendacje.",
    sourceLabel: "Źródło opinii",
    ctaTitle: "Chcesz podzielić się swoją opinią?",
    ctaDescription:
      "Po wizycie możesz wysłać krótką wiadomość przez formularz kontaktowy albo zostawić recenzję w wybranym kanale.",
    ctaButton: "Przejdź do kontaktu",
    groups: [
      {
        id: "website-form",
        label: "Formularz strony",
        title: "Opinie wysłane przez formularz",
        description:
          "Bezpośrednie wiadomości od klientek, które po wizycie chciały opisać swoje doświadczenie w spokojniejszej, prywatnej formie.",
        items: [
          {
            name: "Katarzyna M.",
            meta: "Signature Glow Treatment",
            rating: 5,
            quote:
              "Najbardziej doceniłam spokojną atmosferę i to, że efekt był dokładnie taki, jak chciałam — świeży, naturalny i bez przerysowania.",
          },
          {
            name: "Natalia P.",
            meta: "Konsultacja pielęgnacyjna",
            rating: 5,
            quote:
              "Po raz pierwszy ktoś tak jasno wytłumaczył mi, czego potrzebuje moja skóra. Wyszłam z konkretnym planem, a nie z przypadkową listą produktów.",
          },
        ],
      },
      {
        id: "facebook",
        label: "Facebook",
        title: "Opinie z Facebooka",
        description:
          "Krótsze, bardziej spontaniczne rekomendacje zostawiane po usługach, makijażu okazjonalnym i wizytach przed ważnymi wydarzeniami.",
        items: [
          {
            name: "Monika R.",
            meta: "Makijaż okazjonalny",
            rating: 5,
            quote:
              "Makijaż wyglądał pięknie na żywo i świetnie wyszedł na zdjęciach. Nic się nie warzyło, nic nie było za ciężkie.",
          },
          {
            name: "Alicja W.",
            meta: "Brwi i rzęsy",
            rating: 5,
            quote:
              "Bardzo naturalny efekt i ogromna dokładność. W końcu moje brwi są podkreślone, ale dalej wyglądają jak moje.",
          },
        ],
      },
      {
        id: "google",
        label: "Google",
        title: "Recenzje z Google",
        description:
          "Najbardziej publiczny typ feedbacku — krótka ocena doświadczenia, standardu salonu, efektu usługi i kontaktu.",
        items: [
          {
            name: "Julia K.",
            meta: "Facial care",
            rating: 5,
            quote:
              "Piękne miejsce, bardzo czysto, spokojnie i profesjonalnie. Zabieg był dopasowany do skóry, a nie robiony według jednego schematu.",
          },
          {
            name: "Marta S.",
            meta: "Aurora Warsaw Flagship",
            rating: 5,
            quote:
              "Świetny kontakt, jasne wyjaśnienia i bardzo przyjemna atmosfera. To miejsce, do którego chce się wracać.",
          },
        ],
      },
    ],
  },

  en: {
    eyebrow: "Feedback",
    title: "Reviews from different sources, one consistent client experience.",
    description:
      "The feedback section shows three types of reviews: messages submitted through the website form, Facebook opinions and Google reviews. This gives visitors a more complete view of both private and public recommendations.",
    sourceLabel: "Review source",
    ctaTitle: "Would you like to share your feedback?",
    ctaDescription:
      "After your visit, you can send a short message through the contact form or leave a review in your preferred channel.",
    ctaButton: "Go to contact",
    groups: [
      {
        id: "website-form",
        label: "Website form",
        title: "Reviews sent through the form",
        description:
          "Direct messages from clients who wanted to describe their experience in a calmer, more private way after the visit.",
        items: [
          {
            name: "Katarzyna M.",
            meta: "Signature Glow Treatment",
            rating: 5,
            quote:
              "I appreciated the calm atmosphere and the result was exactly what I wanted — fresh, natural and not overdone.",
          },
          {
            name: "Natalia P.",
            meta: "Skincare consultation",
            rating: 5,
            quote:
              "For the first time, someone clearly explained what my skin actually needed. I left with a real plan, not a random product list.",
          },
        ],
      },
      {
        id: "facebook",
        label: "Facebook",
        title: "Facebook opinions",
        description:
          "Shorter, more spontaneous recommendations left after services, occasion makeup and visits before important events.",
        items: [
          {
            name: "Monika R.",
            meta: "Occasion makeup",
            rating: 5,
            quote:
              "The makeup looked beautiful in person and photographed really well. It stayed fresh and never felt too heavy.",
          },
          {
            name: "Alicja W.",
            meta: "Brows and lashes",
            rating: 5,
            quote:
              "A very natural result and great attention to detail. My brows are finally defined but still look like mine.",
          },
        ],
      },
      {
        id: "google",
        label: "Google",
        title: "Google reviews",
        description:
          "The most public type of feedback — a quick review of the experience, studio standard, service result and communication.",
        items: [
          {
            name: "Julia K.",
            meta: "Facial care",
            rating: 5,
            quote:
              "A beautiful place, very clean, calm and professional. The treatment was matched to my skin, not done by one fixed template.",
          },
          {
            name: "Marta S.",
            meta: "Aurora Warsaw Flagship",
            rating: 5,
            quote:
              "Great communication, clear explanations and a very pleasant atmosphere. This is a place you want to come back to.",
          },
        ],
      },
    ],
  },
};
