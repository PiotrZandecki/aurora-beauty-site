import type { Language } from "@/types/site";

type AboutStat = {
  value: string;
  label: string;
};

type AboutValue = {
  title: string;
  description: string;
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
};

type AboutContent = {
  storyEyebrow: string;
  storyTitle: string;
  storyParagraphs: string[];
  stats: AboutStat[];
  valuesEyebrow: string;
  valuesTitle: string;
  valuesDescription: string;
  values: AboutValue[];
  teamEyebrow: string;
  teamTitle: string;
  teamDescription: string;
  team: TeamMember[];
  studioTitle: string;
  studioDescription: string;
  studioHighlights: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
};

export const aboutContent: Record<Language, AboutContent> = {
  pl: {
    storyEyebrow: "Nasza historia",
    storyTitle: "Beauty studio stworzone wokół spokoju, estetyki i uważności.",
    storyParagraphs: [
      "Aurora Beauty Studio to przykładowa marka salonu beauty, którą wykorzystujemy jako bazę do dalszego dopracowania projektu. Strona ma od początku komunikować elegancję, zaufanie i prostą ścieżkę do kontaktu.",
      "Ta podstrona może później opowiadać prawdziwą historię firmy: kiedy powstał salon, kto go tworzy, w czym się specjalizuje i dlaczego klientki wybierają właśnie to miejsce.",
      "Zależy nam na układzie, który nie jest przeładowany tekstem, ale daje wystarczająco dużo informacji, żeby użytkownik poczuł, że trafia do profesjonalnego, spokojnego i dopracowanego miejsca.",
    ],
    stats: [
      { value: "3", label: "główne obszary usług" },
      { value: "2", label: "wersje językowe strony" },
      { value: "100%", label: "responsywny layout" },
    ],
    valuesEyebrow: "Wartości",
    valuesTitle: "Podejście, które widać w każdym detalu.",
    valuesDescription:
      "Ta sekcja pomaga pokazać charakter salonu i odróżnić go od zwykłej listy usług.",
    values: [
      {
        title: "Komfort klienta",
        description:
          "Od pierwszego kontaktu po zakończenie wizyty najważniejsze jest spokojne doświadczenie, jasna komunikacja i brak presji.",
      },
      {
        title: "Naturalny efekt",
        description:
          "Usługi mają podkreślać urodę, a nie ją przytłaczać. Strona również idzie w stronę subtelnej, eleganckiej estetyki.",
      },
      {
        title: "Dbałość o szczegóły",
        description:
          "W branży beauty detale budują zaufanie. Dlatego layout, treści i podstrony tworzymy tak, żeby wyglądały spójnie.",
      },
    ],
    teamEyebrow: "Zespół",
    teamTitle: "Miejsce tworzone przez osoby, które lubią piękno i porządek.",
    teamDescription:
      "Na razie to przykładowa sekcja zespołu. Później możemy dodać prawdziwe zdjęcia, opisy specjalistek, certyfikaty i linki do social mediów.",
    team: [
      {
        name: "Anna",
        role: "Beauty specialist",
        description:
          "Specjalizuje się w pielęgnacji twarzy i spokojnej pracy z klientem. Dba o dobór zabiegów do potrzeb skóry.",
      },
      {
        name: "Maja",
        role: "Brows & lashes stylist",
        description:
          "Odpowiada za naturalną stylizację brwi i rzęs oraz dopracowany efekt bez przerysowania.",
      },
      {
        name: "Klara",
        role: "Makeup artist",
        description:
          "Tworzy makijaże dzienne, wieczorowe i okazjonalne, dopasowane do urody, światła i charakteru wydarzenia.",
      },
    ],
    studioTitle: "Klimat salonu ma znaczenie.",
    studioDescription:
      "Ta część może później opisywać wnętrze, lokalizację, atmosferę i standard obsługi. Dobrze sprawdzi się też jako miejsce na zdjęcie salonu.",
    studioHighlights: [
      "spokojna, elegancka przestrzeń",
      "jasna komunikacja przed wizytą",
      "usługi dopasowane do potrzeb",
      "możliwość rozbudowy o zdjęcia i certyfikaty",
    ],
    ctaTitle: "Chcesz poznać ofertę bliżej?",
    ctaDescription:
      "Po poznaniu historii i podejścia salonu użytkownik powinien mieć prostą drogę do usług albo kontaktu.",
    ctaButton: "Zobacz usługi",
  },

  en: {
    storyEyebrow: "Our story",
    storyTitle: "A beauty studio built around calm, aesthetics and attention.",
    storyParagraphs: [
      "Aurora Beauty Studio is a sample beauty brand used as a base for further project refinement. From the start, the website should communicate elegance, trust and a simple path to contact.",
      "Later, this page can tell the real story of the business: when the studio was created, who stands behind it, what it specializes in and why clients choose this place.",
      "The goal is a layout that is not overloaded with text, but gives enough information for visitors to feel that they are entering a professional, calm and carefully designed space.",
    ],
    stats: [
      { value: "3", label: "main service areas" },
      { value: "2", label: "website languages" },
      { value: "100%", label: "responsive layout" },
    ],
    valuesEyebrow: "Values",
    valuesTitle: "An approach visible in every detail.",
    valuesDescription:
      "This section helps show the studio character and makes it more than just a list of services.",
    values: [
      {
        title: "Client comfort",
        description:
          "From the first contact to the end of the visit, the focus is a calm experience, clear communication and no pressure.",
      },
      {
        title: "Natural results",
        description:
          "Services are meant to enhance beauty, not overwhelm it. The website follows the same subtle and elegant direction.",
      },
      {
        title: "Attention to detail",
        description:
          "In beauty, details build trust. That is why the layout, content and subpages are designed to feel consistent.",
      },
    ],
    teamEyebrow: "Team",
    teamTitle: "A place created by people who appreciate beauty and clarity.",
    teamDescription:
      "For now, this is a sample team section. Later we can add real photos, specialist descriptions, certificates and social media links.",
    team: [
      {
        name: "Anna",
        role: "Beauty specialist",
        description:
          "Specializes in facial care and calm client work. Focuses on choosing treatments according to skin needs.",
      },
      {
        name: "Maja",
        role: "Brows & lashes stylist",
        description:
          "Responsible for natural brow and lash styling with a polished effect that does not feel exaggerated.",
      },
      {
        name: "Klara",
        role: "Makeup artist",
        description:
          "Creates day, evening and occasional makeup adjusted to natural features, lighting and the event character.",
      },
    ],
    studioTitle: "The studio atmosphere matters.",
    studioDescription:
      "This section can later describe the interior, location, atmosphere and service standard. It is also a good place for a studio photo.",
    studioHighlights: [
      "calm and elegant space",
      "clear communication before the visit",
      "services adjusted to client needs",
      "ready to expand with photos and certificates",
    ],
    ctaTitle: "Want to explore the offer?",
    ctaDescription:
      "After learning about the studio story and approach, visitors should have a simple path to services or contact.",
    ctaButton: "View services",
  },
};
