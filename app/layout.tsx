import type { Metadata } from "next";
import { DM_Sans, Nunito } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Moon Grey | Tours & Travel",
    template: "%s | Moon Grey",
  },
  description:
    "Moon Grey crafts thoughtful journeys with calm planning, curated stays, and space to truly arrive.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${nunito.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
