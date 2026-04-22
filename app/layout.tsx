import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
  title: "Yohance Pawania",
  description: "Personal website for Yohance Pawania.",
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
              const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
              const theme = storedTheme === "light" || storedTheme === "dark" || storedTheme === "catppuccin"
                ? storedTheme
                : (systemLight ? "light" : "dark");
              document.documentElement.dataset.theme = theme;
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
