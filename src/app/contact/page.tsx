"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { contactContent } from "@/content/contactContent";
import { faqContent } from "@/content/faqContent";
import {
  locationsContent,
  type StudioLocation,
} from "@/content/locationsContent";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionHeader } from "@/components/sections/SectionHeader";

type UserPosition = {
  lat: number;
  lng: number;
};

type LocationStatus = "idle" | "loading" | "granted" | "denied" | "unavailable";

function getGoogleMapsSearchUrl(mapQuery: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapQuery,
  )}`;
}

function getGoogleMapsEmbedUrl(mapQuery: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    mapQuery,
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
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

function formatDistance(distance: number) {
  if (distance < 10) {
    return `${distance.toFixed(1)} km`;
  }

  return `${Math.round(distance).toLocaleString("pl-PL")} km`;
}

function getNearestLocations(
  locations: StudioLocation[],
  userPosition: UserPosition,
) {
  return locations
    .map((location) => ({
      location,
      distance: getDistanceInKm(userPosition, {
        lat: location.lat,
        lng: location.lng,
      }),
    }))
    .sort((firstLocation, secondLocation) => {
      return firstLocation.distance - secondLocation.distance;
    });
}

export default function ContactPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.contact;
  const content = contactContent[language];
  const locations = locationsContent[language].locations;
  const faq = faqContent[language];

  const [userPosition, setUserPosition] = useState<UserPosition | null>(null);
  const [locationStatus, setLocationStatus] = useState<LocationStatus>("idle");

  const mainSalon =
    locations.find((location) => location.isMain) ?? locations[0];

  const requestUserLocation = useCallback(() => {
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
        setLocationStatus("granted");
      },
      () => {
        setUserPosition(null);
        setLocationStatus("denied");
      },
      {
        enableHighAccuracy: false,
        timeout: 9000,
        maximumAge: 1000 * 60 * 10,
      },
    );
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      requestUserLocation();
    }, 350);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [requestUserLocation]);

  const sortedLocations = useMemo(() => {
    const fallbackPosition = mainSalon
      ? {
          lat: mainSalon.lat,
          lng: mainSalon.lng,
        }
      : null;

    const comparisonPosition = userPosition ?? fallbackPosition;

    if (!comparisonPosition) {
      return [];
    }

    return getNearestLocations(locations, comparisonPosition);
  }, [locations, mainSalon, userPosition]);

  const selectedSalonResult = sortedLocations[0] ?? null;
  const selectedSalon = selectedSalonResult?.location ?? mainSalon;
  const selectedSalonDistance = userPosition
    ? (selectedSalonResult?.distance ?? null)
    : null;

  const nearbySalonResults = sortedLocations
    .filter((result) => result.location.id !== selectedSalon?.id)
    .slice(0, 2);

  const locationStatusMessage = useMemo(() => {
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

    return content.nearestSalonDescription;
  }, [
    content.locationDenied,
    content.locationGranted,
    content.locationLoading,
    content.locationUnavailable,
    content.nearestSalonDescription,
    locationStatus,
  ]);

  if (!selectedSalon) {
    return null;
  }

  return (
    <>
      <PageIntro {...page} />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="min-w-0">
            <SectionHeader
              eyebrow={content.detailsEyebrow}
              title={content.detailsTitle}
              description={content.detailsDescription}
            />

            <Reveal stagger className="mt-10 grid min-w-0 gap-4">
              {content.contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="group block w-full min-w-0 overflow-hidden rounded-4xl border border-rose-200 bg-white p-5 shadow-sm transition hover:border-rose-300 hover:shadow-xl hover:shadow-rose-200/60 focus-ring dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700 dark:hover:shadow-black/30 sm:p-6"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300 sm:text-sm">
                      {method.label}
                    </p>

                    <p className="mt-3 wrap-break-word text-2xl font-semibold leading-tight text-stone-950 transition group-hover:text-rose-700 dark:text-rose-50 dark:group-hover:text-rose-200 sm:text-3xl lg:text-2xl">
                      {method.value}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300 sm:text-base">
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal variant="scale-in" delay={120}>
            <div className="rounded-4xl border border-rose-200 bg-rose-50 p-5 shadow-sm dark:border-stone-800 dark:bg-stone-950 md:p-8">
              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-stone-900">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                  {content.nearestSalonEyebrow}
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 dark:text-rose-50">
                  {userPosition
                    ? content.nearestSalonTitle
                    : content.fallbackSalonTitle}
                </h3>

                <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
                  {locationStatusMessage}
                </p>

                <div className="mt-6 rounded-3xl bg-rose-50 p-5 dark:bg-stone-950">
                  <h4 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                    {selectedSalon.name}
                  </h4>

                  <p className="mt-2 font-medium text-stone-700 dark:text-stone-200">
                    {selectedSalon.city}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">
                    {selectedSalon.address}
                  </p>

                  {selectedSalonDistance !== null && (
                    <p className="mt-4 text-sm font-semibold text-rose-700 dark:text-rose-200">
                      {content.distanceLabel}:{" "}
                      {formatDistance(selectedSalonDistance)}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={requestUserLocation}
                    className="interactive-press focus-ring inline-flex justify-center rounded-full bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
                  >
                    {content.useLocationButton}
                  </button>

                  <a
                    href={getGoogleMapsSearchUrl(selectedSalon.mapQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-press focus-ring inline-flex justify-center rounded-full border border-rose-300 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:bg-rose-50 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:bg-stone-900 dark:hover:text-rose-200"
                  >
                    {content.googleMapsLabel}
                  </a>
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-3xl border border-rose-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
                <div className="flex items-center justify-between gap-4 border-b border-rose-100 px-5 py-4 dark:border-stone-800">
                  <h3 className="text-lg font-semibold text-stone-950 dark:text-rose-50">
                    {content.selectedSalonMapTitle}
                  </h3>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">
                    Google Maps
                  </span>
                </div>

                <iframe
                  title={`${selectedSalon.name} map`}
                  src={getGoogleMapsEmbedUrl(selectedSalon.mapQuery)}
                  className="aspect-video w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-5 rounded-3xl bg-white p-6 shadow-sm dark:bg-stone-900">
                <h3 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                  {content.openingHoursTitle}
                </h3>

                <div className="mt-5 divide-y divide-rose-100 dark:divide-stone-800">
                  {content.openingHours.map((item) => (
                    <div
                      key={item.days}
                      className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <p className="font-medium text-stone-700 dark:text-stone-200">
                        {item.days}
                      </p>

                      <p className="text-stone-500 dark:text-stone-400">
                        {item.hours}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={content.nearbyEyebrow}
            title={content.nearbyTitle}
            description={
              userPosition
                ? content.nearbyDescription
                : content.nearbyFallbackDescription
            }
          />

          <Reveal stagger className="mt-10 grid gap-5 lg:grid-cols-2">
            {nearbySalonResults.map((result) => (
              <article
                key={result.location.id}
                className="interactive-lift overflow-hidden rounded-4xl border border-rose-200 bg-white shadow-sm hover:border-rose-300 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700 dark:hover:shadow-black/30"
              >
                <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                      {result.location.region}
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold text-stone-950 dark:text-rose-50">
                      {result.location.name}
                    </h3>

                    <p className="mt-2 font-medium text-stone-700 dark:text-stone-200">
                      {result.location.city}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-stone-500 dark:text-stone-400">
                      {result.location.address}
                    </p>

                    <p className="mt-4 text-sm font-semibold text-rose-700 dark:text-rose-200">
                      {content.distanceLabel}: {formatDistance(result.distance)}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {result.location.specialties
                        .slice(0, 2)
                        .map((specialty) => (
                          <span
                            key={specialty}
                            className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200"
                          >
                            {specialty}
                          </span>
                        ))}
                    </div>

                    <a
                      href={getGoogleMapsSearchUrl(result.location.mapQuery)}
                      target="_blank"
                      rel="noreferrer"
                      className="interactive-press focus-ring mt-6 inline-flex rounded-full border border-rose-300 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:bg-rose-50 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:bg-stone-950 dark:hover:text-rose-200"
                    >
                      {content.nearbyGoogleMapsLabel}
                    </a>
                  </div>

                  <div className="min-h-70 border-t border-rose-200 dark:border-stone-800 md:border-l md:border-t-0">
                    <iframe
                      title={`${result.location.name} map`}
                      src={getGoogleMapsEmbedUrl(result.location.mapQuery)}
                      className="h-full min-h-70 w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </article>
            ))}
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 rounded-4xl border border-rose-200 bg-rose-50 p-6 text-center dark:border-stone-800 dark:bg-stone-900 md:p-8">
              <h3 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                {content.allLocationsButton}
              </h3>

              <p className="mx-auto mt-3 max-w-3xl leading-7 text-stone-600 dark:text-stone-300">
                {language === "pl"
                  ? "Pełną listę salonów, wyszukiwarkę i filtry regionów znajdziesz na osobnej podstronie lokalizacji."
                  : "The full studio list, search and region filters are available on the dedicated locations page."}
              </p>

              <a
                href="/locations"
                className="interactive-press focus-ring mt-6 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
              >
                {content.allLocationsButton}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="rounded-4xl bg-stone-950 p-6 text-white shadow-2xl shadow-rose-200/70 dark:bg-rose-100 dark:text-stone-950 dark:shadow-black/30 md:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-300 dark:text-rose-700">
                {language === "pl" ? "Rezerwacja online" : "Online booking"}
              </p>

              <h2 className="text-3xl font-semibold tracking-tight">
                {language === "pl"
                  ? "Wybierz usługę, osobę obsługującą i dostępny termin."
                  : "Choose a service, specialist and available time."}
              </h2>

              <p className="mt-5 leading-7 text-stone-300 dark:text-stone-700">
                {language === "pl"
                  ? "Formularz rezerwacji znajduje się teraz na osobnej podstronie. Dzięki temu kontakt pozostaje prosty, a cały proces umawiania wizyty ma własny, czytelny flow."
                  : "The booking form now has its own dedicated page. This keeps contact simple while the appointment flow gets a clear, focused experience."}
              </p>

              <a
                href="/booking"
                className="interactive-press focus-ring mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-rose-100 dark:bg-stone-950 dark:text-white dark:hover:bg-stone-800"
              >
                {language === "pl" ? "Przejdź do rezerwacji" : "Go to booking"}
              </a>
            </div>
          </Reveal>

          <Reveal stagger className="grid gap-5">
            <div className="rounded-4xl border border-rose-200 bg-rose-50 p-6 shadow-sm dark:border-stone-800 dark:bg-stone-950 md:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
                {content.visitEyebrow}
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-stone-950 dark:text-rose-50">
                {content.visitTitle}
              </h2>

              <p className="mt-5 leading-7 text-stone-600 dark:text-stone-300">
                {content.visitDescription}
              </p>

              <div className="mt-8 grid gap-3">
                {content.visitHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-medium text-stone-700 dark:bg-stone-900 dark:text-stone-300"
                  >
                    <span className="text-rose-600 dark:text-rose-300">✦</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        eyebrow={faq.eyebrow}
        title={faq.title}
        description={faq.description}
        items={faq.items}
      />
    </>
  );
}
