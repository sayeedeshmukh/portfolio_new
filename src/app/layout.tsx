import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Reenie_Beanie, Amatic_SC, Molle } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const reenie = Reenie_Beanie({ weight: "400", subsets: ["latin"], variable: "--font-reenie" });
const amatic = Amatic_SC({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-amatic" });
const molle = Molle({ weight: "400", subsets: ["latin"], variable: "--font-molle" });

export const metadata: Metadata = {
  title: "Sayee Deshmukh | Creative Developer & UI/UX Designer",
  description: "Portfolio of Sayee Deshmukh, a Creative Frontend Developer & UI/UX Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} ${reenie.variable} ${amatic.variable} ${molle.variable} font-sans bg-[#fbf9f6] text-neutral-900 antialiased selection:bg-rose-200 selection:text-rose-900`}
      >
        {children}
      </body>
    </html>
  );
}
