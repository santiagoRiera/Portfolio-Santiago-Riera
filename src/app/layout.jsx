import {JetBrains_Mono} from "next/font/google"
import "./globals.css";
//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  weight: ["100", "200","300","400","500","600","700","800",],
  variable: "--font-jetbrainsMono"
});

export const metadata = {
  title: {
    default: "Santiago Riera | Software Developer",
    template: "%s | Santiago Riera"
  },
  description: "Full-stack developer specializing in JavaScript, React, and Next.js. Building scalable and efficient solutions.",
  icons: {
    icon: [
      { url: '/icon.ico', sizes: 'any' },
      { url: '/icon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
  },
  keywords: ["Software Developer", "Full-stack", "JavaScript", "React", "Next.js", "Tailwind", "Santiago Riera"],
  authors: [{ name: "Santiago Riera" }],
  creator: "Santiago Riera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-santiago-riera.vercel.app/",
    site_name: "Santiago Riera Portfolio",
    title: "Santiago Riera | Software Developer",
    description: "Full-stack developer specializing in JavaScript, React, and Next.js. Building scalable and efficient solutions.",
    images: [
      {
        url: "https://www.yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Santiago Riera - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Riera | Software Developer",
    description: "Full-stack developer specializing in JavaScript, React, and Next.js. Building scalable and efficient solutions.",
    images: ["https://www.yourportfolio.com/twitter-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
