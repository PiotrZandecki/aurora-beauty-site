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

  nearestSalonEyebrow: string;
  nearestSalonTitle: string;
  nearestSalonDescription: string;
  fallbackSalonTitle: string;
  fallbackSalonDescription: string;
  locationLoading: string;
  locationGranted: string;
  locationDenied: string;
  locationUnavailable: string;
  useLocationButton: string;
  selectedSalonMapTitle: string;
  googleMapsLabel: string;
  distanceLabel: string;
  allLocationsButton: string;

  nearbyEyebrow: string;
  nearbyTitle: string;
  nearbyDescription: string;
  nearbyFallbackDescription: string;
  nearbyGoogleMapsLabel: string;

  openingHoursTitle: string;
  openingHours: OpeningHour[];

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

    nearestSalonEyebrow: "Najbliższy salon",
    nearestSalonTitle: "Salon Aurora najbliżej Ciebie",
    nearestSalonDescription:
      "Po zgodzie na użycie lokalizacji urządzenia pokażemy salon znajdujący się najbliżej Ciebie. Jeśli lokalizacja nie będzie dostępna, pokażemy główną siedzibę marki.",
    fallbackSalonTitle: "Główny salon Aurora",
    fallbackSalonDescription:
      "Nie mamy dostępu do lokalizacji urządzenia, więc jako punkt domyślny pokazujemy główną siedzibę Aurora Beauty Studio.",
    locationLoading: "Sprawdzamy lokalizację urządzenia...",
    locationGranted: "Lokalizacja urządzenia została uwzględniona.",
    locationDenied:
      "Nie uzyskaliśmy dostępu do lokalizacji. Pokazujemy główną siedzibę.",
    locationUnavailable:
      "Geolokalizacja nie jest dostępna w tej przeglądarce. Pokazujemy główną siedzibę.",
    useLocationButton: "Użyj mojej lokalizacji",
    selectedSalonMapTitle: "Mapa wybranego salonu",
    googleMapsLabel: "Otwórz w Google Maps",
    distanceLabel: "Szacowana odległość",
    allLocationsButton: "Zobacz wszystkie lokalizacje",

    nearbyEyebrow: "W pobliżu",
    nearbyTitle: "Dwa kolejne salony najbliżej Ciebie.",
    nearbyDescription:
      "Poniżej pokazujemy dwie kolejne lokalizacje, które są najbliżej Twojej pozycji — z pominięciem salonu wyświetlonego wyżej.",
    nearbyFallbackDescription:
      "Ponieważ nie mamy dostępu do Twojej lokalizacji, pokazujemy dwie lokalizacje najbliższe głównej siedzibie.",
    nearbyGoogleMapsLabel: "Zobacz na mapie",

    openingHoursTitle: "Godziny otwarcia",
    openingHours: [
      { days: "Poniedziałek — Piątek", hours: "10:00 — 19:00" },
      { days: "Sobota", hours: "10:00 — 15:00" },
      { days: "Niedziela", hours: "Zamknięte" },
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

    nearestSalonEyebrow: "Nearest studio",
    nearestSalonTitle: "The Aurora studio closest to you",
    nearestSalonDescription:
      "After permission to use your device location, we will show the studio closest to you. If location access is unavailable, the main headquarters will be displayed.",
    fallbackSalonTitle: "Aurora main studio",
    fallbackSalonDescription:
      "We do not have access to your device location, so the Aurora Beauty Studio main headquarters is displayed as the default location.",
    locationLoading: "Checking device location...",
    locationGranted: "Your device location has been included.",
    locationDenied:
      "Location access was not granted. Showing the main headquarters.",
    locationUnavailable:
      "Geolocation is not available in this browser. Showing the main headquarters.",
    useLocationButton: "Use my location",
    selectedSalonMapTitle: "Selected studio map",
    googleMapsLabel: "Open in Google Maps",
    distanceLabel: "Estimated distance",
    allLocationsButton: "See all locations",

    nearbyEyebrow: "Nearby",
    nearbyTitle: "Two more studios closest to you.",
    nearbyDescription:
      "Below we show the next two locations closest to your position, excluding the studio already displayed above.",
    nearbyFallbackDescription:
      "Because we do not have access to your location, we show two locations closest to the main headquarters.",
    nearbyGoogleMapsLabel: "View on map",

    openingHoursTitle: "Opening hours",
    openingHours: [
      { days: "Monday — Friday", hours: "10:00 — 19:00" },
      { days: "Saturday", hours: "10:00 — 15:00" },
      { days: "Sunday", hours: "Closed" },
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
