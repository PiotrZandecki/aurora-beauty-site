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

type Location = {
  name: string;
  eyebrow: string;
  address: string;
  city: string;
  description: string;
  mapQuery: string;
  specialties: string[];
  isMain?: boolean;
};

type ContactContent = {
  detailsEyebrow: string;
  detailsTitle: string;
  detailsDescription: string;
  contactMethods: ContactMethod[];

  mainSalonEyebrow: string;
  mainSalonTitle: string;
  mainSalonDescription: string;
  mainSalonMapTitle: string;
  mainSalonGoogleMapsLabel: string;
  allLocationsButton: string;

  openingHoursTitle: string;
  openingHours: OpeningHour[];

  locationsEyebrow: string;
  locationsTitle: string;
  locationsDescription: string;
  locationsGoogleMapsLabel: string;
  locations: Location[];

  formEyebrow: string;
  formTitle: string;
  formDescription: string;
  formLabels: {
    name: string;
    email: string;
    phone: string;
    service: string;
    preferredDate: string;
    message: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    noteTitle: string;
    noteDescription: string;
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
    detailsTitle: "Umów wizytę albo zapytaj, która usługa będzie najlepsza.",
    detailsDescription:
      "Skontaktuj się w najwygodniejszy dla siebie sposób. W wiadomości warto opisać, jakiej usługi szukasz, jaki efekt chcesz uzyskać i jaki termin byłby dla Ciebie najlepszy.",
    contactMethods: [
      {
        label: "Telefon",
        value: "+48 123 456 789",
        href: "tel:+48123456789",
        description:
          "Najlepszy wybór przy szybkich pytaniach, zmianie terminu albo pilnej rezerwacji.",
      },
      {
        label: "E-mail",
        value: "hello@aurorabeauty.pl",
        href: "mailto:hello@aurorabeauty.pl",
        description:
          "Dobry kanał do opisania oczekiwań, zapytania o usługę lub ustalenia szczegółów przed wizytą.",
      },
      {
        label: "Instagram",
        value: "@aurora.beauty",
        href: "https://instagram.com",
        description:
          "Miejsce na aktualności, inspiracje, efekty pracy i szybki kontakt przez wiadomość prywatną.",
      },
    ],

    mainSalonEyebrow: "Główny salon",
    mainSalonTitle: "Aurora Warsaw Flagship",
    mainSalonDescription:
      "Główna lokalizacja Aurora Beauty Studio to spokojna, elegancka przestrzeń w Warszawie, zaprojektowana z myślą o naturalnych efektach, komforcie klientki i dopracowanym doświadczeniu wizyty.",
    mainSalonMapTitle: "Mapa głównego salonu",
    mainSalonGoogleMapsLabel: "Otwórz w Google Maps",
    allLocationsButton: "Zobacz wszystkie lokacje",

    openingHoursTitle: "Godziny otwarcia",
    openingHours: [
      { days: "Poniedziałek — Piątek", hours: "10:00 — 19:00" },
      { days: "Sobota", hours: "10:00 — 15:00" },
      { days: "Niedziela", hours: "Zamknięte" },
    ],

    locationsEyebrow: "Wszystkie lokacje",
    locationsTitle:
      "Aurora Beauty Studio w najbardziej inspirujących miastach.",
    locationsDescription:
      "Przykładowa sieć lokalizacji pokazuje, jak marka może skalować swoją obecność: od głównego salonu w Warszawie po globalne punkty premium w dużych miastach.",
    locationsGoogleMapsLabel: "Zobacz na mapie",
    locations: [
      {
        name: "Aurora Warsaw Flagship",
        eyebrow: "Główny salon",
        address: "ul. Różana 12, 00-001 Warszawa",
        city: "Warszawa, Polska",
        description:
          "Główna lokalizacja marki: konsultacje, pielęgnacja twarzy, brwi i rzęsy oraz makijaż okazjonalny.",
        mapQuery: "ul. Różana 12, 00-001 Warszawa, Polska",
        specialties: ["Facial care", "Brows & lashes", "Occasion makeup"],
        isMain: true,
      },
      {
        name: "Aurora Paris Studio",
        eyebrow: "European concept",
        address: "14 Rue Saint-Honoré, 75001 Paris",
        city: "Paryż, Francja",
        description:
          "Elegancka lokalizacja inspirowana francuskim minimalizmem i naturalnym beauty lookiem.",
        mapQuery: "14 Rue Saint-Honoré, 75001 Paris, France",
        specialties: ["Skin rituals", "Soft glam", "Consultations"],
      },
      {
        name: "Aurora London Atelier",
        eyebrow: "Editorial beauty",
        address: "22 Mayfair Place, London W1J",
        city: "Londyn, Wielka Brytania",
        description:
          "Atelier nastawione na makijaż okazjonalny, sesje zdjęciowe i dopracowane stylizacje eventowe.",
        mapQuery: "22 Mayfair Place, London W1J, United Kingdom",
        specialties: ["Event makeup", "Photo-ready skin", "Brow styling"],
      },
      {
        name: "Aurora Dubai Lounge",
        eyebrow: "Luxury lounge",
        address: "Downtown Dubai, Sheikh Mohammed bin Rashid Blvd",
        city: "Dubaj, ZEA",
        description:
          "Lokalizacja premium z naciskiem na luksusowe rytuały, komfort i intensywną regenerację skóry.",
        mapQuery:
          "Downtown Dubai, Sheikh Mohammed bin Rashid Boulevard, Dubai, United Arab Emirates",
        specialties: ["Glow rituals", "Luxury care", "Premium packages"],
      },
      {
        name: "Aurora Singapore Room",
        eyebrow: "Urban calm",
        address: "2 Orchard Turn, Singapore 238801",
        city: "Singapur",
        description:
          "Nowoczesna lokalizacja w miejskim stylu, łącząca szybkie usługi beauty z atmosferą spokoju.",
        mapQuery: "2 Orchard Turn, Singapore 238801",
        specialties: ["Express care", "Natural glow", "Lash styling"],
      },
    ],

    formEyebrow: "Zapytanie",
    formTitle: "Napisz, czego potrzebujesz.",
    formDescription:
      "Wypełnij krótki formularz, a strona przygotuje gotową wiadomość e-mail z Twoim zapytaniem. Dzięki temu łatwiej będzie dobrać usługę, zakres pracy i możliwy termin.",
    formLabels: {
      name: "Imię",
      email: "Adres e-mail",
      phone: "Telefon",
      service: "Interesująca usługa",
      preferredDate: "Preferowany termin",
      message: "Wiadomość",
      submit: "Przygotuj wiadomość e-mail",
      successTitle: "Wiadomość została przygotowana",
      successMessage:
        "Jeśli aplikacja pocztowa nie otworzyła się automatycznie, możesz skopiować treść zapytania i wysłać ją bezpośrednio na adres hello@aurorabeauty.pl.",
      noteTitle: "Co warto napisać?",
      noteDescription:
        "Najlepiej podać interesującą usługę, preferowany termin, oczekiwany efekt oraz informację, czy jest to pierwsza wizyta.",
    },
    serviceOptions: [
      { value: "facial-care", label: "Pielęgnacja twarzy" },
      { value: "brows-lashes", label: "Brwi i rzęsy" },
      { value: "makeup", label: "Makijaż okazjonalny" },
      { value: "signature-glow", label: "Signature Glow Treatment" },
      { value: "consultation", label: "Konsultacja" },
      { value: "other", label: "Nie wiem / potrzebuję pomocy w wyborze" },
    ],

    visitEyebrow: "Przed wizytą",
    visitTitle: "Kilka informacji, które ułatwią dobór usługi.",
    visitDescription:
      "Im dokładniej opiszesz potrzeby, tym łatwiej będzie zaproponować usługę, czas trwania i najlepszy sposób przygotowania do wizyty.",
    visitHighlights: [
      "opisz, jaki efekt chcesz uzyskać",
      "podaj preferowany dzień lub zakres godzin",
      "przy pielęgnacji twarzy wspomnij o aktualnych potrzebach skóry",
      "przy makijażu napisz, na jaką okazję jest przygotowywany",
    ],
  },

  en: {
    detailsEyebrow: "Contact",
    detailsTitle: "Book a visit or ask which service will suit you best.",
    detailsDescription:
      "Choose the contact method that feels most convenient. In your message, describe the service you are looking for, the result you want and your preferred appointment time.",
    contactMethods: [
      {
        label: "Phone",
        value: "+48 123 456 789",
        href: "tel:+48123456789",
        description:
          "Best for quick questions, appointment changes or urgent booking requests.",
      },
      {
        label: "E-mail",
        value: "hello@aurorabeauty.pl",
        href: "mailto:hello@aurorabeauty.pl",
        description:
          "A good option for describing expectations, asking about a service or arranging details before the visit.",
      },
      {
        label: "Instagram",
        value: "@aurora.beauty",
        href: "https://instagram.com",
        description:
          "A place for updates, inspiration, work results and quick contact through direct message.",
      },
    ],

    mainSalonEyebrow: "Main studio",
    mainSalonTitle: "Aurora Warsaw Flagship",
    mainSalonDescription:
      "The main Aurora Beauty Studio location is a calm, elegant space in Warsaw, designed around natural results, client comfort and a refined visit experience.",
    mainSalonMapTitle: "Main studio map",
    mainSalonGoogleMapsLabel: "Open in Google Maps",
    allLocationsButton: "See all locations",

    openingHoursTitle: "Opening hours",
    openingHours: [
      { days: "Monday — Friday", hours: "10:00 — 19:00" },
      { days: "Saturday", hours: "10:00 — 15:00" },
      { days: "Sunday", hours: "Closed" },
    ],

    locationsEyebrow: "All locations",
    locationsTitle:
      "Aurora Beauty Studio in the world’s most inspiring cities.",
    locationsDescription:
      "This sample location network shows how the brand can scale its presence: from the Warsaw flagship to premium global beauty spaces.",
    locationsGoogleMapsLabel: "View on map",
    locations: [
      {
        name: "Aurora Warsaw Flagship",
        eyebrow: "Main studio",
        address: "12 Różana Street, 00-001 Warsaw",
        city: "Warsaw, Poland",
        description:
          "The main brand location: consultations, facial care, brows and lashes, and occasion makeup.",
        mapQuery: "ul. Różana 12, 00-001 Warsaw, Poland",
        specialties: ["Facial care", "Brows & lashes", "Occasion makeup"],
        isMain: true,
      },
      {
        name: "Aurora Paris Studio",
        eyebrow: "European concept",
        address: "14 Rue Saint-Honoré, 75001 Paris",
        city: "Paris, France",
        description:
          "An elegant location inspired by French minimalism and natural beauty direction.",
        mapQuery: "14 Rue Saint-Honoré, 75001 Paris, France",
        specialties: ["Skin rituals", "Soft glam", "Consultations"],
      },
      {
        name: "Aurora London Atelier",
        eyebrow: "Editorial beauty",
        address: "22 Mayfair Place, London W1J",
        city: "London, United Kingdom",
        description:
          "An atelier focused on occasion makeup, photoshoots and polished event styling.",
        mapQuery: "22 Mayfair Place, London W1J, United Kingdom",
        specialties: ["Event makeup", "Photo-ready skin", "Brow styling"],
      },
      {
        name: "Aurora Dubai Lounge",
        eyebrow: "Luxury lounge",
        address: "Downtown Dubai, Sheikh Mohammed bin Rashid Blvd",
        city: "Dubai, UAE",
        description:
          "A premium location focused on luxury rituals, comfort and intensive skin recovery.",
        mapQuery:
          "Downtown Dubai, Sheikh Mohammed bin Rashid Boulevard, Dubai, United Arab Emirates",
        specialties: ["Glow rituals", "Luxury care", "Premium packages"],
      },
      {
        name: "Aurora Singapore Room",
        eyebrow: "Urban calm",
        address: "2 Orchard Turn, Singapore 238801",
        city: "Singapore",
        description:
          "A modern city location combining efficient beauty services with a calm atmosphere.",
        mapQuery: "2 Orchard Turn, Singapore 238801",
        specialties: ["Express care", "Natural glow", "Lash styling"],
      },
    ],

    formEyebrow: "Inquiry",
    formTitle: "Tell us what you need.",
    formDescription:
      "Fill in a short form and the website will prepare an e-mail message with your inquiry. This makes it easier to choose the right service, scope and possible appointment time.",
    formLabels: {
      name: "Name",
      email: "E-mail address",
      phone: "Phone",
      service: "Service of interest",
      preferredDate: "Preferred date",
      message: "Message",
      submit: "Prepare e-mail message",
      successTitle: "Message has been prepared",
      successMessage:
        "If your e-mail app did not open automatically, you can copy the inquiry and send it directly to hello@aurorabeauty.pl.",
      noteTitle: "What should you include?",
      noteDescription:
        "It is best to include the service, preferred date, desired result and whether this is your first visit.",
    },
    serviceOptions: [
      { value: "facial-care", label: "Facial care" },
      { value: "brows-lashes", label: "Brows and lashes" },
      { value: "makeup", label: "Occasion makeup" },
      { value: "signature-glow", label: "Signature Glow Treatment" },
      { value: "consultation", label: "Consultation" },
      { value: "other", label: "Not sure / need help choosing" },
    ],

    visitEyebrow: "Before your visit",
    visitTitle: "A few details that help select the right service.",
    visitDescription:
      "The more clearly you describe your needs, the easier it is to suggest a service, duration and the best way to prepare for your visit.",
    visitHighlights: [
      "describe the result you want to achieve",
      "include your preferred day or time range",
      "for facial care, mention your current skin needs",
      "for makeup, write what occasion it is for",
    ],
  },
};
