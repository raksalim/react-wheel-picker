import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogImageUrl = "/og-image.png?v=250516";

export const metadata: Metadata = {
  title: "React Wheel Picker",
  description:
    "iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.",
  keywords: ["react", "wheel picker", "wheel", "picker"],
  authors: [
    {
      name: "ncdai",
      url: "https://chanhdai.com",
    },
  ],
  creator: "ncdai",
  openGraph: {
    siteName: "React Wheel Picker",
    url: "/",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "React Wheel Picker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@iamncdai", // Twitter username
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
