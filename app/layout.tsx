import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import { ThemeProvider } from "./context/ThemeContext";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "./site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Victoria Ssekajja",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Uganda",
    "Kampala Uganda",
  ],
  authors: [{ name: "Victoria Ssekajja", url: SITE_URL }],
  creator: "Victoria Ssekajja",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Victoria Ssekajja",
  alternateName: "Ssekajja Victoria Mirembe",
  jobTitle: "Frontend Developer",
  url: SITE_URL,
  worksFor: {
    "@type": "Organization",
    name: "MCI Media Lab",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  sameAs: [
    "https://github.com/VictoriaMirembe",
    "https://www.linkedin.com/in/ssekajja-victoria-243216284/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>
          <Nav />
          {children}
          <SideNav />
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}