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
    introTitle: "Przejrzyste ceny dla usług beauty w naturalnym stylu premium.",
    introDescription:
      "Cennik pokazuje podstawowy zakres usług, orientacyjny czas trwania oraz ceny od. Finalny dobór usługi może zostać doprecyzowany po krótkiej konsultacji, szczególnie przy pielęgnacji twarzy i makijażu okazjonalnym.",
    durationLabel: "Czas",
    priceNote: "Cena od",
    categories: [
      {
        title: "Pielęgnacja twarzy",
        description:
          "Zabiegi dobierane do aktualnych potrzeb skóry: oczyszczenie, regeneracja, ukojenie i przywrócenie naturalnego blasku.",
        items: [
          {
            name: "Konsultacja pielęgnacyjna",
            description:
              "Krótka analiza potrzeb skóry, rozmowa o codziennej pielęgnacji i rekomendacja najlepszego kierunku zabiegowego.",
            duration: "30 min",
            price: "90 zł",
          },
          {
            name: "Zabieg oczyszczający",
            description:
              "Odświeżenie skóry, delikatne oczyszczenie i pielęgnacja dobrana do kondycji cery.",
            duration: "60 min",
            price: "180 zł",
            highlighted: true,
          },
          {
            name: "Zabieg regenerujący",
            description:
              "Odżywcza pielęgnacja dla skóry suchej, zmęczonej, wrażliwej lub wymagającej ukojenia.",
            duration: "75 min",
            price: "240 zł",
          },
          {
            name: "Signature Glow Treatment",
            description:
              "Wyróżniona usługa łącząca konsultację, delikatne oczyszczenie i regenerującą pielęgnację dla świeższego efektu.",
            duration: "75 min",
            price: "280 zł",
            highlighted: true,
          },
        ],
      },
      {
        title: "Brwi i rzęsy",
        description:
          "Stylizacja oprawy oczu nastawiona na naturalny, schludny i elegancki efekt bez przerysowania.",
        items: [
          {
            name: "Koloryzacja brwi",
            description:
              "Subtelne podkreślenie koloru i kształtu brwi z dopasowaniem do urody.",
            duration: "30 min",
            price: "80 zł",
          },
          {
            name: "Laminacja brwi",
            description:
              "Ułożenie i uporządkowanie brwi dla bardziej dopracowanego, naturalnego efektu.",
            duration: "45 min",
            price: "140 zł",
            highlighted: true,
          },
          {
            name: "Stylizacja rzęs",
            description:
              "Delikatne podkreślenie spojrzenia dopasowane do naturalnej oprawy oczu.",
            duration: "60 min",
            price: "170 zł",
          },
        ],
      },
      {
        title: "Makijaż okazjonalny",
        description:
          "Makijaż dopasowany do urody, stylizacji, światła i charakteru wydarzenia.",
        items: [
          {
            name: "Makijaż dzienny",
            description:
              "Lekki, świeży makijaż na spotkania, sesje zdjęciowe, ważne dni i wydarzenia dzienne.",
            duration: "45 min",
            price: "160 zł",
          },
          {
            name: "Makijaż wieczorowy",
            description:
              "Bardziej wyrazisty, elegancki makijaż na uroczystości, kolacje, imprezy i sesje.",
            duration: "75 min",
            price: "240 zł",
            highlighted: true,
          },
          {
            name: "Makijaż ślubny próbny",
            description:
              "Próba makijażu przed ważnym dniem z omówieniem preferencji, trwałości i finalnego efektu.",
            duration: "90 min",
            price: "300 zł",
          },
          {
            name: "Makijaż ślubny",
            description:
              "Makijaż dopasowany do urody, stylizacji, światła, zdjęć oraz charakteru ceremonii.",
            duration: "90 min",
            price: "350 zł",
            highlighted: true,
          },
        ],
      },
    ],
    packagesEyebrow: "Pakiety",
    packagesTitle: "Pakiety dla pełniejszego efektu i spokojniejszej wizyty.",
    packagesDescription:
      "Pakiety pomagają połączyć kilka usług w jedną wizytę. To dobre rozwiązanie przed ważnym wydarzeniem, sesją zdjęciową albo wtedy, gdy chcesz zadbać o kilka elementów naraz.",
    packages: [
      {
        title: "Fresh Start",
        description:
          "Konsultacja pielęgnacyjna oraz zabieg oczyszczający dla osób, które chcą rozpocząć świadomą pielęgnację skóry.",
        price: "240 zł",
        badge: "Na start",
      },
      {
        title: "Soft Glow",
        description:
          "Zabieg regenerujący oraz delikatna stylizacja brwi dla świeżego, naturalnie dopracowanego efektu.",
        price: "340 zł",
        badge: "Popularne",
      },
      {
        title: "Event Ready",
        description:
          "Makijaż wieczorowy oraz stylizacja rzęs przed ważnym wydarzeniem, kolacją, sesją albo uroczystością.",
        price: "380 zł",
        badge: "Okazja",
      },
    ],
    noteTitle: "Ważna informacja",
    noteDescription:
      "Podane ceny są cenami bazowymi. Finalny koszt może zależeć od zakresu pracy, wybranego wariantu usługi, kondycji skóry, oczekiwanego efektu oraz dodatkowych elementów ustalonych przed wizytą.",
    ctaTitle: "Nie wiesz, która usługa albo pakiet będzie najlepszy?",
    ctaDescription:
      "Napisz, czego potrzebujesz, jaki efekt chcesz uzyskać i kiedy planujesz wizytę. Pomożemy dobrać odpowiedni zakres usługi.",
    ctaButton: "Zapytaj o termin",
  },

  en: {
    introEyebrow: "Pricing",
    introTitle: "Clear pricing for natural premium beauty services.",
    introDescription:
      "The price list shows the basic service scope, approximate duration and starting prices. The final service selection can be adjusted after a short consultation, especially for facial care and occasion makeup.",
    durationLabel: "Duration",
    priceNote: "From",
    categories: [
      {
        title: "Facial care",
        description:
          "Treatments selected according to current skin needs: cleansing, regeneration, comfort and natural glow.",
        items: [
          {
            name: "Skincare consultation",
            description:
              "A short review of skin needs, daily care and recommendation for the best treatment direction.",
            duration: "30 min",
            price: "90 PLN",
          },
          {
            name: "Cleansing treatment",
            description:
              "Skin refreshment, gentle cleansing and care selected according to the current condition of the skin.",
            duration: "60 min",
            price: "180 PLN",
            highlighted: true,
          },
          {
            name: "Regenerating treatment",
            description:
              "Nourishing care for dry, tired, sensitive skin or skin that needs soothing.",
            duration: "75 min",
            price: "240 PLN",
          },
          {
            name: "Signature Glow Treatment",
            description:
              "A featured service combining consultation, gentle cleansing and regenerating care for a fresher result.",
            duration: "75 min",
            price: "280 PLN",
            highlighted: true,
          },
        ],
      },
      {
        title: "Brows and lashes",
        description:
          "Eye-area styling focused on a natural, clean and elegant result without overdoing the effect.",
        items: [
          {
            name: "Brow tinting",
            description:
              "Subtle color and shape enhancement adjusted to natural features.",
            duration: "30 min",
            price: "80 PLN",
          },
          {
            name: "Brow lamination",
            description:
              "Shaping and organizing brows for a more polished, natural effect.",
            duration: "45 min",
            price: "140 PLN",
            highlighted: true,
          },
          {
            name: "Lash styling",
            description:
              "Gentle eye enhancement adjusted to the natural lash and eye area.",
            duration: "60 min",
            price: "170 PLN",
          },
        ],
      },
      {
        title: "Occasion makeup",
        description:
          "Makeup tailored to natural features, outfit, lighting and the character of the event.",
        items: [
          {
            name: "Day makeup",
            description:
              "A light, fresh makeup look for meetings, photoshoots, important days and daytime events.",
            duration: "45 min",
            price: "160 PLN",
          },
          {
            name: "Evening makeup",
            description:
              "A more expressive, elegant makeup look for events, dinners, parties and photo sessions.",
            duration: "75 min",
            price: "240 PLN",
            highlighted: true,
          },
          {
            name: "Trial bridal makeup",
            description:
              "A makeup trial before the big day, with time to discuss preferences, durability and final effect.",
            duration: "90 min",
            price: "300 PLN",
          },
          {
            name: "Bridal makeup",
            description:
              "Makeup adjusted to natural features, outfit, lighting, photos and the ceremony character.",
            duration: "90 min",
            price: "350 PLN",
            highlighted: true,
          },
        ],
      },
    ],
    packagesEyebrow: "Packages",
    packagesTitle: "Packages for a fuller result and calmer visit.",
    packagesDescription:
      "Packages help combine several services into one visit. They work well before an important event, photoshoot or when you want to take care of several elements at once.",
    packages: [
      {
        title: "Fresh Start",
        description:
          "Skincare consultation and cleansing treatment for clients who want to start more conscious skin care.",
        price: "240 PLN",
        badge: "Start here",
      },
      {
        title: "Soft Glow",
        description:
          "Regenerating treatment and gentle brow styling for a fresh, naturally polished result.",
        price: "340 PLN",
        badge: "Popular",
      },
      {
        title: "Event Ready",
        description:
          "Evening makeup and lash styling before an important event, dinner, photoshoot or celebration.",
        price: "380 PLN",
        badge: "Occasion",
      },
    ],
    noteTitle: "Important note",
    noteDescription:
      "The listed prices are base prices. The final cost may depend on the work scope, selected service variant, skin condition, desired result and additional elements agreed before the visit.",
    ctaTitle: "Not sure which service or package is best?",
    ctaDescription:
      "Describe what you need, what result you want and when you plan to visit. We will help choose the right service scope.",
    ctaButton: "Ask about availability",
  },
};
