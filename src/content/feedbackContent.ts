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

type FeedbackFormOption = {
  value: string;
  label: string;
};

type FeedbackContent = {
  eyebrow: string;
  title: string;
  description: string;
  sourceLabel: string;

  summaryEyebrow: string;
  summaryTitle: string;
  summaryDescription: string;
  summaryStats: Array<{
    value: string;
    label: string;
  }>;

  externalLinksTitle: string;
  externalLinksDescription: string;
  googleReviewsLabel: string;
  facebookReviewsLabel: string;
  googleReviewsUrl: string;
  facebookReviewsUrl: string;

  formEyebrow: string;
  formTitle: string;
  formDescription: string;
  formLabels: {
    name: string;
    email: string;
    source: string;
    service: string;
    rating: string;
    message: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    noteTitle: string;
    noteDescription: string;
  };
  sourceOptions: FeedbackFormOption[];
  serviceOptions: FeedbackFormOption[];

  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  groups: FeedbackGroup[];
};

export const feedbackContent: Record<Language, FeedbackContent> = {
  pl: {
    eyebrow: "Opinie",
    title: "Feedback z różnych źródeł, jeden spójny obraz doświadczenia.",
    description:
      "Opinie zostały podzielone według źródła: wiadomości wysłane przez formularz strony, rekomendacje z Facebooka i recenzje z Google. Dzięki temu łatwiej ocenić zarówno efekt usług, jak i atmosferę wizyty.",
    sourceLabel: "Źródło opinii",

    summaryEyebrow: "Zaufanie",
    summaryTitle: "Opinie mają pokazywać doświadczenie, nie tylko ocenę.",
    summaryDescription:
      "Dobrze zaprojektowana sekcja opinii pomaga klientce zrozumieć, czego może się spodziewać: naturalnych efektów, spokojnej atmosfery, jasnej komunikacji i dopracowanej obsługi.",
    summaryStats: [
      {
        value: "3",
        label: "źródła feedbacku",
      },
      {
        value: "5★",
        label: "kierunek doświadczenia",
      },
      {
        value: "6+",
        label: "przykładowych opinii",
      },
    ],

    externalLinksTitle: "Sprawdź opinie w zewnętrznych kanałach",
    externalLinksDescription:
      "W realnym projekcie te przyciski prowadziłyby bezpośrednio do profilu Google Business oraz strony Facebook salonu.",
    googleReviewsLabel: "Opinie Google",
    facebookReviewsLabel: "Opinie Facebook",
    googleReviewsUrl: "https://www.google.com/search?q=Aurora+Beauty+Studio",
    facebookReviewsUrl: "https://www.facebook.com",

    formEyebrow: "Zostaw opinię",
    formTitle: "Podziel się swoim doświadczeniem po wizycie.",
    formDescription:
      "Formularz przygotowuje wiadomość e-mail z opinią. To rozwiązanie działa bez backendu, a jednocześnie pokazuje, jak można rozbudować stronę o zbieranie feedbacku od klientek.",
    formLabels: {
      name: "Imię",
      email: "Adres e-mail",
      source: "Źródło opinii",
      service: "Usługa",
      rating: "Ocena",
      message: "Treść opinii",
      submit: "Przygotuj opinię e-mail",
      successTitle: "Opinia została przygotowana",
      successMessage:
        "Jeśli aplikacja pocztowa nie otworzyła się automatycznie, możesz skopiować opinię i wysłać ją bezpośrednio na adres hello@aurorabeauty.pl.",
      noteTitle: "Jaką opinię warto zostawić?",
      noteDescription:
        "Najbardziej pomocne są opinie, które opisują konkretną usługę, efekt, atmosferę wizyty i to, czy komunikacja przed zabiegiem była jasna.",
    },
    sourceOptions: [
      { value: "website-form", label: "Formularz strony" },
      { value: "google", label: "Google" },
      { value: "facebook", label: "Facebook" },
    ],
    serviceOptions: [
      { value: "facial-care", label: "Pielęgnacja twarzy" },
      { value: "brows-lashes", label: "Brwi i rzęsy" },
      { value: "makeup", label: "Makijaż okazjonalny" },
      { value: "signature-glow", label: "Signature Glow Treatment" },
      { value: "consultation", label: "Konsultacja" },
      { value: "other", label: "Inna usługa" },
    ],

    ctaTitle: "Chcesz najpierw umówić wizytę?",
    ctaDescription:
      "Jeśli dopiero wybierasz usługę, przejdź do kontaktu i opisz, czego potrzebujesz. Na podstawie wiadomości łatwiej będzie dobrać najlepszy kierunek.",
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
      "Feedback is divided by source: messages submitted through the website form, Facebook recommendations and Google reviews. This makes it easier to evaluate both service results and the atmosphere of the visit.",
    sourceLabel: "Review source",

    summaryEyebrow: "Trust",
    summaryTitle: "Feedback should show the experience, not just the score.",
    summaryDescription:
      "A well-designed review section helps clients understand what to expect: natural results, calm atmosphere, clear communication and refined service.",
    summaryStats: [
      {
        value: "3",
        label: "feedback sources",
      },
      {
        value: "5★",
        label: "experience direction",
      },
      {
        value: "6+",
        label: "sample reviews",
      },
    ],

    externalLinksTitle: "Check reviews in external channels",
    externalLinksDescription:
      "In a real project, these buttons would lead directly to the Google Business profile and the studio’s Facebook page.",
    googleReviewsLabel: "Google reviews",
    facebookReviewsLabel: "Facebook reviews",
    googleReviewsUrl: "https://www.google.com/search?q=Aurora+Beauty+Studio",
    facebookReviewsUrl: "https://www.facebook.com",

    formEyebrow: "Leave feedback",
    formTitle: "Share your experience after the visit.",
    formDescription:
      "The form prepares an e-mail message with your review. It works without backend and shows how the website could support collecting client feedback.",
    formLabels: {
      name: "Name",
      email: "E-mail address",
      source: "Review source",
      service: "Service",
      rating: "Rating",
      message: "Review message",
      submit: "Prepare feedback e-mail",
      successTitle: "Feedback has been prepared",
      successMessage:
        "If your e-mail app did not open automatically, you can copy the review and send it directly to hello@aurorabeauty.pl.",
      noteTitle: "What makes a helpful review?",
      noteDescription:
        "The most helpful reviews describe the service, result, visit atmosphere and whether communication before the treatment was clear.",
    },
    sourceOptions: [
      { value: "website-form", label: "Website form" },
      { value: "google", label: "Google" },
      { value: "facebook", label: "Facebook" },
    ],
    serviceOptions: [
      { value: "facial-care", label: "Facial care" },
      { value: "brows-lashes", label: "Brows and lashes" },
      { value: "makeup", label: "Occasion makeup" },
      { value: "signature-glow", label: "Signature Glow Treatment" },
      { value: "consultation", label: "Consultation" },
      { value: "other", label: "Other service" },
    ],

    ctaTitle: "Would you like to book a visit first?",
    ctaDescription:
      "If you are still choosing a service, go to contact and describe what you need. Your message will help select the best direction.",
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
