import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "@/Component/ScrollProgress";
import AmbientBackground from "@/Component/AmbientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Godstime Moses | Full Stack Developer",
  description:
    "Portfolio of Godstime Moses — a full stack developer crafting fast, accessible and beautifully engineered web experiences with React, Next.js and Python.",
  keywords: [
    "Godstime Moses",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Lagos Nigeria",
  ],
  authors: [{ name: "Godstime Moses" }],
  openGraph: {
    title: "Godstime Moses | Full Stack Developer",
    description:
      "I build fast, responsive and scalable web products with clean code and thoughtful design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <AmbientBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
