import type { Language } from "@/types/site";

type ServiceItem = {
  title: string;
  description: string;
  duration: string;
  idealFor: string;
  result: string;
  tag: string;
};

type ServiceCategory = {
  title: string;
  description: string;
  accent: string;
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
  categoryLabel: string;
  durationLabel: string;
  idealForLabel: string;
  resultLabel: string;
  detailsButton: string;
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
    categoriesTitle:
      "Zabiegi beauty dopasowane do potrzeb skóry, okazji i stylu.",
    categoriesDescription:
      "Sekcja usług ma szybko pokazać, czym zajmuje się salon, jakie efekty można uzyskać i która usługa będzie najlepszym pierwszym wyborem.",
    categoryLabel: "Kategoria",
    durationLabel: "Czas",
    idealForLabel: "Dla kogo",
    resultLabel: "Efekt",
    detailsButton: "Zapytaj o usługę",
    categories: [
      {
        title: "Pielęgnacja twarzy",
        description:
          "Zabiegi skupione na odświeżeniu, oczyszczeniu i poprawie kondycji skóry.",
        accent: "Skin care",
        services: [
          {
            title: "Zabieg oczyszczający",
            description:
              "Delikatne oczyszczenie skóry połączone z pielęgnacją, która przywraca lekkość, świeżość i komfort.",
            duration: "60 min",
            idealFor: "skóra zmęczona, szara, zanieczyszczona",
            result: "uczucie świeżości i gładsza struktura skóry",
            tag: "Popularne",
          },
          {
            title: "Zabieg regenerujący",
            description:
              "Spokojna, odżywcza pielęgnacja dla skóry wymagającej ukojenia, nawilżenia i delikatnego wzmocnienia.",
            duration: "75 min",
            idealFor: "skóra sucha, wrażliwa lub przeciążona",
            result: "bardziej miękka, ukojona i promienna skóra",
            tag: "Regeneracja",
          },
          {
            title: "Konsultacja pielęgnacyjna",
            description:
              "Krótka rozmowa i analiza potrzeb skóry, aby dobrać odpowiedni zabieg oraz prostą pielęgnację domową.",
            duration: "30 min",
            idealFor: "pierwsza wizyta lub niepewność wyboru",
            result: "jasny plan dalszej pielęgnacji",
            tag: "Na start",
          },
        ],
      },
      {
        title: "Brwi i rzęsy",
        description:
          "Stylizacja oprawy oczu z naciskiem na naturalny, schludny i elegancki efekt.",
        accent: "Brows & lashes",
        services: [
          {
            title: "Laminacja brwi",
            description:
              "Ułożenie, optyczne zagęszczenie i ujarzmienie brwi, które nadaje twarzy bardziej dopracowany wygląd.",
            duration: "45 min",
            idealFor: "niesforne, opadające lub nierówne brwi",
            result: "uporządkowane i naturalnie podkreślone brwi",
            tag: "Natural look",
          },
          {
            title: "Koloryzacja brwi",
            description:
              "Subtelne podbicie koloru brwi z dopasowaniem do urody, włosów i oczekiwanego poziomu intensywności.",
            duration: "30 min",
            idealFor: "jasne lub mało widoczne brwi",
            result: "wyraźniejsza oprawa oczu bez ciężkiego efektu",
            tag: "Szybki efekt",
          },
          {
            title: "Stylizacja rzęs",
            description:
              "Podkreślenie spojrzenia w estetyczny sposób, tak aby efekt pasował zarówno na co dzień, jak i na specjalne okazje.",
            duration: "60 min",
            idealFor: "osoby chcące delikatnie otworzyć spojrzenie",
            result: "bardziej świeży i wypoczęty wygląd oczu",
            tag: "Soft glam",
          },
        ],
      },
      {
        title: "Makijaż",
        description:
          "Makijaże dopasowane do okazji, urody, stylizacji i oczekiwanego poziomu intensywności.",
        accent: "Makeup",
        services: [
          {
            title: "Makijaż dzienny",
            description:
              "Lekki, świeży makijaż podkreślający urodę bez efektu przeciążenia. Dobry na spotkania, pracę i sesje lifestyle.",
            duration: "45 min",
            idealFor: "codzienne okazje, spotkania, zdjęcia biznesowe",
            result: "świeży, czysty i naturalny wygląd",
            tag: "Fresh look",
          },
          {
            title: "Makijaż wieczorowy",
            description:
              "Bardziej wyrazisty makijaż z dopracowanym okiem, cerą i detalami, który dobrze prezentuje się na żywo i na zdjęciach.",
            duration: "75 min",
            idealFor: "uroczystości, imprezy, kolacje, sesje",
            result: "elegancki efekt z większą intensywnością",
            tag: "Evening",
          },
          {
            title: "Makijaż ślubny próbny",
            description:
              "Próba makijażu przed ważnym dniem, z czasem na omówienie preferencji, trwałości i dopracowanie szczegółów.",
            duration: "90 min",
            idealFor: "przygotowania do ślubu lub dużej uroczystości",
            result: "spokojna decyzja i przetestowany efekt",
            tag: "Bridal",
          },
        ],
      },
    ],
    processEyebrow: "Jak wygląda wizyta",
    processTitle: "Prosty proces, który buduje komfort przed pierwszą wizytą.",
    processDescription:
      "Dzięki tej sekcji klient wie, czego może się spodziewać — od wyboru usługi aż po zalecenia po zabiegu.",
    processSteps: [
      {
        title: "Wybór usługi",
        description:
          "Klient wybiera kategorię albo kontaktuje się z salonem, jeśli nie wie, która opcja będzie najlepsza.",
      },
      {
        title: "Krótka konsultacja",
        description:
          "Przed zabiegiem omawiane są oczekiwania, potrzeby skóry i ewentualne przeciwwskazania.",
      },
      {
        title: "Wykonanie usługi",
        description:
          "Zabieg odbywa się w spokojnej atmosferze, z naciskiem na komfort, higienę i estetyczny efekt.",
      },
      {
        title: "Zalecenia po wizycie",
        description:
          "Po usłudze klient otrzymuje wskazówki dotyczące pielęgnacji i utrzymania efektu.",
      },
    ],
    ctaTitle: "Nie wiesz, którą usługę wybrać?",
    ctaDescription:
      "Opisz, czego potrzebujesz, a salon pomoże dobrać odpowiednią usługę. Później możemy podpiąć tutaj formularz, WhatsApp, Booksy albo inny system rezerwacji.",
    ctaButton: "Przejdź do kontaktu",
  },

  en: {
    categoriesEyebrow: "Services",
    categoriesTitle:
      "Beauty treatments tailored to skin needs, occasions and personal style.",
    categoriesDescription:
      "The services section should quickly show what the studio offers, what results clients can expect and which treatment is the best first choice.",
    categoryLabel: "Category",
    durationLabel: "Duration",
    idealForLabel: "Best for",
    resultLabel: "Result",
    detailsButton: "Ask about service",
    categories: [
      {
        title: "Facial care",
        description:
          "Treatments focused on refreshing, cleansing and improving the condition of the skin.",
        accent: "Skin care",
        services: [
          {
            title: "Cleansing treatment",
            description:
              "Gentle skin cleansing combined with care that restores freshness, lightness and comfort.",
            duration: "60 min",
            idealFor: "tired, dull or congested skin",
            result: "a fresher feel and smoother skin texture",
            tag: "Popular",
          },
          {
            title: "Regenerating treatment",
            description:
              "A calm, nourishing treatment for skin that needs soothing, hydration and gentle support.",
            duration: "75 min",
            idealFor: "dry, sensitive or stressed skin",
            result: "softer, calmer and more radiant skin",
            tag: "Recovery",
          },
          {
            title: "Skincare consultation",
            description:
              "A short discussion and skin-needs review to choose the right treatment and simple home care plan.",
            duration: "30 min",
            idealFor: "first visit or uncertainty about choosing",
            result: "a clear next-step care plan",
            tag: "Start here",
          },
        ],
      },
      {
        title: "Brows and lashes",
        description:
          "Eye-area styling focused on a natural, polished and elegant final effect.",
        accent: "Brows & lashes",
        services: [
          {
            title: "Brow lamination",
            description:
              "Shaping and taming the brows to give the face a cleaner and more polished appearance.",
            duration: "45 min",
            idealFor: "unruly, uneven or downward-growing brows",
            result: "neatly shaped and naturally enhanced brows",
            tag: "Natural look",
          },
          {
            title: "Brow tinting",
            description:
              "Subtle color enhancement adjusted to natural features, hair color and desired intensity.",
            duration: "30 min",
            idealFor: "light or barely visible brows",
            result: "more defined brows without a heavy look",
            tag: "Quick effect",
          },
          {
            title: "Lash styling",
            description:
              "Aesthetic eye enhancement designed to work for everyday wear as well as special occasions.",
            duration: "60 min",
            idealFor: "clients who want a softer open-eye effect",
            result: "a fresher and more rested eye appearance",
            tag: "Soft glam",
          },
        ],
      },
      {
        title: "Makeup",
        description:
          "Makeup tailored to the occasion, natural features, outfit and desired intensity.",
        accent: "Makeup",
        services: [
          {
            title: "Day makeup",
            description:
              "A light, fresh makeup look that enhances beauty without feeling heavy. Great for meetings, work and lifestyle shoots.",
            duration: "45 min",
            idealFor: "everyday occasions, meetings and business photos",
            result: "a clean, fresh and natural look",
            tag: "Fresh look",
          },
          {
            title: "Evening makeup",
            description:
              "A more expressive makeup look with polished eyes, skin and details that photograph well.",
            duration: "75 min",
            idealFor: "events, dinners, parties and photoshoots",
            result: "an elegant look with more intensity",
            tag: "Evening",
          },
          {
            title: "Trial bridal makeup",
            description:
              "A makeup trial before the big day, with time to discuss preferences, durability and final details.",
            duration: "90 min",
            idealFor: "wedding or major event preparation",
            result: "a tested look and a calmer final decision",
            tag: "Bridal",
          },
        ],
      },
    ],
    processEyebrow: "Visit process",
    processTitle:
      "A simple process that builds comfort before the first visit.",
    processDescription:
      "This section helps visitors understand what to expect — from choosing a service to aftercare tips.",
    processSteps: [
      {
        title: "Choose a service",
        description:
          "The client chooses a category or contacts the studio if they are unsure which option is best.",
      },
      {
        title: "Short consultation",
        description:
          "Before the treatment, expectations, skin needs and possible contraindications are discussed.",
      },
      {
        title: "Service delivery",
        description:
          "The treatment takes place in a calm atmosphere focused on comfort, hygiene and aesthetics.",
      },
      {
        title: "Aftercare tips",
        description:
          "After the service, the client receives guidance on care and maintaining the final effect.",
      },
    ],
    ctaTitle: "Not sure which service to choose?",
    ctaDescription:
      "Describe what you need and the studio will help choose the right service. Later we can connect this with a form, WhatsApp, Booksy or another booking system.",
    ctaButton: "Go to contact",
  },
};
