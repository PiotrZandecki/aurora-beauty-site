import type { Language } from "@/types/site";

export type BookingService = {
  id: string;
  name: string;
  category: string;
  durationMinutes: number;
  description: string;
  priceFrom: string;
};

export type EmployeeBusyRule = {
  weekday: number;
  times: string[];
};

export type BookingEmployee = {
  id: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  serviceIds: string[];
  workingDays: number[];
  busyRules: EmployeeBusyRule[];
  specialties: string[];
};

type BookingContent = {
  pageEyebrow: string;
  pageTitle: string;
  pageDescription: string;

  locationSectionEyebrow: string;
  locationSectionTitle: string;
  locationSectionDescription: string;
  locationLoading: string;
  locationGranted: string;
  locationDenied: string;
  locationUnavailable: string;
  locationFallback: string;
  useLocationButton: string;
  selectedLocationLabel: string;
  nearestLocationsLabel: string;
  distanceLabel: string;

  serviceSectionEyebrow: string;
  serviceSectionTitle: string;
  serviceSectionDescription: string;
  serviceLabel: string;

  employeeSectionEyebrow: string;
  employeeSectionTitle: string;
  employeeSectionDescription: string;
  employeeLockedTitle: string;
  employeeLockedDescription: string;
  selectedLabel: string;

  calendarSectionEyebrow: string;
  calendarSectionTitle: string;
  calendarSectionDescription: string;
  calendarLockedTitle: string;
  calendarLockedDescription: string;
  availableSlotsLabel: string;
  noSlotsLabel: string;
  closedLabel: string;

  summaryEyebrow: string;
  summaryTitle: string;
  summaryDescription: string;
  locationLabel: string;
  employeeLabel: string;
  dayLabel: string;
  timeLabel: string;
  confirmationStatusLabel: string;

  formEyebrow: string;
  formTitle: string;
  formDescription: string;
  formLabels: {
    name: string;
    email: string;
    phone: string;
    notes: string;
    submit: string;
    missingLocation: string;
    missingEmployee: string;
    missingSlot: string;
  };

  confirmationEyebrow: string;
  confirmationTitle: string;
  confirmationDescription: string;
  bookingReferenceLabel: string;
  confirmedStatus: string;
  newBookingButton: string;

  visitNoteTitle: string;
  visitNoteDescription: string;
  visitNoteItems: string[];

  services: BookingService[];
  employees: BookingEmployee[];
};

export const bookingContent: Record<Language, BookingContent> = {
  pl: {
    pageEyebrow: "Rezerwacja",
    pageTitle: "Umów wizytę w najbliższym salonie Aurora.",
    pageDescription:
      "Wybierz salon w pobliżu, usługę, osobę obsługującą oraz dogodny termin. Po uzupełnieniu danych rezerwacja zostanie automatycznie potwierdzona.",

    locationSectionEyebrow: "Krok 1",
    locationSectionTitle: "Wybierz salon, w którym chcesz umówić wizytę.",
    locationSectionDescription:
      "Aby ułatwić wybór, pokazujemy maksymalnie pięć najbliższych lokalizacji. Po zgodzie na użycie lokalizacji urządzenia lista zostanie dopasowana do Twojego położenia.",
    locationLoading: "Sprawdzamy najbliższe salony...",
    locationGranted: "Lista została dopasowana do Twojej lokalizacji.",
    locationDenied:
      "Nie uzyskaliśmy dostępu do lokalizacji. Pokazujemy salony najbliższe głównej siedzibie.",
    locationUnavailable:
      "Geolokalizacja nie jest dostępna w tej przeglądarce. Pokazujemy salony najbliższe głównej siedzibie.",
    locationFallback:
      "Pokazujemy salony najbliższe głównej siedzibie Aurora Beauty Studio.",
    useLocationButton: "Użyj mojej lokalizacji",
    selectedLocationLabel: "Wybrany salon",
    nearestLocationsLabel: "Najbliższe salony",
    distanceLabel: "Odległość",

    serviceSectionEyebrow: "Krok 2",
    serviceSectionTitle: "Wybierz usługę, którą chcesz zarezerwować.",
    serviceSectionDescription:
      "Po wyborze usługi pokażemy osoby dostępne w wybranym salonie, które mogą wykonać dany zabieg.",
    serviceLabel: "Usługa",

    employeeSectionEyebrow: "Krok 3",
    employeeSectionTitle: "Wybierz osobę, która będzie wykonywać usługę.",
    employeeSectionDescription:
      "Lista jest dopasowana do wybranego salonu i usługi. Każda osoba ma własny zakres specjalizacji oraz indywidualny kalendarz dostępności.",
    employeeLockedTitle: "Najpierw wybierz salon",
    employeeLockedDescription:
      "Po wyborze lokalizacji pokażemy zespół dostępny w danym salonie.",
    selectedLabel: "Wybrano",

    calendarSectionEyebrow: "Krok 4",
    calendarSectionTitle: "Wybierz dzień i godzinę wizyty.",
    calendarSectionDescription:
      "Kalendarz pokazuje dostępne terminy na najbliższe 14 dni w ramach godzin otwarcia salonu i grafiku wybranej osoby.",
    calendarLockedTitle: "Wybierz osobę obsługującą",
    calendarLockedDescription:
      "Dostępne terminy pojawią się po wyborze pracownika lub pracowniczki.",
    availableSlotsLabel: "Dostępne godziny",
    noSlotsLabel: "Brak wolnych godzin",
    closedLabel: "Zamknięte",

    summaryEyebrow: "Podsumowanie",
    summaryTitle: "Twoja wizyta",
    summaryDescription:
      "Sprawdź szczegóły przed potwierdzeniem. Po wysłaniu formularza rezerwacja zostanie zaakceptowana automatycznie.",
    locationLabel: "Lokalizacja",
    employeeLabel: "Osoba obsługująca",
    dayLabel: "Dzień",
    timeLabel: "Godzina",
    confirmationStatusLabel: "Automatyczne potwierdzenie",

    formEyebrow: "Krok 5",
    formTitle: "Uzupełnij dane kontaktowe.",
    formDescription:
      "Podaj dane potrzebne do potwierdzenia wizyty. Po kliknięciu przycisku otrzymasz numer rezerwacji i komplet szczegółów wizyty.",
    formLabels: {
      name: "Imię",
      email: "Adres e-mail",
      phone: "Telefon",
      notes: "Dodatkowe informacje",
      submit: "Potwierdź rezerwację",
      missingLocation: "Wybierz salon przed potwierdzeniem rezerwacji.",
      missingEmployee:
        "Wybierz osobę obsługującą przed potwierdzeniem rezerwacji.",
      missingSlot: "Wybierz godzinę wizyty przed potwierdzeniem rezerwacji.",
    },

    confirmationEyebrow: "Rezerwacja potwierdzona",
    confirmationTitle: "Twoja wizyta została zarezerwowana.",
    confirmationDescription:
      "Poniżej znajdziesz szczegóły potwierdzonej wizyty. Numer rezerwacji zachowaj na wypadek kontaktu z salonem.",
    bookingReferenceLabel: "Numer rezerwacji",
    confirmedStatus: "Potwierdzona automatycznie",
    newBookingButton: "Zarezerwuj kolejną wizytę",

    visitNoteTitle: "Dobrze wiedzieć przed wizytą",
    visitNoteDescription:
      "Dzięki kilku szczegółom łatwiej będzie przygotować usługę pod oczekiwany efekt.",
    visitNoteItems: [
      "wybierz salon najbliżej siebie albo najwygodniejszy dojazdowo",
      "sprawdź, czy wybrana osoba obsługuje konkretną usługę",
      "przy zabiegach twarzy możesz dopisać aktualne potrzeby skóry",
      "przy makijażu warto dopisać okazję i preferowany efekt",
    ],

    services: [
      {
        id: "signature-glow",
        name: "Signature Glow Treatment",
        category: "Facial care",
        durationMinutes: 90,
        description:
          "Zabieg premium nastawiony na świeżość, ukojenie skóry i naturalny glow.",
        priceFrom: "od 420 PLN",
      },
      {
        id: "facial-care",
        name: "Pielęgnacja twarzy",
        category: "Facial care",
        durationMinutes: 60,
        description:
          "Dopasowany zabieg pielęgnacyjny dla skóry wymagającej oczyszczenia, regeneracji lub ukojenia.",
        priceFrom: "od 280 PLN",
      },
      {
        id: "brows-lashes",
        name: "Brwi i rzęsy",
        category: "Brows & lashes",
        durationMinutes: 45,
        description:
          "Naturalne podkreślenie oprawy oczu bez efektu przerysowania.",
        priceFrom: "od 170 PLN",
      },
      {
        id: "occasion-makeup",
        name: "Makijaż okazjonalny",
        category: "Makeup",
        durationMinutes: 75,
        description:
          "Makijaż dopasowany do urody, stylizacji, światła i charakteru wydarzenia.",
        priceFrom: "od 350 PLN",
      },
      {
        id: "consultation",
        name: "Konsultacja beauty",
        category: "Consultation",
        durationMinutes: 30,
        description:
          "Krótka konsultacja pomagająca dobrać usługę, plan pielęgnacji lub kierunek efektu.",
        priceFrom: "od 120 PLN",
      },
    ],
    employees: [
      {
        id: "emilia-nowak",
        name: "Emilia Nowak",
        role: "Senior facial care specialist",
        initials: "EN",
        bio: "Specjalizuje się w pielęgnacji twarzy, konsultacjach i zabiegach glow.",
        serviceIds: ["signature-glow", "facial-care", "consultation"],
        workingDays: [1, 2, 3, 4, 5],
        busyRules: [
          { weekday: 1, times: ["12:00", "15:30"] },
          { weekday: 3, times: ["11:00", "14:00", "17:00"] },
          { weekday: 5, times: ["13:00"] },
        ],
        specialties: ["Facial care", "Glow rituals", "Consultations"],
      },
      {
        id: "sofia-zielinska",
        name: "Sofia Zielińska",
        role: "Brows & lashes stylist",
        initials: "SZ",
        bio: "Pracuje z naturalnym podkreśleniem brwi i rzęs oraz miękkim efektem oprawy oczu.",
        serviceIds: ["brows-lashes", "consultation"],
        workingDays: [2, 3, 4, 5, 6],
        busyRules: [
          { weekday: 2, times: ["10:30", "12:30", "16:00"] },
          { weekday: 4, times: ["13:30"] },
          { weekday: 6, times: ["11:00"] },
        ],
        specialties: ["Brows & lashes", "Natural look", "Soft styling"],
      },
      {
        id: "maya-torres",
        name: "Maya Torres",
        role: "Makeup artist",
        initials: "MT",
        bio: "Specjalizuje się w makijażu okazjonalnym, skórze gotowej do zdjęć i event beauty.",
        serviceIds: ["occasion-makeup", "consultation"],
        workingDays: [1, 3, 4, 5, 6],
        busyRules: [
          { weekday: 1, times: ["14:30"] },
          { weekday: 5, times: ["11:30", "15:00"] },
          { weekday: 6, times: ["10:00", "12:00"] },
        ],
        specialties: ["Occasion makeup", "Photo-ready skin", "Event beauty"],
      },
      {
        id: "lena-hart",
        name: "Lena Hart",
        role: "Premium beauty consultant",
        initials: "LH",
        bio: "Łączy konsultacje, pakiety premium i zabiegi dopasowane do oczekiwanego efektu.",
        serviceIds: [
          "signature-glow",
          "facial-care",
          "occasion-makeup",
          "consultation",
        ],
        workingDays: [1, 2, 4, 5],
        busyRules: [
          { weekday: 2, times: ["11:00", "15:30"] },
          { weekday: 4, times: ["12:00"] },
          { weekday: 5, times: ["16:30"] },
        ],
        specialties: ["Premium packages", "Consultations", "Soft glam"],
      },
      {
        id: "althea-santos",
        name: "Althea Santos",
        role: "Mindanao beauty specialist",
        initials: "AS",
        bio: "Skupia się na naturalnym glow, pielęgnacji twarzy oraz subtelnej stylizacji oprawy oczu.",
        serviceIds: ["signature-glow", "facial-care", "brows-lashes"],
        workingDays: [1, 2, 3, 5, 6],
        busyRules: [
          { weekday: 1, times: ["10:30", "13:00"] },
          { weekday: 3, times: ["15:00"] },
          { weekday: 6, times: ["11:30", "13:30"] },
        ],
        specialties: ["Glow rituals", "Facial care", "Brows & lashes"],
      },
      {
        id: "isabella-klein",
        name: "Isabella Klein",
        role: "Skin ritual therapist",
        initials: "IK",
        bio: "Prowadzi spokojne rytuały pielęgnacyjne i zabiegi nastawione na regenerację skóry.",
        serviceIds: ["signature-glow", "facial-care"],
        workingDays: [1, 2, 3, 4, 6],
        busyRules: [
          { weekday: 2, times: ["14:00"] },
          { weekday: 4, times: ["10:30", "16:00"] },
          { weekday: 6, times: ["12:30"] },
        ],
        specialties: ["Skin rituals", "Recovery care", "Natural glow"],
      },
      {
        id: "amelia-roche",
        name: "Amelia Roche",
        role: "Soft glam specialist",
        initials: "AR",
        bio: "Tworzy lekkie makijaże i naturalne stylizacje dopasowane do okazji i światła.",
        serviceIds: ["occasion-makeup", "brows-lashes", "consultation"],
        workingDays: [2, 3, 4, 5, 6],
        busyRules: [
          { weekday: 3, times: ["13:00"] },
          { weekday: 5, times: ["10:30", "14:30"] },
          { weekday: 6, times: ["11:00"] },
        ],
        specialties: ["Soft glam", "Brows & lashes", "Event beauty"],
      },
    ],
  },

  en: {
    pageEyebrow: "Booking",
    pageTitle: "Book a visit at your nearest Aurora studio.",
    pageDescription:
      "Choose a nearby studio, service, specialist and preferred appointment time. After completing your details, the booking will be confirmed automatically.",

    locationSectionEyebrow: "Step 1",
    locationSectionTitle: "Choose the studio where you want to book.",
    locationSectionDescription:
      "To keep the choice simple, we show up to five nearest locations. After location permission, the list is adjusted to your device position.",
    locationLoading: "Checking the nearest studios...",
    locationGranted: "The list has been adjusted to your location.",
    locationDenied:
      "Location access was not granted. Showing studios closest to the main headquarters.",
    locationUnavailable:
      "Geolocation is not available in this browser. Showing studios closest to the main headquarters.",
    locationFallback:
      "Showing studios closest to the Aurora Beauty Studio main headquarters.",
    useLocationButton: "Use my location",
    selectedLocationLabel: "Selected studio",
    nearestLocationsLabel: "Nearest studios",
    distanceLabel: "Distance",

    serviceSectionEyebrow: "Step 2",
    serviceSectionTitle: "Choose the service you want to book.",
    serviceSectionDescription:
      "After selecting a service, we will show specialists available in the selected studio who can provide it.",
    serviceLabel: "Service",

    employeeSectionEyebrow: "Step 3",
    employeeSectionTitle: "Choose the person who will provide the service.",
    employeeSectionDescription:
      "The list is matched to the selected studio and service. Each person has their own scope of work and availability calendar.",
    employeeLockedTitle: "Choose a studio first",
    employeeLockedDescription:
      "After choosing a location, we will show the team available in that studio.",
    selectedLabel: "Selected",

    calendarSectionEyebrow: "Step 4",
    calendarSectionTitle: "Choose the appointment day and time.",
    calendarSectionDescription:
      "The calendar shows available times for the next 14 days based on studio opening hours and the selected specialist’s schedule.",
    calendarLockedTitle: "Choose a specialist",
    calendarLockedDescription:
      "Available times will appear after choosing the person who will provide the service.",
    availableSlotsLabel: "Available times",
    noSlotsLabel: "No available times",
    closedLabel: "Closed",

    summaryEyebrow: "Summary",
    summaryTitle: "Your visit",
    summaryDescription:
      "Review the details before confirmation. After submitting the form, the booking will be accepted automatically.",
    locationLabel: "Location",
    employeeLabel: "Specialist",
    dayLabel: "Day",
    timeLabel: "Time",
    confirmationStatusLabel: "Automatic confirmation",

    formEyebrow: "Step 5",
    formTitle: "Add your contact details.",
    formDescription:
      "Provide the details needed to confirm your visit. After clicking the button, you will receive a booking number and complete appointment details.",
    formLabels: {
      name: "Name",
      email: "E-mail address",
      phone: "Phone",
      notes: "Additional notes",
      submit: "Confirm booking",
      missingLocation: "Choose a studio before confirming the booking.",
      missingEmployee: "Choose a specialist before confirming the booking.",
      missingSlot: "Choose an appointment time before confirming the booking.",
    },

    confirmationEyebrow: "Booking confirmed",
    confirmationTitle: "Your visit has been booked.",
    confirmationDescription:
      "Below are the details of your confirmed appointment. Keep the booking number in case you need to contact the studio.",
    bookingReferenceLabel: "Booking number",
    confirmedStatus: "Confirmed automatically",
    newBookingButton: "Book another visit",

    visitNoteTitle: "Good to know before your visit",
    visitNoteDescription:
      "A few details make it easier to prepare the service for your expected result.",
    visitNoteItems: [
      "choose the studio closest to you or the most convenient one",
      "check whether the selected person provides the chosen service",
      "for facial treatments, you can add your current skin needs",
      "for makeup, mention the occasion and preferred result",
    ],

    services: [
      {
        id: "signature-glow",
        name: "Signature Glow Treatment",
        category: "Facial care",
        durationMinutes: 90,
        description:
          "A premium treatment focused on freshness, skin comfort and natural glow.",
        priceFrom: "from 420 PLN",
      },
      {
        id: "facial-care",
        name: "Facial care",
        category: "Facial care",
        durationMinutes: 60,
        description:
          "A personalized skincare treatment for cleansing, recovery or soothing.",
        priceFrom: "from 280 PLN",
      },
      {
        id: "brows-lashes",
        name: "Brows and lashes",
        category: "Brows & lashes",
        durationMinutes: 45,
        description: "Natural eye-area definition without an overdone result.",
        priceFrom: "from 170 PLN",
      },
      {
        id: "occasion-makeup",
        name: "Occasion makeup",
        category: "Makeup",
        durationMinutes: 75,
        description:
          "Makeup tailored to natural features, outfit, lighting and event character.",
        priceFrom: "from 350 PLN",
      },
      {
        id: "consultation",
        name: "Beauty consultation",
        category: "Consultation",
        durationMinutes: 30,
        description:
          "A short consultation to choose a service, care plan or result direction.",
        priceFrom: "from 120 PLN",
      },
    ],
    employees: [
      {
        id: "emilia-nowak",
        name: "Emilia Nowak",
        role: "Senior facial care specialist",
        initials: "EN",
        bio: "Specializes in facial care, consultations and glow-focused treatments.",
        serviceIds: ["signature-glow", "facial-care", "consultation"],
        workingDays: [1, 2, 3, 4, 5],
        busyRules: [
          { weekday: 1, times: ["12:00", "15:30"] },
          { weekday: 3, times: ["11:00", "14:00", "17:00"] },
          { weekday: 5, times: ["13:00"] },
        ],
        specialties: ["Facial care", "Glow rituals", "Consultations"],
      },
      {
        id: "sofia-zielinska",
        name: "Sofia Zielińska",
        role: "Brows & lashes stylist",
        initials: "SZ",
        bio: "Works with natural brow and lash definition and a soft eye-frame effect.",
        serviceIds: ["brows-lashes", "consultation"],
        workingDays: [2, 3, 4, 5, 6],
        busyRules: [
          { weekday: 2, times: ["10:30", "12:30", "16:00"] },
          { weekday: 4, times: ["13:30"] },
          { weekday: 6, times: ["11:00"] },
        ],
        specialties: ["Brows & lashes", "Natural look", "Soft styling"],
      },
      {
        id: "maya-torres",
        name: "Maya Torres",
        role: "Makeup artist",
        initials: "MT",
        bio: "Specializes in occasion makeup, photo-ready skin and event beauty.",
        serviceIds: ["occasion-makeup", "consultation"],
        workingDays: [1, 3, 4, 5, 6],
        busyRules: [
          { weekday: 1, times: ["14:30"] },
          { weekday: 5, times: ["11:30", "15:00"] },
          { weekday: 6, times: ["10:00", "12:00"] },
        ],
        specialties: ["Occasion makeup", "Photo-ready skin", "Event beauty"],
      },
      {
        id: "lena-hart",
        name: "Lena Hart",
        role: "Premium beauty consultant",
        initials: "LH",
        bio: "Combines consultations, premium packages and treatments matched to the expected result.",
        serviceIds: [
          "signature-glow",
          "facial-care",
          "occasion-makeup",
          "consultation",
        ],
        workingDays: [1, 2, 4, 5],
        busyRules: [
          { weekday: 2, times: ["11:00", "15:30"] },
          { weekday: 4, times: ["12:00"] },
          { weekday: 5, times: ["16:30"] },
        ],
        specialties: ["Premium packages", "Consultations", "Soft glam"],
      },
      {
        id: "althea-santos",
        name: "Althea Santos",
        role: "Mindanao beauty specialist",
        initials: "AS",
        bio: "Focuses on natural glow, facial care and subtle eye-area styling.",
        serviceIds: ["signature-glow", "facial-care", "brows-lashes"],
        workingDays: [1, 2, 3, 5, 6],
        busyRules: [
          { weekday: 1, times: ["10:30", "13:00"] },
          { weekday: 3, times: ["15:00"] },
          { weekday: 6, times: ["11:30", "13:30"] },
        ],
        specialties: ["Glow rituals", "Facial care", "Brows & lashes"],
      },
      {
        id: "isabella-klein",
        name: "Isabella Klein",
        role: "Skin ritual therapist",
        initials: "IK",
        bio: "Leads calm skincare rituals and treatments focused on skin recovery.",
        serviceIds: ["signature-glow", "facial-care"],
        workingDays: [1, 2, 3, 4, 6],
        busyRules: [
          { weekday: 2, times: ["14:00"] },
          { weekday: 4, times: ["10:30", "16:00"] },
          { weekday: 6, times: ["12:30"] },
        ],
        specialties: ["Skin rituals", "Recovery care", "Natural glow"],
      },
      {
        id: "amelia-roche",
        name: "Amelia Roche",
        role: "Soft glam specialist",
        initials: "AR",
        bio: "Creates light makeup and natural styling tailored to the occasion and lighting.",
        serviceIds: ["occasion-makeup", "brows-lashes", "consultation"],
        workingDays: [2, 3, 4, 5, 6],
        busyRules: [
          { weekday: 3, times: ["13:00"] },
          { weekday: 5, times: ["10:30", "14:30"] },
          { weekday: 6, times: ["11:00"] },
        ],
        specialties: ["Soft glam", "Brows & lashes", "Event beauty"],
      },
    ],
  },
};
