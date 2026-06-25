"use client";

import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { PageIntro } from "@/components/sections/PageIntro";

export default function ServicesPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.services;

  return <PageIntro {...page} />;
}
