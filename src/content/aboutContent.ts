import type { Language } from "@/types/site";

type AboutStat = {
  value: string;
  label: string;
};

type AboutStandard = {
  title: string;
  description: string;
};

type AboutSpecialization = {
  title: string;
  description: string;
};

type AboutProcessStep = {
  title: string;
  description: string;
};

type AboutContent = {
  approachEyebrow: string;
  approachTitle: string;
  approachParagraphs: string[];
  stats: AboutStat[];

  standardsEyebrow: string;
  standardsTitle: string;
  standardsDescription: string;
  standards: AboutStandard[];

  specializationEyebrow: string;
  specializationTitle: string;
  specializationDescription: string;
  specializations: AboutSpecialization[];

  processEyebrow: string;
  processTitle: string;
  processDescription: string;
  processSteps: AboutProcessStep[];

  studioTitle: string;
  studioDescription: string;
  studioHighlights: string[];

  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
};

export const aboutContent: Record<Language, AboutContent> = {
  pl: {
    approachEyebrow: "Filozofia salonu",
    approachTitle:
      "Aurora Beauty Studio powstało z myślą o naturalnym efekcie, spokojnej atmosferze i świadomej pielęgnacji.",
    approachParagraphs: [
      "Wizyta w salonie beauty powinna być czymś więcej niż tylko wykonaniem usługi. To moment, w którym klientka może poczuć się zaopiekowana, wysłuchana i pewna, że wybrany efekt naprawdę do niej pasuje.",
      "Dlatego w Aurora Beauty Studio stawiamy na subtelne rezultaty, jasną komunikację i dopasowanie usługi do indywidualnych potrzeb. Nie chodzi o przerysowanie urody, ale o jej uporządkowanie, odświeżenie i podkreślenie.",
      "Nasze podejście łączy estetykę premium z praktycznym komfortem: spokojnym przebiegiem wizyty, zrozumiałym opisem usługi i wskazówkami, które pomagają utrzymać efekt po wyjściu z salonu.",
    ],
    stats: [
      { value: "3", label: "obszary specjalizacji" },
      { value: "1:1", label: "indywidualna konsultacja" },
      { value: "Soft", label: "naturalny kierunek efektu" },
    ],

    standardsEyebrow: "Standard pracy",
    standardsTitle:
      "Detale, które budują zaufanie przed, w trakcie i po wizycie.",
    standardsDescription:
      "Profesjonalne doświadczenie zaczyna się już przed pierwszym kontaktem. Strona, komunikacja i usługa powinny prowadzić klientkę bez chaosu i niepewności.",
    standards: [
      {
        title: "Jasna komunikacja",
        description:
          "Przed wizytą łatwo sprawdzić zakres usług, orientacyjny czas trwania i sposób kontaktu. Dzięki temu decyzja o rezerwacji jest prostsza.",
      },
      {
        title: "Dobór do potrzeb",
        description:
          "Usługa jest dobierana do skóry, urody, okazji i oczekiwanego efektu — bez schematycznego podejścia do każdej osoby.",
      },
      {
        title: "Spokojna atmosfera",
        description:
          "Wizyta ma być komfortowa, uporządkowana i przewidywalna. Klientka wie, co się dzieje i dlaczego dana metoda została wybrana.",
      },
    ],

    specializationEyebrow: "Specjalizacja",
    specializationTitle:
      "Skupiamy się na usługach, które dają świeży, elegancki efekt.",
    specializationDescription:
      "Oferta została zaprojektowana wokół trzech obszarów, które najczęściej budują kompletny, dopracowany wygląd: skóra, oprawa oczu i makijaż.",
    specializations: [
      {
        title: "Pielęgnacja twarzy",
        description:
          "Zabiegi oczyszczające, regenerujące i odżywcze dla skóry, która potrzebuje odświeżenia, ukojenia lub poprawy kondycji.",
      },
      {
        title: "Brwi i rzęsy",
        description:
          "Stylizacja oprawy oczu, która nadaje twarzy wyrazistości, ale pozostaje lekka, naturalna i dopasowana do rysów.",
      },
      {
        title: "Makijaż okazjonalny",
        description:
          "Makijaż tworzony z myślą o wydarzeniu, świetle, stylizacji i trwałości — tak, aby dobrze wyglądał na żywo i na zdjęciach.",
      },
    ],

    processEyebrow: "Jak pracujemy",
    processTitle:
      "Prosty proces, który daje klientce poczucie kontroli i spokoju.",
    processDescription:
      "Każda usługa powinna mieć jasny przebieg — od pierwszego pytania, przez dobór metody, aż po zalecenia po wizycie.",
    processSteps: [
      {
        title: "Rozpoznanie potrzeb",
        description:
          "Zaczynamy od krótkiej rozmowy: czego potrzebujesz, jaki efekt lubisz i czy są kwestie, które trzeba uwzględnić.",
      },
      {
        title: "Dobór usługi",
        description:
          "Na podstawie oczekiwań i aktualnych potrzeb dobieramy usługę, zakres pracy oraz odpowiedni kierunek estetyczny.",
      },
      {
        title: "Spokojna realizacja",
        description:
          "Usługa przebiega w uporządkowany sposób, z naciskiem na komfort, higienę, precyzję i naturalny efekt.",
      },
      {
        title: "Zalecenia po wizycie",
        description:
          "Po zakończeniu otrzymujesz jasne wskazówki, które pomagają utrzymać efekt i świadomie planować kolejne wizyty.",
      },
    ],

    studioTitle: "Miejsce, które ma wspierać decyzję, a nie ją przyspieszać.",
    studioDescription:
      "Aurora Beauty Studio to przestrzeń dla osób, które szukają estetyki premium bez presji i przesady. Strona, oferta i komunikacja mają pomóc spokojnie wybrać usługę, zrozumieć jej efekt i skontaktować się wtedy, gdy decyzja jest gotowa.",
    studioHighlights: [
      "subtelna estetyka i naturalny kierunek pracy",
      "jasne opisy usług i orientacyjny zakres cen",
      "komunikacja nastawiona na komfort klientki",
      "możliwość dobrania usługi przed wizytą",
    ],

    ctaTitle:
      "Chcesz zobaczyć, która usługa najlepiej pasuje do Twoich potrzeb?",
    ctaDescription:
      "Przejdź do oferty i sprawdź główne obszary pracy salonu. Jeśli nie masz pewności, możesz od razu skontaktować się i opisać oczekiwany efekt.",
    ctaButton: "Zobacz usługi",
  },

  en: {
    approachEyebrow: "Studio philosophy",
    approachTitle:
      "Aurora Beauty Studio was created around natural results, a calm atmosphere and thoughtful beauty care.",
    approachParagraphs: [
      "A beauty visit should be more than just completing a service. It should be a moment when the client feels taken care of, listened to and confident that the chosen result truly suits them.",
      "That is why Aurora Beauty Studio focuses on subtle results, clear communication and services tailored to individual needs. The goal is not to overpower natural beauty, but to refine, refresh and enhance it.",
      "Our approach combines premium aesthetics with practical comfort: a calm visit, a clear explanation of the service and aftercare guidance that helps maintain the result beyond the studio.",
    ],
    stats: [
      { value: "3", label: "specialized service areas" },
      { value: "1:1", label: "individual consultation" },
      { value: "Soft", label: "natural result direction" },
    ],

    standardsEyebrow: "Work standard",
    standardsTitle:
      "Details that build trust before, during and after the visit.",
    standardsDescription:
      "A professional experience begins before the first contact. The website, communication and service should guide the client without confusion or uncertainty.",
    standards: [
      {
        title: "Clear communication",
        description:
          "Before the visit, it is easy to check the service scope, approximate duration and contact options. This makes the booking decision simpler.",
      },
      {
        title: "Needs-based selection",
        description:
          "The service is selected according to skin, natural features, occasion and expected result — without a one-size-fits-all approach.",
      },
      {
        title: "Calm atmosphere",
        description:
          "The visit should feel comfortable, structured and predictable. The client knows what is happening and why a given method was chosen.",
      },
    ],

    specializationEyebrow: "Specialization",
    specializationTitle:
      "We focus on services that create a fresh, elegant result.",
    specializationDescription:
      "The offer is built around three areas that most often create a complete, polished appearance: skin, eye-area styling and makeup.",
    specializations: [
      {
        title: "Facial care",
        description:
          "Cleansing, regenerating and nourishing treatments for skin that needs refreshment, comfort or improved condition.",
      },
      {
        title: "Brows and lashes",
        description:
          "Eye-area styling that adds definition to the face while staying light, natural and adjusted to individual features.",
      },
      {
        title: "Occasion makeup",
        description:
          "Makeup created with the event, lighting, outfit and durability in mind — designed to look good in person and in photos.",
      },
    ],

    processEyebrow: "How we work",
    processTitle: "A simple process that gives the client clarity and calm.",
    processDescription:
      "Every service should have a clear flow — from the first question, through method selection, to aftercare guidance.",
    processSteps: [
      {
        title: "Understanding needs",
        description:
          "We start with a short conversation: what you need, what result you like and whether there are any details to consider.",
      },
      {
        title: "Choosing the service",
        description:
          "Based on expectations and current needs, the service, work scope and aesthetic direction are selected.",
      },
      {
        title: "Calm delivery",
        description:
          "The service is performed in a structured way, with focus on comfort, hygiene, precision and natural results.",
      },
      {
        title: "Aftercare guidance",
        description:
          "After the visit, you receive clear guidance to help maintain the result and plan future visits consciously.",
      },
    ],

    studioTitle: "A place designed to support the decision, not rush it.",
    studioDescription:
      "Aurora Beauty Studio is a space for people looking for premium aesthetics without pressure or exaggeration. The website, offer and communication are designed to help clients calmly choose a service, understand the result and get in touch when they are ready.",
    studioHighlights: [
      "subtle aesthetics and natural result direction",
      "clear service descriptions and approximate pricing",
      "communication focused on client comfort",
      "support in choosing the right service before the visit",
    ],

    ctaTitle: "Want to see which service best matches your needs?",
    ctaDescription:
      "Explore the offer and check the studio’s main service areas. If you are not sure, you can get in touch and describe the result you want.",
    ctaButton: "View services",
  },
};
