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
  imageSrc: string;
  imageAlt: string;
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
      "Usługi beauty dopasowane do skóry, okazji i oczekiwanego efektu.",
    categoriesDescription:
      "Oferta Aurora Beauty Studio skupia się na trzech obszarach, które budują świeży, dopracowany wygląd: pielęgnacji twarzy, stylizacji brwi i rzęs oraz makijażu okazjonalnym.",
    categoryLabel: "Kategoria",
    durationLabel: "Czas",
    idealForLabel: "Dla kogo",
    resultLabel: "Efekt",
    detailsButton: "Zapytaj o usługę",
    categories: [
      {
        title: "Pielęgnacja twarzy",
        description:
          "Zabiegi dla skóry, która potrzebuje oczyszczenia, ukojenia, regeneracji albo przywrócenia naturalnego blasku.",
        accent: "Skin care",
        imageSrc: "/images/facial-care.png",
        imageAlt: "Profesjonalny zabieg pielęgnacji twarzy w beauty studio",
        services: [
          {
            title: "Zabieg oczyszczający",
            description:
              "Delikatne oczyszczenie skóry połączone z pielęgnacją, która odświeża cerę i przygotowuje ją do dalszej regeneracji.",
            duration: "60 min",
            idealFor: "skóra zmęczona, szara, zanieczyszczona",
            result: "świeższa, gładsza i bardziej komfortowa skóra",
            tag: "Popularne",
          },
          {
            title: "Zabieg regenerujący",
            description:
              "Odżywcza pielęgnacja dla skóry wymagającej ukojenia, nawilżenia i delikatnego wzmocnienia bariery ochronnej.",
            duration: "75 min",
            idealFor: "skóra sucha, wrażliwa lub przeciążona",
            result: "bardziej miękka, ukojona i promienna cera",
            tag: "Regeneracja",
          },
          {
            title: "Konsultacja pielęgnacyjna",
            description:
              "Krótka analiza potrzeb skóry i rozmowa o codziennej pielęgnacji, zabiegach oraz najlepszym kierunku dalszej pracy.",
            duration: "30 min",
            idealFor: "pierwsza wizyta lub trudność z wyborem zabiegu",
            result: "jasny plan pielęgnacji i rekomendacja usługi",
            tag: "Na start",
          },
        ],
      },
      {
        title: "Brwi i rzęsy",
        description:
          "Stylizacja oprawy oczu nastawiona na naturalny, schludny i elegancki efekt bez przerysowania.",
        accent: "Brows & lashes",
        imageSrc: "/images/brows-lashes.png",
        imageAlt: "Stylizacja brwi i rzęs w premium beauty studio",
        services: [
          {
            title: "Laminacja brwi",
            description:
              "Ułożenie, optyczne zagęszczenie i uporządkowanie brwi, które nadaje twarzy bardziej dopracowany wygląd.",
            duration: "45 min",
            idealFor: "niesforne, nierówne lub opadające brwi",
            result: "uporządkowane i naturalnie podkreślone brwi",
            tag: "Natural look",
          },
          {
            title: "Koloryzacja brwi",
            description:
              "Subtelne podbicie koloru brwi z dopasowaniem do urody, koloru włosów i oczekiwanego poziomu intensywności.",
            duration: "30 min",
            idealFor: "jasne, mało widoczne lub nierówne brwi",
            result: "wyraźniejsza oprawa oczu bez ciężkiego efektu",
            tag: "Szybki efekt",
          },
          {
            title: "Stylizacja rzęs",
            description:
              "Delikatne podkreślenie spojrzenia dobrane do naturalnej oprawy oczu i oczekiwanego efektu.",
            duration: "60 min",
            idealFor: "osoby chcące lekko otworzyć spojrzenie",
            result: "świeższy, bardziej wypoczęty wygląd oczu",
            tag: "Soft glam",
          },
        ],
      },
      {
        title: "Makijaż okazjonalny",
        description:
          "Makijaż dopasowany do urody, stylizacji, światła i charakteru wydarzenia — tak, aby dobrze wyglądał na żywo i na zdjęciach.",
        accent: "Makeup",
        imageSrc: "/images/occasion-makeup.png",
        imageAlt: "Elegancki makijaż okazjonalny w beauty studio",
        services: [
          {
            title: "Makijaż dzienny",
            description:
              "Lekki, świeży makijaż, który podkreśla urodę bez efektu przeciążenia. Dobry na spotkania, zdjęcia biznesowe i ważne dni.",
            duration: "45 min",
            idealFor: "spotkania, sesje lifestyle, wydarzenia dzienne",
            result: "czysty, świeży i naturalnie dopracowany wygląd",
            tag: "Fresh look",
          },
          {
            title: "Makijaż wieczorowy",
            description:
              "Bardziej wyrazisty makijaż z dopracowaną cerą, okiem i detalami, zachowujący elegancję oraz proporcje.",
            duration: "75 min",
            idealFor: "uroczystości, kolacje, imprezy, sesje zdjęciowe",
            result: "elegancki efekt z większą intensywnością",
            tag: "Evening",
          },
          {
            title: "Makijaż ślubny próbny",
            description:
              "Próba makijażu przed ważnym dniem, z omówieniem preferencji, trwałości, stylizacji i detali końcowego efektu.",
            duration: "90 min",
            idealFor: "przygotowania do ślubu lub dużej uroczystości",
            result: "spokojna decyzja i przetestowany kierunek makijażu",
            tag: "Bridal",
          },
        ],
      },
    ],
    processEyebrow: "Jak wygląda wizyta",
    processTitle:
      "Przejrzysty proces, który pomaga spokojnie przejść od wyboru usługi do efektu końcowego.",
    processDescription:
      "Każda wizyta ma jasny przebieg: najpierw rozpoznanie potrzeb, potem dobór usługi, wykonanie i krótkie zalecenia po zakończeniu.",
    processSteps: [
      {
        title: "Wybór kierunku",
        description:
          "Możesz wybrać konkretną usługę albo opisać oczekiwany efekt. Na tej podstawie łatwiej dobrać najlepszą opcję.",
      },
      {
        title: "Krótka konsultacja",
        description:
          "Przed usługą omawiane są potrzeby, oczekiwania, okazja oraz ewentualne przeciwwskazania.",
      },
      {
        title: "Wykonanie usługi",
        description:
          "Usługa przebiega spokojnie i precyzyjnie, z naciskiem na komfort, higienę i naturalny efekt.",
      },
      {
        title: "Zalecenia po wizycie",
        description:
          "Po zakończeniu otrzymujesz praktyczne wskazówki, które pomagają utrzymać efekt i zaplanować kolejne kroki.",
      },
    ],
    ctaTitle: "Nie masz pewności, którą usługę wybrać?",
    ctaDescription:
      "Opisz, czego potrzebujesz albo jaki efekt chcesz uzyskać. Pomożemy dobrać usługę, zakres pracy i najlepszy termin wizyty.",
    ctaButton: "Skontaktuj się",
  },

  en: {
    categoriesEyebrow: "Services",
    categoriesTitle:
      "Beauty services tailored to skin needs, occasion and desired result.",
    categoriesDescription:
      "Aurora Beauty Studio focuses on three areas that create a fresh, polished look: facial care, brow and lash styling, and occasion makeup.",
    categoryLabel: "Category",
    durationLabel: "Duration",
    idealForLabel: "Best for",
    resultLabel: "Result",
    detailsButton: "Ask about service",
    categories: [
      {
        title: "Facial care",
        description:
          "Treatments for skin that needs cleansing, comfort, regeneration or a natural glow boost.",
        accent: "Skin care",
        imageSrc: "/images/facial-care.png",
        imageAlt: "Professional facial-care treatment in a beauty studio",
        services: [
          {
            title: "Cleansing treatment",
            description:
              "Gentle skin cleansing combined with care that refreshes the complexion and prepares it for further regeneration.",
            duration: "60 min",
            idealFor: "tired, dull or congested skin",
            result: "fresher, smoother and more comfortable skin",
            tag: "Popular",
          },
          {
            title: "Regenerating treatment",
            description:
              "Nourishing care for skin that needs soothing, hydration and gentle support of the protective barrier.",
            duration: "75 min",
            idealFor: "dry, sensitive or stressed skin",
            result: "softer, calmer and more radiant complexion",
            tag: "Recovery",
          },
          {
            title: "Skincare consultation",
            description:
              "A short review of skin needs and daily care, with a recommendation for the best treatment direction.",
            duration: "30 min",
            idealFor: "first visit or uncertainty about choosing",
            result: "a clear care plan and service recommendation",
            tag: "Start here",
          },
        ],
      },
      {
        title: "Brows and lashes",
        description:
          "Eye-area styling focused on a natural, clean and elegant effect without overdoing the result.",
        accent: "Brows & lashes",
        imageSrc: "/images/brows-lashes.png",
        imageAlt: "Brows and lashes styling in a premium beauty studio",
        services: [
          {
            title: "Brow lamination",
            description:
              "Shaping, visually thickening and taming brows to give the face a cleaner, more polished appearance.",
            duration: "45 min",
            idealFor: "unruly, uneven or downward-growing brows",
            result: "neatly shaped and naturally enhanced brows",
            tag: "Natural look",
          },
          {
            title: "Brow tinting",
            description:
              "Subtle color enhancement adjusted to natural features, hair color and the desired intensity.",
            duration: "30 min",
            idealFor: "light, barely visible or uneven brows",
            result: "more defined brows without a heavy look",
            tag: "Quick effect",
          },
          {
            title: "Lash styling",
            description:
              "A gentle enhancement of the eyes selected according to natural features and the desired final effect.",
            duration: "60 min",
            idealFor: "clients who want a soft open-eye effect",
            result: "a fresher and more rested eye appearance",
            tag: "Soft glam",
          },
        ],
      },
      {
        title: "Occasion makeup",
        description:
          "Makeup tailored to natural features, outfit, lighting and the character of the event — designed to look good in person and in photos.",
        accent: "Makeup",
        imageSrc: "/images/occasion-makeup.png",
        imageAlt: "Elegant occasion makeup in a beauty studio",
        services: [
          {
            title: "Day makeup",
            description:
              "A light, fresh makeup look that enhances beauty without feeling heavy. Good for meetings, business photos and important days.",
            duration: "45 min",
            idealFor: "meetings, lifestyle shoots and daytime events",
            result: "a clean, fresh and naturally polished look",
            tag: "Fresh look",
          },
          {
            title: "Evening makeup",
            description:
              "A more expressive makeup look with polished skin, eyes and details while keeping elegance and balance.",
            duration: "75 min",
            idealFor: "celebrations, dinners, parties and photoshoots",
            result: "an elegant result with more intensity",
            tag: "Evening",
          },
          {
            title: "Trial bridal makeup",
            description:
              "A makeup trial before the big day, with time to discuss preferences, durability, outfit and final details.",
            duration: "90 min",
            idealFor: "wedding or major event preparation",
            result: "a tested makeup direction and a calmer decision",
            tag: "Bridal",
          },
        ],
      },
    ],
    processEyebrow: "Visit process",
    processTitle:
      "A clear process that helps move calmly from choosing a service to the final result.",
    processDescription:
      "Every visit has a simple flow: understanding needs, selecting the service, performing it and sharing short aftercare guidance.",
    processSteps: [
      {
        title: "Choose direction",
        description:
          "You can choose a specific service or describe the result you want. This makes it easier to select the best option.",
      },
      {
        title: "Short consultation",
        description:
          "Before the service, needs, expectations, occasion and possible contraindications are discussed.",
      },
      {
        title: "Service delivery",
        description:
          "The service is performed calmly and precisely, with focus on comfort, hygiene and natural results.",
      },
      {
        title: "Aftercare guidance",
        description:
          "After the visit, you receive practical tips to help maintain the result and plan the next steps.",
      },
    ],
    ctaTitle: "Not sure which service to choose?",
    ctaDescription:
      "Describe what you need or what result you want. We will help choose the right service, scope and appointment direction.",
    ctaButton: "Contact us",
  },
};
