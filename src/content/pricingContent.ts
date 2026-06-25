import type { Language } from "@/types/site";

type PricingItem = {
  name: string;
  description: string;
  duration: string;
  price: string;
  highlighted?: boolean;
};

type PricingCategory = {
  title: string;
  description: string;
  items: PricingItem[];
};

type PackageItem = {
  title: string;
  description: string;
  price: string;
  badge: string;
};

type PricingContent = {
  introEyebrow: string;
  introTitle: string;
  introDescription: string;
  durationLabel: string;
  priceNote: string;
  categories: PricingCategory[];
  packagesEyebrow: string;
  packagesTitle: string;
  packagesDescription: string;
  packages: PackageItem[];
  noteTitle: string;
  noteDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
};

export const pricingContent: Record<Language, PricingContent> = {
  pl: {
    introEyebrow: "Cennik",
    introTitle: "Przejrzyste ceny dla najważniejszych usług beauty.",
    introDescription:
      "To przykładowy cennik startowy. Później możemy podmienić ceny, dodać warianty usług, promocje, pakiety albo integrację z systemem rezerwacji.",
    durationLabel: "Czas",
    priceNote: "Cena od",
    categories: [
      {
        title: "Pielęgnacja twarzy",
        description:
          "Zabiegi oczyszczające, regenerujące i konsultacje pielęgnacyjne.",
        items: [
          {
            name: "Zabieg oczyszczający",
            description:
              "Odświeżenie skóry, delikatne oczyszczenie i podstawowa pielęgnacja.",
            duration: "60 min",
            price: "180 zł",
            highlighted: true,
          },
          {
            name: "Zabieg regenerujący",
            description:
              "Odżywcza pielęgnacja dla skóry wymagającej ukojenia i nawilżenia.",
            duration: "75 min",
            price: "240 zł",
          },
          {
            name: "Konsultacja pielęgnacyjna",
            description:
              "Omówienie potrzeb skóry i dobranie odpowiedniego planu pielęgnacji.",
            duration: "30 min",
            price: "90 zł",
          },
        ],
      },
      {
        title: "Brwi i rzęsy",
        description:
          "Stylizacja oprawy oczu z naciskiem na naturalny, estetyczny efekt.",
        items: [
          {
            name: "Laminacja brwi",
            description:
              "Ułożenie i podkreślenie brwi dla bardziej dopracowanego wyglądu.",
            duration: "45 min",
            price: "140 zł",
            highlighted: true,
          },
          {
            name: "Koloryzacja brwi",
            description:
              "Subtelne podbicie koloru i kształtu dopasowane do urody.",
            duration: "30 min",
            price: "80 zł",
          },
          {
            name: "Stylizacja rzęs",
            description:
              "Delikatne podkreślenie spojrzenia i naturalnej oprawy oczu.",
            duration: "60 min",
            price: "170 zł",
          },
        ],
      },
      {
        title: "Makijaż",
        description:
          "Makijaże dopasowane do okazji, stylu i oczekiwanego efektu.",
        items: [
          {
            name: "Makijaż dzienny",
            description:
              "Lekki, świeży makijaż na spotkania, pracę albo sesję zdjęciową.",
            duration: "45 min",
            price: "160 zł",
          },
          {
            name: "Makijaż wieczorowy",
            description:
              "Bardziej wyrazisty efekt na wydarzenia, kolacje i uroczystości.",
            duration: "75 min",
            price: "240 zł",
            highlighted: true,
          },
          {
            name: "Makijaż ślubny próbny",
            description:
              "Próba makijażu z omówieniem preferencji i dopracowaniem detali.",
            duration: "90 min",
            price: "300 zł",
          },
        ],
      },
    ],
    packagesEyebrow: "Pakiety",
    packagesTitle: "Pakiety dla osób, które chcą połączyć kilka usług.",
    packagesDescription:
      "Pakiety pomagają uporządkować ofertę i zachęcają klientki do wyboru pełniejszej wizyty zamiast pojedynczej usługi.",
    packages: [
      {
        title: "Fresh Start",
        description:
          "Konsultacja pielęgnacyjna + zabieg oczyszczający dla pierwszej wizyty.",
        price: "240 zł",
        badge: "Na start",
      },
      {
        title: "Soft Glow",
        description:
          "Zabieg regenerujący + delikatna stylizacja brwi dla świeżego efektu.",
        price: "340 zł",
        badge: "Popularne",
      },
      {
        title: "Event Ready",
        description:
          "Makijaż wieczorowy + stylizacja rzęs przed ważnym wydarzeniem.",
        price: "380 zł",
        badge: "Okazja",
      },
    ],
    noteTitle: "Ważna informacja",
    noteDescription:
      "Ceny są przykładowe i mogą zależeć od zakresu usługi, kondycji skóry, użytych produktów oraz indywidualnych potrzeb klientki lub klienta.",
    ctaTitle: "Chcesz dobrać usługę do swoich potrzeb?",
    ctaDescription:
      "Przejdź do kontaktu i opisz, czego szukasz. W kolejnym etapie możemy dodać formularz, wybór usługi albo link do rezerwacji.",
    ctaButton: "Skontaktuj się",
  },

  en: {
    introEyebrow: "Pricing",
    introTitle: "Clear prices for the most important beauty services.",
    introDescription:
      "This is a sample starter price list. Later we can replace prices, add service variants, promotions, packages or booking system integration.",
    durationLabel: "Duration",
    priceNote: "From",
    categories: [
      {
        title: "Facial care",
        description:
          "Cleansing, regenerating treatments and skincare consultations.",
        items: [
          {
            name: "Cleansing treatment",
            description: "Skin refreshment, gentle cleansing and basic care.",
            duration: "60 min",
            price: "180 PLN",
            highlighted: true,
          },
          {
            name: "Regenerating treatment",
            description:
              "Nourishing care for skin that needs soothing and hydration.",
            duration: "75 min",
            price: "240 PLN",
          },
          {
            name: "Skincare consultation",
            description:
              "A short discussion of skin needs and a simple care plan.",
            duration: "30 min",
            price: "90 PLN",
          },
        ],
      },
      {
        title: "Brows and lashes",
        description:
          "Eye-area styling focused on a natural and polished effect.",
        items: [
          {
            name: "Brow lamination",
            description:
              "Shaping and enhancing brows for a cleaner appearance.",
            duration: "45 min",
            price: "140 PLN",
            highlighted: true,
          },
          {
            name: "Brow tinting",
            description:
              "Subtle color and shape enhancement adjusted to natural features.",
            duration: "30 min",
            price: "80 PLN",
          },
          {
            name: "Lash styling",
            description:
              "Gentle enhancement of the eyes and natural lash area.",
            duration: "60 min",
            price: "170 PLN",
          },
        ],
      },
      {
        title: "Makeup",
        description:
          "Makeup tailored to the occasion, style and expected result.",
        items: [
          {
            name: "Day makeup",
            description:
              "A light, fresh look for meetings, work or photo sessions.",
            duration: "45 min",
            price: "160 PLN",
          },
          {
            name: "Evening makeup",
            description:
              "A more expressive effect for events, dinners and celebrations.",
            duration: "75 min",
            price: "240 PLN",
            highlighted: true,
          },
          {
            name: "Trial bridal makeup",
            description:
              "A makeup trial with time to discuss preferences and details.",
            duration: "90 min",
            price: "300 PLN",
          },
        ],
      },
    ],
    packagesEyebrow: "Packages",
    packagesTitle: "Packages for clients who want to combine services.",
    packagesDescription:
      "Packages help organize the offer and encourage visitors to choose a fuller visit instead of a single service.",
    packages: [
      {
        title: "Fresh Start",
        description:
          "Skincare consultation + cleansing treatment for the first visit.",
        price: "240 PLN",
        badge: "Start here",
      },
      {
        title: "Soft Glow",
        description:
          "Regenerating treatment + gentle brow styling for a fresh effect.",
        price: "340 PLN",
        badge: "Popular",
      },
      {
        title: "Event Ready",
        description: "Evening makeup + lash styling before an important event.",
        price: "380 PLN",
        badge: "Occasion",
      },
    ],
    noteTitle: "Important note",
    noteDescription:
      "Prices are examples and may depend on the service scope, skin condition, products used and individual client needs.",
    ctaTitle: "Want to choose the right service for your needs?",
    ctaDescription:
      "Go to contact and describe what you are looking for. In the next step, we can add a form, service selection or booking link.",
    ctaButton: "Contact us",
  },
};
