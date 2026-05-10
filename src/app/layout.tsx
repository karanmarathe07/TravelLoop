import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Traveloop | Journey Beyond Boundaries",
  description: "Discover hidden gems and plan your next adventure with Traveloop. Your ultimate travel companion for seamless experiences.",
  keywords: ["travel", "adventure", "booking", "explore", "destinations"],
  authors: [{ name: "Traveloop Team" }],
  openGraph: {
    title: "Traveloop | Journey Beyond Boundaries",
    description: "Discover hidden gems and plan your next adventure with Traveloop.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
