import type { ReactNode } from "react";
import { SitePreferencesProvider } from "@/components/providers/SitePreferencesProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SitePreferencesProvider>
      <div className="min-h-screen bg-rose-50 text-stone-950 transition-colors duration-300 dark:bg-stone-950 dark:text-rose-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </SitePreferencesProvider>
  );
}
