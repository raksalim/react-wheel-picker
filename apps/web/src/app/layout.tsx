import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";

const ogImageUrl = "/og-image.png?v=250516";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s | ${SITE_INFO.name}`,
    default: SITE_INFO.name,
  },
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
    siteName: SITE_INFO.name,
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
      <head>
        {/* Thanks @shadcn-ui */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
              }
            } catch (_) {}
          `,
          }}
        />
      </head>

      <body
        className={`${GeistSans.variable} ${GeistMono.variable} container mx-auto`}
      >
        <div className="min-h-screen border-dashed sm:border-x">
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
