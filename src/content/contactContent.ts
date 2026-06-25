import type { Language } from "@/types/site";

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  description: string;
};

type OpeningHour = {
  days: string;
  hours: string;
};

type FormOption = {
  value: string;
  label: string;
};

type ContactContent = {
  detailsEyebrow: string;
  detailsTitle: string;
  detailsDescription: string;
  contactMethods: ContactMethod[];
  addressTitle: string;
  address: string;
  addressDescription: string;
  openingHoursTitle: string;
  openingHours: OpeningHour[];
  formEyebrow: string;
  formTitle: string;
  formDescription: string;
  formLabels: {
    name: string;
    email: string;
    service: string;
    message: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    demoNote: string;
  };
  serviceOptions: FormOption[];
  visitEyebrow: string;
  visitTitle: string;
  visitDescription: string;
  visitHighlights: string[];
};

export const contactContent: Record<Language, ContactContent> = {
  pl: {
    detailsEyebrow: "Kontakt",
    detailsTitle: "Masz pytanie albo chcesz umówić wizytę?",
    detailsDescription:
      "Ta podstrona zbiera wszystkie najważniejsze sposoby kontaktu. Później możemy podpiąć tutaj prawdziwy formularz, mapę Google, WhatsApp, Booksy albo inny system rezerwacji.",
    contactMethods: [
      {
        label: "Telefon",
        value: "+48 123 456 789",
        href: "tel:+48123456789",
        description: "Najlepszy wybór przy szybkich pytaniach i rezerwacji.",
      },
      {
        label: "E-mail",
        value: "hello@aurorabeauty.pl",
        href: "mailto:hello@aurorabeauty.pl",
        description: "Dobry kanał do dłuższych pytań i współpracy.",
      },
      {
        label: "Instagram",
        value: "@aurora.beauty",
        href: "https://instagram.com",
        description: "Miejsce na efekty pracy, relacje i aktualności salonu.",
      },
    ],
    addressTitle: "Adres salonu",
    address: "ul. Różana 12, 00-001 Warszawa",
    addressDescription:
      "To przykładowy adres. W kolejnym etapie możemy dodać prawdziwą lokalizację, mapę i wskazówki dojazdu.",
    openingHoursTitle: "Godziny otwarcia",
    openingHours: [
      { days: "Poniedziałek — Piątek", hours: "10:00 — 19:00" },
      { days: "Sobota", hours: "10:00 — 15:00" },
      { days: "Niedziela", hours: "Zamknięte" },
    ],
    formEyebrow: "Formularz",
    formTitle: "Napisz, czego potrzebujesz.",
    formDescription:
      "Formularz na tym etapie działa jako element frontendu. Po wysłaniu pokazuje komunikat, ale jeszcze nie wysyła wiadomości na e-mail.",
    formLabels: {
      name: "Imię",
      email: "Adres e-mail",
      service: "Interesująca usługa",
      message: "Wiadomość",
      submit: "Wyślij wiadomość",
      successTitle: "Wiadomość gotowa",
      successMessage:
        "To wersja demonstracyjna formularza. W kolejnym kroku możemy podłączyć prawdziwą wysyłkę.",
      demoNote:
        "Na razie formularz nie wysyła danych poza stronę. To bezpieczny frontendowy placeholder.",
    },
    serviceOptions: [
      { value: "facial-care", label: "Pielęgnacja twarzy" },
      { value: "brows-lashes", label: "Brwi i rzęsy" },
      { value: "makeup", label: "Makijaż" },
      { value: "consultation", label: "Konsultacja" },
      { value: "other", label: "Inne pytanie" },
    ],
    visitEyebrow: "Przed wizytą",
    visitTitle: "Kilka informacji, które mogą ułatwić pierwszy kontakt.",
    visitDescription:
      "Taka sekcja pomaga ograniczyć niepewność i skraca drogę od zainteresowania do rezerwacji.",
    visitHighlights: [
      "opisz krótko, jakiej usługi szukasz",
      "napisz preferowany dzień lub zakres godzin",
      "w przypadku pielęgnacji twarzy wspomnij o potrzebach skóry",
      "przy makijażu warto podać okazję i stylizację",
    ],
  },

  en: {
    detailsEyebrow: "Contact",
    detailsTitle: "Have a question or want to book a visit?",
    detailsDescription:
      "This page gathers the most important contact options. Later we can connect a real form, Google Map, WhatsApp, Booksy or another booking system.",
    contactMethods: [
      {
        label: "Phone",
        value: "+48 123 456 789",
        href: "tel:+48123456789",
        description: "Best for quick questions and booking requests.",
      },
      {
        label: "E-mail",
        value: "hello@aurorabeauty.pl",
        href: "mailto:hello@aurorabeauty.pl",
        description: "Good for longer questions and cooperation.",
      },
      {
        label: "Instagram",
        value: "@aurora.beauty",
        href: "https://instagram.com",
        description: "A place for results, stories and studio updates.",
      },
    ],
    addressTitle: "Studio address",
    address: "12 Różana Street, 00-001 Warsaw",
    addressDescription:
      "This is a sample address. In the next stage, we can add a real location, map and directions.",
    openingHoursTitle: "Opening hours",
    openingHours: [
      { days: "Monday — Friday", hours: "10:00 — 19:00" },
      { days: "Saturday", hours: "10:00 — 15:00" },
      { days: "Sunday", hours: "Closed" },
    ],
    formEyebrow: "Form",
    formTitle: "Tell us what you need.",
    formDescription:
      "At this stage, the form works as a frontend element. After submitting, it shows a message, but it does not send an e-mail yet.",
    formLabels: {
      name: "Name",
      email: "E-mail address",
      service: "Service of interest",
      message: "Message",
      submit: "Send message",
      successTitle: "Message ready",
      successMessage:
        "This is a demo version of the form. In the next step, we can connect real sending.",
      demoNote:
        "For now, the form does not send data outside the website. It is a safe frontend placeholder.",
    },
    serviceOptions: [
      { value: "facial-care", label: "Facial care" },
      { value: "brows-lashes", label: "Brows and lashes" },
      { value: "makeup", label: "Makeup" },
      { value: "consultation", label: "Consultation" },
      { value: "other", label: "Other question" },
    ],
    visitEyebrow: "Before your visit",
    visitTitle: "A few details that can make first contact easier.",
    visitDescription:
      "This section helps reduce uncertainty and shortens the path from interest to booking.",
    visitHighlights: [
      "briefly describe the service you are looking for",
      "mention your preferred day or time range",
      "for facial care, add a short note about your skin needs",
      "for makeup, it helps to mention the occasion and styling",
    ],
  },
};
