"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionHeader } from "@/components/sections/SectionHeader";
import {
  bookingContent,
  type BookingEmployee,
  type BookingService,
} from "@/content/bookingContent";
import {
  locationsContent,
  type StudioLocation,
} from "@/content/locationsContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

type CustomerFormData = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};

type UserPosition = {
  lat: number;
  lng: number;
};

type LocationStatus = "idle" | "loading" | "granted" | "denied" | "unavailable";

type LocationDistanceResult = {
  location: StudioLocation;
  distance: number;
};

const initialCustomerFormData: CustomerFormData = {
  name: "",
  email: "",
  phone: "",
  notes: "",
};

function getDateKey(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function generateCalendarDays(daysCount: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Array.from({ length: daysCount }).map((_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);

    return date;
  });
}

function getOpeningWindow(weekday: number) {
  if (weekday === 0) {
    return null;
  }

  if (weekday === 6) {
    return {
      start: "10:00",
      end: "15:00",
    };
  }

  return {
    start: "10:00",
    end: "19:00",
  };
}

function getMinutesFromTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

function getTimeFromMinutes(totalMinutes: number) {
  const hours = `${Math.floor(totalMinutes / 60)}`.padStart(2, "0");
  const minutes = `${totalMinutes % 60}`.padStart(2, "0");

  return `${hours}:${minutes}`;
}

function isSameDay(firstDate: Date, secondDate: Date) {
  return getDateKey(firstDate) === getDateKey(secondDate);
}

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function getDistanceInKm(
  firstLocation: UserPosition,
  secondLocation: UserPosition,
) {
  const earthRadiusKm = 6371;
  const latDelta = toRadians(secondLocation.lat - firstLocation.lat);
  const lngDelta = toRadians(secondLocation.lng - firstLocation.lng);

  const a =
    Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
    Math.cos(toRadians(firstLocation.lat)) *
      Math.cos(toRadians(secondLocation.lat)) *
      Math.sin(lngDelta / 2) *
      Math.sin(lngDelta / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
}

function getNearestLocations(
  locations: StudioLocation[],
  position: UserPosition,
) {
  return locations
    .map((location) => ({
      location,
      distance: getDistanceInKm(position, {
        lat: location.lat,
        lng: location.lng,
      }),
    }))
    .sort((firstLocation, secondLocation) => {
      return firstLocation.distance - secondLocation.distance;
    });
}

function formatDistance(distance: number) {
  if (distance < 10) {
    return `${distance.toFixed(1)} km`;
  }

  return `${Math.round(distance).toLocaleString("pl-PL")} km`;
}

function getStableHash(value: string) {
  return value.split("").reduce((total, character) => {
    return total + character.charCodeAt(0);
  }, 0);
}

function getAvailableEmployeesForLocationAndService({
  employees,
  locationId,
  serviceId,
}: {
  employees: BookingEmployee[];
  locationId: string;
  serviceId: string;
}) {
  const employeesForService = employees.filter((employee) =>
    employee.serviceIds.includes(serviceId),
  );

  if (employeesForService.length <= 4) {
    return employeesForService;
  }

  const startIndex = getStableHash(locationId) % employeesForService.length;
  const rotatedEmployees = [
    ...employeesForService.slice(startIndex),
    ...employeesForService.slice(0, startIndex),
  ];

  return rotatedEmployees.slice(0, 4);
}

function getAvailableSlots({
  date,
  employee,
  service,
}: {
  date: Date;
  employee: BookingEmployee;
  service: BookingService;
}) {
  const weekday = date.getDay();
  const openingWindow = getOpeningWindow(weekday);

  if (!openingWindow || !employee.workingDays.includes(weekday)) {
    return [];
  }

  const openingStart = getMinutesFromTime(openingWindow.start);
  const openingEnd = getMinutesFromTime(openingWindow.end);
  const busyTimes =
    employee.busyRules.find((rule) => rule.weekday === weekday)?.times ?? [];

  const now = new Date();
  const minimumTodayStart = isSameDay(date, now)
    ? now.getHours() * 60 + now.getMinutes() + 60
    : null;

  const slots: string[] = [];

  for (
    let slotStart = openingStart;
    slotStart + service.durationMinutes <= openingEnd;
    slotStart += 30
  ) {
    const time = getTimeFromMinutes(slotStart);

    if (minimumTodayStart !== null && slotStart < minimumTodayStart) {
      continue;
    }

    if (busyTimes.includes(time)) {
      continue;
    }

    slots.push(time);
  }

  return slots;
}

function formatDateLabel(date: Date, language: "pl" | "en") {
  return new Intl.DateTimeFormat(language === "pl" ? "pl-PL" : "en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).format(date);
}

function formatLongDateLabel(date: Date, language: "pl" | "en") {
  return new Intl.DateTimeFormat(language === "pl" ? "pl-PL" : "en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function BookingPage() {
  const { language } = useSitePreferences();
  const content = bookingContent[language];
  const allLocations = locationsContent[language].locations;

  const [calendarDays] = useState(() => generateCalendarDays(14));
  const [userPosition, setUserPosition] = useState<UserPosition | null>(null);
  const [locationStatus, setLocationStatus] = useState<LocationStatus>("idle");
  const [selectedLocationId, setSelectedLocationId] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState(
    content.services[0]?.id ?? "",
  );
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [selectedDateKey, setSelectedDateKey] = useState("");
  const [selectedSlotTime, setSelectedSlotTime] = useState<string | null>(null);
  const [customerFormData, setCustomerFormData] = useState<CustomerFormData>(
    initialCustomerFormData,
  );
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

  const mainLocation =
    allLocations.find((location) => location.isMain) ?? allLocations[0];

  const fallbackPosition = mainLocation
    ? {
        lat: mainLocation.lat,
        lng: mainLocation.lng,
      }
    : null;

  const comparisonPosition = userPosition ?? fallbackPosition;

  const nearestLocationResults: LocationDistanceResult[] = comparisonPosition
    ? getNearestLocations(allLocations, comparisonPosition).slice(0, 5)
    : [];

  const selectedLocationResult =
    nearestLocationResults.find(
      (result) => result.location.id === selectedLocationId,
    ) ?? null;

  const selectedLocation = selectedLocationResult?.location ?? null;

  const selectedService =
    content.services.find((service) => service.id === selectedServiceId) ??
    content.services[0];

  const availableEmployees =
    selectedLocation && selectedService
      ? getAvailableEmployeesForLocationAndService({
          employees: content.employees,
          locationId: selectedLocation.id,
          serviceId: selectedService.id,
        })
      : [];

  const selectedEmployee =
    availableEmployees.find((employee) => employee.id === selectedEmployeeId) ??
    null;

  const calendarWithSlots =
    selectedEmployee && selectedService
      ? calendarDays.map((date) => {
          const slots = getAvailableSlots({
            date,
            employee: selectedEmployee,
            service: selectedService,
          });

          return {
            date,
            dateKey: getDateKey(date),
            slots,
            isClosed: getOpeningWindow(date.getDay()) === null,
          };
        })
      : [];

  const effectiveSelectedDay =
    calendarWithSlots.find((day) => day.dateKey === selectedDateKey) ??
    calendarWithSlots[0];

  const locationStatusMessage = (() => {
    if (locationStatus === "loading") {
      return content.locationLoading;
    }

    if (locationStatus === "granted") {
      return content.locationGranted;
    }

    if (locationStatus === "denied") {
      return content.locationDenied;
    }

    if (locationStatus === "unavailable") {
      return content.locationUnavailable;
    }

    return content.locationFallback;
  })();

  function requestUserLocation() {
    if (!navigator.geolocation) {
      setLocationStatus("unavailable");
      setUserPosition(null);
      return;
    }

    setLocationStatus("loading");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setSelectedLocationId("");
        setSelectedEmployeeId("");
        setSelectedDateKey("");
        setSelectedSlotTime(null);
        setLocationStatus("granted");
      },
      () => {
        setUserPosition(null);
        setSelectedLocationId("");
        setSelectedEmployeeId("");
        setSelectedDateKey("");
        setSelectedSlotTime(null);
        setLocationStatus("denied");
      },
      {
        enableHighAccuracy: false,
        timeout: 9000,
        maximumAge: 1000 * 60 * 10,
      },
    );
  }

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      requestUserLocation();
    }, 350);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  function resetAfterLocationChange() {
    setSelectedEmployeeId("");
    setSelectedDateKey("");
    setSelectedSlotTime(null);
    setHasSubmitted(false);
    setHasTriedSubmit(false);
  }

  function resetAfterServiceChange() {
    setSelectedEmployeeId("");
    setSelectedDateKey("");
    setSelectedSlotTime(null);
    setHasSubmitted(false);
    setHasTriedSubmit(false);
  }

  function resetAfterEmployeeChange() {
    setSelectedDateKey("");
    setSelectedSlotTime(null);
    setHasSubmitted(false);
    setHasTriedSubmit(false);
  }

  function handleCustomerChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setCustomerFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setHasSubmitted(false);
  }

  function buildEmailBody() {
    if (language === "pl") {
      return [
        "Dzień dobry,",
        "",
        "chciałabym/chciałbym zapytać o rezerwację wizyty w Aurora Beauty Studio.",
        "",
        `Salon: ${selectedLocation?.name ?? ""}`,
        `Miasto: ${selectedLocation?.city ?? ""}`,
        `Adres: ${selectedLocation?.address ?? ""}`,
        `Usługa: ${selectedService?.name ?? ""}`,
        `Osoba obsługująca: ${selectedEmployee?.name ?? ""}`,
        `Data: ${
          effectiveSelectedDay
            ? formatLongDateLabel(effectiveSelectedDay.date, language)
            : ""
        }`,
        `Godzina: ${selectedSlotTime ?? ""}`,
        `Czas trwania: ${selectedService?.durationMinutes ?? ""} minut`,
        "",
        `Imię: ${customerFormData.name}`,
        `E-mail: ${customerFormData.email}`,
        `Telefon: ${customerFormData.phone}`,
        "",
        "Dodatkowe informacje:",
        customerFormData.notes || "brak",
        "",
        "Pozdrawiam",
      ].join("\n");
    }

    return [
      "Hello,",
      "",
      "I would like to ask about booking an appointment at Aurora Beauty Studio.",
      "",
      `Studio: ${selectedLocation?.name ?? ""}`,
      `City: ${selectedLocation?.city ?? ""}`,
      `Address: ${selectedLocation?.address ?? ""}`,
      `Service: ${selectedService?.name ?? ""}`,
      `Specialist: ${selectedEmployee?.name ?? ""}`,
      `Date: ${
        effectiveSelectedDay
          ? formatLongDateLabel(effectiveSelectedDay.date, language)
          : ""
      }`,
      `Time: ${selectedSlotTime ?? ""}`,
      `Duration: ${selectedService?.durationMinutes ?? ""} minutes`,
      "",
      `Name: ${customerFormData.name}`,
      `E-mail: ${customerFormData.email}`,
      `Phone: ${customerFormData.phone}`,
      "",
      "Additional notes:",
      customerFormData.notes || "none",
      "",
      "Best regards",
    ].join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasTriedSubmit(true);

    if (!selectedLocation || !selectedEmployee || !selectedSlotTime) {
      return;
    }

    const subject =
      language === "pl"
        ? `Zapytanie o wizytę — ${selectedService?.name ?? "Aurora"}`
        : `Appointment request — ${selectedService?.name ?? "Aurora"}`;

    const mailtoUrl = `mailto:${content.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(buildEmailBody())}`;

    window.location.assign(mailtoUrl);
    setHasSubmitted(true);
  }

  return (
    <>
      <PageIntro
        eyebrow={content.pageEyebrow}
        title={content.pageTitle}
        description={content.pageDescription}
      />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={content.locationSectionEyebrow}
            title={content.locationSectionTitle}
            description={content.locationSectionDescription}
          />

          <Reveal delay={100}>
            <div className="mt-10 rounded-4xl border border-rose-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                    {content.nearestLocationsLabel}
                  </p>

                  <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">
                    {locationStatusMessage}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={requestUserLocation}
                  className="interactive-press focus-ring rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
                >
                  {content.useLocationButton}
                </button>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {nearestLocationResults.map((result) => {
                  const isSelected = selectedLocationId === result.location.id;

                  return (
                    <button
                      key={result.location.id}
                      type="button"
                      onClick={() => {
                        setSelectedLocationId(result.location.id);
                        resetAfterLocationChange();
                      }}
                      className={`interactive-lift focus-ring rounded-3xl border p-5 text-left transition ${
                        isSelected
                          ? "border-rose-500 bg-rose-50 shadow-xl shadow-rose-200/60 dark:border-rose-300 dark:bg-rose-950/40"
                          : "border-rose-200 bg-rose-50/70 hover:border-rose-300 hover:bg-white hover:shadow-lg hover:shadow-rose-200/50 dark:border-stone-800 dark:bg-stone-950 dark:hover:border-stone-700 dark:hover:bg-stone-900"
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">
                        {isSelected
                          ? content.selectedLocationLabel
                          : result.location.region}
                      </p>

                      <h3 className="mt-4 text-lg font-semibold text-stone-950 dark:text-rose-50">
                        {result.location.name}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-stone-700 dark:text-stone-200">
                        {result.location.city}
                      </p>

                      <p className="mt-3 text-xs leading-5 text-stone-500 dark:text-stone-400">
                        {result.location.address}
                      </p>

                      {userPosition && (
                        <p className="mt-4 text-xs font-semibold text-rose-700 dark:text-rose-200">
                          {content.distanceLabel}:{" "}
                          {formatDistance(result.distance)}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={content.serviceSectionEyebrow}
              title={content.serviceSectionTitle}
              description={content.serviceSectionDescription}
            />

            <Reveal className="mt-10">
              <div className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                <label
                  htmlFor="booking-service"
                  className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300"
                >
                  {content.serviceLabel}
                </label>

                <select
                  id="booking-service"
                  value={selectedServiceId}
                  onChange={(event) => {
                    setSelectedServiceId(event.target.value);
                    resetAfterServiceChange();
                  }}
                  className="mt-5 w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                >
                  {content.services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>

                {selectedService && (
                  <div className="mt-5 rounded-3xl bg-rose-50 p-5 dark:bg-stone-950">
                    <p className="font-semibold text-stone-950 dark:text-rose-50">
                      {selectedService.category}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                      {selectedService.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-stone-900 dark:text-rose-200">
                        {selectedService.durationMinutes} min
                      </span>

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-stone-900 dark:text-rose-200">
                        {selectedService.priceFrom}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeader
              eyebrow={content.employeeSectionEyebrow}
              title={content.employeeSectionTitle}
              description={
                selectedLocation
                  ? content.employeeSectionDescription
                  : content.employeeLockedDescription
              }
            />

            {!selectedLocation ? (
              <Reveal className="mt-10">
                <div className="rounded-4xl border border-rose-200 bg-white p-8 text-center shadow-sm dark:border-stone-800 dark:bg-stone-900">
                  <h3 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                    {content.employeeLockedTitle}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xl leading-7 text-stone-600 dark:text-stone-300">
                    {content.employeeLockedDescription}
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal stagger className="mt-10 grid gap-5">
                {availableEmployees.map((employee) => {
                  const isSelected = selectedEmployee?.id === employee.id;

                  return (
                    <button
                      key={employee.id}
                      type="button"
                      onClick={() => {
                        setSelectedEmployeeId(employee.id);
                        resetAfterEmployeeChange();
                      }}
                      className={`interactive-lift focus-ring rounded-4xl border p-6 text-left shadow-sm transition ${
                        isSelected
                          ? "border-rose-400 bg-rose-50 shadow-xl shadow-rose-200/60 dark:border-rose-300 dark:bg-rose-950/40"
                          : "border-rose-200 bg-white hover:border-rose-300 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700 dark:hover:shadow-black/30"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-stone-950 text-lg font-semibold text-white shadow-lg shadow-rose-200/70 dark:bg-rose-100 dark:text-stone-950 dark:shadow-black/30">
                          {employee.initials}
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-stone-950 dark:text-rose-50">
                            {employee.name}
                          </h3>

                          <p className="mt-1 text-sm font-medium text-rose-700 dark:text-rose-200">
                            {employee.role}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 leading-7 text-stone-600 dark:text-stone-300">
                        {employee.bio}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {employee.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-stone-950 dark:text-rose-200"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>

                      {isSelected && (
                        <p className="mt-5 text-sm font-semibold text-rose-700 dark:text-rose-200">
                          {content.selectedLabel}
                        </p>
                      )}
                    </button>
                  );
                })}
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={content.calendarSectionEyebrow}
              title={content.calendarSectionTitle}
              description={
                selectedEmployee
                  ? content.calendarSectionDescription
                  : content.calendarLockedDescription
              }
            />

            {!selectedEmployee ? (
              <Reveal className="mt-10">
                <div className="rounded-4xl border border-rose-200 bg-white p-8 text-center shadow-sm dark:border-stone-800 dark:bg-stone-900">
                  <h3 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                    {content.calendarLockedTitle}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xl leading-7 text-stone-600 dark:text-stone-300">
                    {content.calendarLockedDescription}
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal className="mt-10">
                <div className="rounded-4xl border border-rose-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-6">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {calendarWithSlots.map((day) => {
                      const isSelected =
                        effectiveSelectedDay?.dateKey === day.dateKey;

                      return (
                        <button
                          key={day.dateKey}
                          type="button"
                          onClick={() => {
                            setSelectedDateKey(day.dateKey);
                            setSelectedSlotTime(null);
                            setHasSubmitted(false);
                          }}
                          className={`interactive-press focus-ring rounded-3xl border p-4 text-left transition ${
                            isSelected
                              ? "border-rose-500 bg-stone-950 text-white dark:border-rose-200 dark:bg-rose-100 dark:text-stone-950"
                              : "border-rose-200 bg-rose-50 text-stone-700 hover:border-rose-400 hover:text-rose-700 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-300 dark:hover:border-rose-300 dark:hover:text-rose-200"
                          }`}
                        >
                          <p className="text-sm font-semibold">
                            {formatDateLabel(day.date, language)}
                          </p>

                          <p className="mt-2 text-xs opacity-80">
                            {day.isClosed
                              ? content.closedLabel
                              : `${day.slots.length} ${content.availableSlotsLabel.toLowerCase()}`}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                      {content.availableSlotsLabel}
                    </p>

                    {effectiveSelectedDay &&
                    effectiveSelectedDay.slots.length > 0 ? (
                      <div className="flex flex-wrap gap-3">
                        {effectiveSelectedDay.slots.map((slot) => {
                          const isSelected = selectedSlotTime === slot;

                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => {
                                setSelectedSlotTime(slot);
                                setHasSubmitted(false);
                                setHasTriedSubmit(false);
                              }}
                              className={`interactive-press focus-ring rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                                isSelected
                                  ? "bg-stone-950 text-white dark:bg-rose-100 dark:text-stone-950"
                                  : "border border-rose-200 bg-rose-50 text-stone-700 hover:border-rose-400 hover:text-rose-700 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-300 dark:hover:border-rose-300 dark:hover:text-rose-200"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-stone-600 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300">
                        {content.noSlotsLabel}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <Reveal variant="scale-in" delay={120}>
            <aside className="sticky top-24 rounded-4xl border border-rose-200 bg-white p-6 shadow-xl shadow-rose-200/50 dark:border-stone-800 dark:bg-stone-900 dark:shadow-black/30">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                {content.summaryEyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 dark:text-rose-50">
                {content.summaryTitle}
              </h2>

              <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
                {content.summaryDescription}
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  [content.locationLabel, selectedLocation?.name ?? "—"],
                  [content.serviceLabel, selectedService?.name ?? "—"],
                  [content.employeeLabel, selectedEmployee?.name ?? "—"],
                  [
                    content.dayLabel,
                    effectiveSelectedDay
                      ? formatLongDateLabel(effectiveSelectedDay.date, language)
                      : "—",
                  ],
                  [content.timeLabel, selectedSlotTime ?? "—"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-3xl bg-rose-50 p-4 dark:bg-stone-950"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">
                      {label}
                    </p>

                    <p className="mt-2 font-semibold text-stone-950 dark:text-rose-50">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div className="rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-8">
              <SectionHeader
                eyebrow={content.formEyebrow}
                title={content.formTitle}
                description={content.formDescription}
              />

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                  >
                    {content.formLabels.name}
                  </label>

                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    value={customerFormData.name}
                    onChange={handleCustomerChange}
                    required
                    className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                    >
                      {content.formLabels.email}
                    </label>

                    <input
                      id="booking-email"
                      name="email"
                      type="email"
                      value={customerFormData.email}
                      onChange={handleCustomerChange}
                      required
                      className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                    >
                      {content.formLabels.phone}
                    </label>

                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      value={customerFormData.phone}
                      onChange={handleCustomerChange}
                      required
                      className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-notes"
                    className="mb-2 block text-sm font-semibold text-stone-700 dark:text-stone-200"
                  >
                    {content.formLabels.notes}
                  </label>

                  <textarea
                    id="booking-notes"
                    name="notes"
                    value={customerFormData.notes}
                    onChange={handleCustomerChange}
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                  />
                </div>

                {hasTriedSubmit && !selectedLocation && (
                  <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5 text-sm font-semibold text-rose-700 dark:border-stone-800 dark:bg-stone-950 dark:text-rose-200">
                    {content.formLabels.missingLocation}
                  </div>
                )}

                {hasTriedSubmit && selectedLocation && !selectedEmployee && (
                  <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5 text-sm font-semibold text-rose-700 dark:border-stone-800 dark:bg-stone-950 dark:text-rose-200">
                    {content.formLabels.missingEmployee}
                  </div>
                )}

                {hasTriedSubmit &&
                  selectedLocation &&
                  selectedEmployee &&
                  !selectedSlotTime && (
                    <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5 text-sm font-semibold text-rose-700 dark:border-stone-800 dark:bg-stone-950 dark:text-rose-200">
                      {content.formLabels.missingSlot}
                    </div>
                  )}

                <button
                  type="submit"
                  className="interactive-press focus-ring rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
                >
                  {content.formLabels.submit}
                </button>
              </form>

              {hasSubmitted && (
                <div
                  className="animate-success mt-6 rounded-3xl border border-rose-200 bg-rose-50 p-5 dark:border-stone-800 dark:bg-stone-950"
                  role="status"
                >
                  <h3 className="text-lg font-semibold text-stone-950 dark:text-rose-50">
                    {content.formLabels.successTitle}
                  </h3>

                  <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">
                    {content.formLabels.successMessage}
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal stagger className="grid gap-5">
            <div className="rounded-4xl bg-stone-950 p-6 text-white shadow-2xl shadow-rose-200/70 dark:bg-rose-100 dark:text-stone-950 dark:shadow-black/30 md:p-8">
              <h3 className="text-2xl font-semibold">
                {content.visitNoteTitle}
              </h3>

              <p className="mt-4 leading-7 text-stone-300 dark:text-stone-700">
                {content.visitNoteDescription}
              </p>

              <div className="mt-6 grid gap-3">
                {content.visitNoteItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 p-4 text-sm font-medium text-stone-200 dark:bg-stone-950/10 dark:text-stone-700"
                  >
                    ✦ {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
