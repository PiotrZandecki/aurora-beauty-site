import type { Language } from "@/types/site";

type ServiceItem = {
  title: string;
  description: string;
  duration: string;
};

type ServiceCategory = {
  title: string;
  description: string;
  services: ServiceItem[];
};

type ProcessStep = {
  title: string;
  description: string;
};

type ServicesContent = {
  categoriesEyebrow: string;
  categoriesTitle: string;
  categoriesDescription: string;
  categories: ServiceCategory[];
  processEyebrow: string;
  processTitle: string;
  processDescription: string;
  processSteps: ProcessStep[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
};

export const servicesContent: Record<Language, ServicesContent> = {
  pl: {
    categoriesEyebrow: "Oferta",
    categoriesTitle: "Usługi beauty dopasowane do Twoich potrzeb.",
    categoriesDescription:
      "Poniżej znajduje się przykładowa struktura oferty. Później możemy podmienić nazwy, ceny, czasy trwania i opisy na prawdziwe dane salonu.",
    categories: [
      {
        title: "Pielęgnacja twarzy",
        description:
          "Zabiegi skupione na oczyszczeniu, regeneracji i poprawie kondycji skóry.",
        services: [
          {
            title: "Zabieg oczyszczający",
            description:
              "Delikatne oczyszczenie skóry, odświeżenie i przygotowanie do dalszej pielęgnacji.",
            duration: "60 min",
          },
          {
            title: "Zabieg regenerujący",
            description:
              "Pielęgnacja nastawiona na komfort, ukojenie i poprawę wyglądu skóry.",
            duration: "75 min",
          },
          {
            title: "Konsultacja pielęgnacyjna",
            description:
              "Omówienie potrzeb skóry i dobranie odpowiedniej ścieżki pielęgnacji.",
            duration: "30 min",
          },
        ],
      },
      {
        title: "Brwi i rzęsy",
        description:
          "Stylizacja oprawy oczu z naciskiem na naturalny, elegancki efekt.",
        services: [
          {
            title: "Laminacja brwi",
            description:
              "Ułożenie i podkreślenie brwi dla bardziej uporządkowanego wyglądu.",
            duration: "45 min",
          },
          {
            title: "Koloryzacja brwi",
            description:
              "Subtelne podbicie koloru dopasowane do urody i oczekiwanego efektu.",
            duration: "30 min",
          },
          {
            title: "Stylizacja rzęs",
            description:
              "Podkreślenie spojrzenia w sposób lekki, estetyczny i codzienny.",
            duration: "60 min",
          },
        ],
      },
      {
        title: "Makijaż",
        description:
          "Makijaże na ważne okazje, sesje zdjęciowe i wyjątkowe wydarzenia.",
        services: [
          {
            title: "Makijaż dzienny",
            description:
              "Świeży, lekki efekt odpowiedni do pracy, spotkań i codziennych okazji.",
            duration: "45 min",
          },
          {
            title: "Makijaż wieczorowy",
            description:
              "Bardziej wyrazisty efekt z zachowaniem elegancji i dopasowania do urody.",
            duration: "75 min",
          },
          {
            title: "Makijaż ślubny próbny",
            description:
              "Próba makijażu przed ważnym dniem, z możliwością dopracowania detali.",
            duration: "90 min",
          },
        ],
      },
    ],
    processEyebrow: "Jak wygląda wizyta",
    processTitle: "Prosta ścieżka od wyboru usługi do efektu końcowego.",
    processDescription:
      "Ta sekcja pomaga klientce lub klientowi zrozumieć, czego może się spodziewać przed wizytą.",
    processSteps: [
      {
        title: "Wybór usługi",
        description:
          "Klient wybiera kategorię zabiegu albo kontaktuje się z salonem w celu konsultacji.",
      },
      {
        title: "Krótka konsultacja",
        description:
          "Przed usługą ustalane są oczekiwania, potrzeby skóry i ewentualne przeciwwskazania.",
      },
      {
        title: "Wykonanie usługi",
        description:
          "Zabieg odbywa się w spokojnej atmosferze, z naciskiem na komfort i estetykę.",
      },
      {
        title: "Zalecenia po wizycie",
        description:
          "Klient otrzymuje krótkie wskazówki dotyczące pielęgnacji i utrzymania efektu.",
      },
    ],
    ctaTitle: "Nie wiesz, którą usługę wybrać?",
    ctaDescription:
      "Przejdź do kontaktu i opisz, czego potrzebujesz. Później możemy tutaj dodać formularz wyboru usługi albo link do systemu rezerwacji.",
    ctaButton: "Skontaktuj się",
  },

  en: {
    categoriesEyebrow: "Services",
    categoriesTitle: "Beauty services tailored to your needs.",
    categoriesDescription:
      "Below is a sample offer structure. Later we can replace names, prices, durations and descriptions with real studio data.",
    categories: [
      {
        title: "Facial care",
        description:
          "Treatments focused on cleansing, regeneration and improving skin condition.",
        services: [
          {
            title: "Cleansing treatment",
            description:
              "Gentle skin cleansing, refreshment and preparation for further care.",
            duration: "60 min",
          },
          {
            title: "Regenerating treatment",
            description:
              "Care focused on comfort, soothing and improving the appearance of the skin.",
            duration: "75 min",
          },
          {
            title: "Skincare consultation",
            description:
              "A short discussion of skin needs and the right care path.",
            duration: "30 min",
          },
        ],
      },
      {
        title: "Brows and lashes",
        description:
          "Eye-area styling focused on a natural, elegant final effect.",
        services: [
          {
            title: "Brow lamination",
            description:
              "Shaping and enhancing brows for a more polished appearance.",
            duration: "45 min",
          },
          {
            title: "Brow tinting",
            description:
              "Subtle color enhancement adjusted to natural features and desired results.",
            duration: "30 min",
          },
          {
            title: "Lash styling",
            description:
              "A light and aesthetic way to enhance the look of the eyes.",
            duration: "60 min",
          },
        ],
      },
      {
        title: "Makeup",
        description:
          "Makeup for special occasions, photoshoots and important events.",
        services: [
          {
            title: "Day makeup",
            description:
              "A fresh, light effect suitable for work, meetings and everyday occasions.",
            duration: "45 min",
          },
          {
            title: "Evening makeup",
            description:
              "A more expressive result while keeping elegance and balance.",
            duration: "75 min",
          },
          {
            title: "Trial bridal makeup",
            description:
              "A makeup trial before the big day, with time to refine details.",
            duration: "90 min",
          },
        ],
      },
    ],
    processEyebrow: "Visit process",
    processTitle: "A simple path from choosing a service to the final result.",
    processDescription:
      "This section helps visitors understand what they can expect before booking a visit.",
    processSteps: [
      {
        title: "Choose a service",
        description:
          "The client chooses a treatment category or contacts the studio for consultation.",
      },
      {
        title: "Short consultation",
        description:
          "Before the service, expectations, skin needs and possible contraindications are discussed.",
      },
      {
        title: "Service delivery",
        description:
          "The treatment takes place in a calm atmosphere focused on comfort and aesthetics.",
      },
      {
        title: "Aftercare tips",
        description:
          "The client receives short guidance on care and maintaining the final effect.",
      },
    ],
    ctaTitle: "Not sure which service to choose?",
    ctaDescription:
      "Go to contact and describe what you need. Later we can add a service selection form or a booking system link here.",
    ctaButton: "Contact us",
  },
};
