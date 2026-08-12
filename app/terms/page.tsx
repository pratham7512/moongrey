import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/LegalPage";
import { termsSections } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Moon Grey travel planning services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="Please read these terms carefully before booking with Moon Grey. They govern our travel planning and booking services."
      lastUpdated="August 12, 2026"
      sections={termsSections}
    />
  );
}
