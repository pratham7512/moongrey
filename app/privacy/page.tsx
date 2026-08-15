import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/LegalPage";
import { privacySections } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How moongrey collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Your privacy matters to us. This policy explains how we handle your personal information when you use our website and travel services."
      lastUpdated="August 12, 2026"
      sections={privacySections}
    />
  );
}
