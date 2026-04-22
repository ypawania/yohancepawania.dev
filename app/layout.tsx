import type { Metadata } from "next";
import localFont from "next/font/local";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const storedTheme = localStorage.getItem("site-theme");
                const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
                const theme = storedTheme === "light" || storedTheme === "dark" || storedTheme === "catppuccin"
                  ? storedTheme
                  : (systemLight ? "light" : "dark");
                document.documentElement.dataset.theme = theme;
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
