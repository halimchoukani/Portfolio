import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Clarity from "./components/Clarity";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://halimchoukani.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Halim Choukani — Software Engineer & Full-Stack Developer",
    template: "%s | Halim Choukani",
  },
  description:
    "Portfolio of Halim Choukani, Software Engineer & Full-Stack Developer specializing in React, Next.js, Spring Boot, and scalable web architectures.",
  applicationName: "Halim Choukani Portfolio",
  authors: [{ name: "Halim Choukani", url: "https://github.com/halimchoukani" }],
  generator: "Next.js",
  keywords: [
    "Halim Choukani",
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Spring Boot Developer",
    "TypeScript",
    "Web Developer Portfolio",
    "Tunisia Software Engineer",
    "Remote Software Engineer",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Halim Choukani",
  publisher: "Halim Choukani",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Halim Choukani — Portfolio",
    title: "Halim Choukani — Software Engineer & Full-Stack Developer",
    description:
      "Explore the projects, technical skills, and experience of Halim Choukani — Software Engineer & Full-Stack Developer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halim Choukani — Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Halim Choukani, Software Engineer & Full-Stack Developer specializing in React, Next.js, and Spring Boot.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Halim Choukani",
      jobTitle: "Software Engineer & Full-Stack Developer",
      description:
        "Software Engineer with hands-on experience in full-stack web development, building robust backend APIs and modern reactive frontends.",
      url: siteUrl,
      sameAs: [
        "https://github.com/halimchoukani",
        "https://www.linkedin.com/in/halim-choukani-921488257/",
      ],
      email: "mailto:halim.choukani@gmail.com",
      telephone: "+21656123197",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Tunisia",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Institut Supérieur d'Études Technologiques de Radès (ISET Radès)",
      },
      knowsAbout: [
        "Full-Stack Web Development",
        "React.js",
        "Next.js",
        "Spring Boot",
        "TypeScript",
        "JavaScript",
        "Docker",
        "REST APIs",
        "WebSockets",
        "MongoDB",
        "MySQL",
        "Oracle DB",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Halim Choukani — Software Engineer Portfolio",
      description: "Portfolio and selected work of Software Engineer Halim Choukani.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Halim Choukani — Software Engineer",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${syne.variable} ${spaceMono.variable} antialiased font-sans bg-bg text-text-main`}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <Clarity />
      </body>
      <GoogleAnalytics gaId="G-VJ7WB9D6YH" />
      <GoogleTagManager gtmId="GTM-PRGLGTZ2" />
    </html>
  );
}
