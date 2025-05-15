import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Providers } from "@/components/providers";
import { ThemeSwitcher } from "@/components/theme-switcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "react-wheel-picker",
  description:
    "iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.",
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
          <header className="border-b">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <div className="font-semibold">react-wheel-picker</div>
              <ThemeSwitcher />
            </div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
