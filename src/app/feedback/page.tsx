"use client";

import { feedbackContent } from "@/content/feedbackContent";
import { siteContent } from "@/content/siteContent";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { PageIntro } from "@/components/sections/PageIntro";

export default function FeedbackPage() {
  const { language } = useSitePreferences();
  const page = siteContent[language].pages.feedback;
  const feedback = feedbackContent[language];

  return (
    <>
      <PageIntro {...page} />

      <FeedbackSection
        eyebrow={feedback.eyebrow}
        title={feedback.title}
        description={feedback.description}
        sourceLabel={feedback.sourceLabel}
        ctaTitle={feedback.ctaTitle}
        ctaDescription={feedback.ctaDescription}
        ctaButton={feedback.ctaButton}
        groups={feedback.groups}
      />
    </>
  );
}
