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

export const metadata: Metadata = {
  title: "Halim Choukani — Software Engineer",
  description:
    "Portfolio of Halim Choukani, Software Engineer based in Tunisia.",
  keywords: [
    "Halim Choukani",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "backend developer",
    "Frontend Developer",
    "jobs",
    "Next.js",
    "React",
    "TypeScript",
    "Tunisia",
    "Portfolio",
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION, // only needed for the meta tag method
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
