"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionHeader } from "@/components/sections/SectionHeader";
import {
  locationsContent,
  type StudioLocation,
} from "@/content/locationsContent";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

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
  )}&t=&z=12&ie=UTF8&iwloc=&output=embed`;
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

function getNearestLocation(
  locations: StudioLocation[],
  userPosition: UserPosition,
) {
  return locations.reduce<{
    location: StudioLocation;
    distance: number;
  } | null>((nearest, location) => {
    const distance = getDistanceInKm(userPosition, {
      lat: location.lat,
      lng: location.lng,
    });

    if (!nearest || distance < nearest.distance) {
      return {
        location,
        distance,
      };
    }

    return nearest;
  }, null);
}

export default function LocationsPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.locations;
  const content = locationsContent[language];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [userPosition, setUserPosition] = useState<UserPosition | null>(null);
  const [locationStatus, setLocationStatus] = useState<LocationStatus>("idle");

  const mainLocation =
    content.locations.find((location) => location.isMain) ??
    content.locations[0];

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

  const nearestResult = useMemo(() => {
    if (!userPosition) {
      return null;
    }

    return getNearestLocation(content.locations, userPosition);
  }, [content.locations, userPosition]);

  const displayedLocation = nearestResult?.location ?? mainLocation;
  const displayedDistance = nearestResult?.distance ?? null;

  const regions = useMemo(() => {
    const uniqueRegions = Array.from(
      new Set(content.locations.map((location) => location.region)),
    );

    return uniqueRegions.sort((firstRegion, secondRegion) =>
      firstRegion.localeCompare(secondRegion),
    );
  }, [content.locations]);

  const filteredLocations = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return content.locations.filter((location) => {
      const matchesRegion =
        selectedRegion === "all" || location.region === selectedRegion;

      const searchableValue = [
        location.name,
        location.city,
        location.country,
        location.region,
        location.address,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedQuery.length === 0 ||
        searchableValue.includes(normalizedQuery);

      return matchesRegion && matchesSearch;
    });
  }, [content.locations, searchQuery, selectedRegion]);

  const statusMessage = useMemo(() => {
    if (locationStatus === "loading") {
      return content.permissionLoading;
    }

    if (locationStatus === "granted") {
      return content.permissionGranted;
    }

    if (locationStatus === "denied") {
      return content.permissionDenied;
    }

    if (locationStatus === "unavailable") {
      return content.permissionUnavailable;
    }

    return content.nearestDescription;
  }, [
    content.nearestDescription,
    content.permissionDenied,
    content.permissionGranted,
    content.permissionLoading,
    content.permissionUnavailable,
    locationStatus,
  ]);

  return (
    <>
      <PageIntro {...page} />

      <section className="border-y border-rose-200/70 bg-white/60 px-5 py-20 dark:border-stone-800 dark:bg-stone-900/40">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={content.nearestEyebrow}
              title={
                userPosition ? content.nearestTitle : content.fallbackTitle
              }
              description={statusMessage}
            />

            <Reveal delay={120}>
              <div className="mt-10 rounded-4xl border border-rose-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                  {displayedLocation.eyebrow}
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 dark:text-rose-50">
                  {displayedLocation.name}
                </h2>

                <p className="mt-3 text-lg font-medium text-stone-700 dark:text-stone-200">
                  {displayedLocation.city}
                </p>

                <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
                  {displayedLocation.description}
                </p>

                <p className="mt-4 text-sm leading-6 text-stone-500 dark:text-stone-400">
                  {displayedLocation.address}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {displayedLocation.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {displayedDistance !== null && (
                  <div className="mt-6 rounded-3xl bg-rose-50 p-5 dark:bg-stone-950">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                      {content.distanceLabel}
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-stone-950 dark:text-rose-50">
                      {formatDistance(displayedDistance)}
                    </p>
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={requestUserLocation}
                    className="interactive-press focus-ring rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 dark:bg-rose-100 dark:text-stone-950 dark:hover:bg-rose-200"
                  >
                    {content.useMyLocationLabel}
                  </button>

                  <a
                    href={getGoogleMapsSearchUrl(displayedLocation.mapQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-press focus-ring rounded-full border border-rose-300 px-6 py-3 text-center text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:bg-rose-50 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:bg-stone-950 dark:hover:text-rose-200"
                  >
                    {content.googleMapsLabel}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale-in" delay={140}>
            <div className="overflow-hidden rounded-4xl border border-rose-200 bg-white shadow-2xl shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:shadow-black/30">
              <iframe
                title={`${displayedLocation.name} map`}
                src={getGoogleMapsEmbedUrl(displayedLocation.mapQuery)}
                className="aspect-4/5 w-full border-0 md:aspect-video lg:aspect-4/5"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={content.allLocationsEyebrow}
            title={content.allLocationsTitle}
            description={content.allLocationsDescription}
          />

          <Reveal delay={120}>
            <div className="mt-10 rounded-4xl border border-rose-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-6">
              <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder={content.searchPlaceholder}
                  className="w-full rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-stone-950 outline-none transition focus-ring focus:border-rose-500 focus:ring-4 focus:ring-rose-200/60 dark:border-stone-700 dark:bg-stone-950 dark:text-rose-50 dark:focus:ring-rose-950"
                />

                <p className="rounded-full bg-rose-50 px-5 py-3 text-center text-sm font-semibold text-stone-700 dark:bg-stone-950 dark:text-stone-300">
                  {filteredLocations.length} / {content.locations.length}{" "}
                  {content.locationsCountLabel}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedRegion("all")}
                  className={`interactive-press focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedRegion === "all"
                      ? "bg-stone-950 text-white dark:bg-rose-100 dark:text-stone-950"
                      : "border border-rose-200 bg-rose-50 text-stone-700 hover:border-rose-400 hover:text-rose-700 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-300 dark:hover:border-rose-300 dark:hover:text-rose-200"
                  }`}
                >
                  {content.allRegionsLabel}
                </button>

                {regions.map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setSelectedRegion(region)}
                    className={`interactive-press focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selectedRegion === region
                        ? "bg-stone-950 text-white dark:bg-rose-100 dark:text-stone-950"
                        : "border border-rose-200 bg-rose-50 text-stone-700 hover:border-rose-400 hover:text-rose-700 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-300 dark:hover:border-rose-300 dark:hover:text-rose-200"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {filteredLocations.length > 0 ? (
            <Reveal
              key={`${selectedRegion}-${searchQuery}`}
              stagger
              className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
              staggerDelay={24}
            >
              {filteredLocations.map((location) => (
                <article
                  key={location.id}
                  className="interactive-lift rounded-4xl border border-rose-200 bg-white p-6 shadow-sm hover:border-rose-300 hover:shadow-xl hover:shadow-rose-200/60 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700 dark:hover:shadow-black/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
                        {location.region}
                      </p>

                      <h3 className="mt-4 text-xl font-semibold text-stone-950 dark:text-rose-50">
                        {location.name}
                      </h3>
                    </div>

                    {location.isMain && (
                      <span className="rounded-full bg-stone-950 px-3 py-1 text-xs font-semibold text-white dark:bg-rose-100 dark:text-stone-950">
                        HQ
                      </span>
                    )}
                  </div>

                  <p className="mt-3 font-medium text-stone-700 dark:text-stone-200">
                    {location.city}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">
                    {location.address}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {location.specialties.slice(0, 2).map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-200"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <a
                    href={getGoogleMapsSearchUrl(location.mapQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-press focus-ring mt-6 inline-flex rounded-full border border-rose-300 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-rose-500 hover:bg-rose-50 hover:text-rose-700 dark:border-stone-700 dark:text-rose-50 dark:hover:border-rose-300 dark:hover:bg-stone-950 dark:hover:text-rose-200"
                  >
                    {content.googleMapsLabel}
                  </a>
                </article>
              ))}
            </Reveal>
          ) : (
            <Reveal>
              <div className="mt-8 rounded-4xl border border-rose-200 bg-white p-8 text-center shadow-sm dark:border-stone-800 dark:bg-stone-900">
                <h3 className="text-2xl font-semibold text-stone-950 dark:text-rose-50">
                  {content.noResultsTitle}
                </h3>

                <p className="mx-auto mt-3 max-w-xl leading-7 text-stone-600 dark:text-stone-300">
                  {content.noResultsDescription}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
