import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Girraj Mishtan Bhandar — Premium Indian Sweets from Govardhan",
  description:
    "Handcrafted premium Indian sweets from the sacred land of Govardhan, Mathura. Three generations of sweet perfection — Kaju Katli, Mathura Peda, Motichoor Ladoo, luxury gift boxes & festive collections.",
  keywords: [
    "premium Indian sweets",
    "Govardhan sweets",
    "Mathura Peda",
    "Kaju Katli",
    "Indian gift boxes",
    "wedding sweets",
    "Diwali sweets",
    "Janmashtami sweets",
    "corporate gifting India",
    "Sri Girraj Mishtan Bhandar",
  ],
  openGraph: {
    title: "Sri Girraj Mishtan Bhandar — Premium Sweets from Govardhan",
    description:
      "From the sacred land of Govardhan — handcrafted luxury Indian sweets for celebrations, weddings, and corporate gifting.",
    type: "website",
    locale: "en_IN",
    siteName: "Sri Girraj Mishtan Bhandar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Girraj Mishtan Bhandar — Govardhan",
    description: "Handcrafted luxury Indian sweets from the land of Lord Krishna.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
