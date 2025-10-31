import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Shaik Sameer Basha | AI Engineer & Full-Stack Developer",
  description: "Portfolio of Shaik Sameer Basha - AI Engineer, Full-Stack Developer, and Machine Learning enthusiast. Specializing in building intelligent systems and modern web applications.",
  keywords: ["AI Engineer", "Full-Stack Developer", "Machine Learning", "Web Development", "Python", "React", "Next.js", "Data Science"],
  authors: [{ name: "Shaik Sameer Basha" }],
  creator: "Shaik Sameer Basha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameerbasha.dev",
    title: "Shaik Sameer Basha | AI Engineer & Full-Stack Developer",
    description: "Portfolio of Shaik Sameer Basha - AI Engineer, Full-Stack Developer, and Machine Learning enthusiast.",
    siteName: "Shaik Sameer Basha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaik Sameer Basha | AI Engineer & Full-Stack Developer",
    description: "Portfolio of Shaik Sameer Basha - AI Engineer, Full-Stack Developer, and Machine Learning enthusiast.",
    creator: "@sameerbasha",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-dark-950 text-gray-100`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

