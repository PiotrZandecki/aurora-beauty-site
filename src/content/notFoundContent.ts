import type { Language } from "@/types/site";

type NotFoundContent = {
  eyebrow: string;
  title: string;
  description: string;
  homeButton: string;
  contactButton: string;
};

export const notFoundContent: Record<Language, NotFoundContent> = {
  pl: {
    eyebrow: "404",
    title: "Nie znaleziono strony.",
    description:
      "Wygląda na to, że ten adres nie istnieje albo został przeniesiony. Możesz wrócić na stronę główną albo przejść do kontaktu.",
    homeButton: "Wróć na stronę główną",
    contactButton: "Przejdź do kontaktu",
  },
  en: {
    eyebrow: "404",
    title: "Page not found.",
    description:
      "It looks like this address does not exist or has been moved. You can return to the homepage or go to contact.",
    homeButton: "Back to homepage",
    contactButton: "Go to contact",
  },
};
