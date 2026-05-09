import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yohancepawania.dev"),
  title: "Yohance Pawania",
  description:
    "Yohance Pawania is a computer science student interested in embedded software, electronics, robotics, and low-level computing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yohance Pawania",
    description:
      "Computer science student building embedded software, electronics, robotics, and hardware/software projects.",
    url: "https://yohancepawania.dev",
    siteName: "Yohance Pawania",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yohance Pawania",
    description:
      "Computer science student building embedded software, electronics, robotics, and hardware/software projects.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (() => {
              const storedTheme = localStorage.getItem("site-theme");
              const theme = storedTheme === "light" || storedTheme === "dark" || storedTheme === "catppuccin"
                ? storedTheme
                : "catppuccin";
              document.documentElement.dataset.theme = theme;
            })();
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
