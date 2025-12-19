import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import MotionEffects from "@/components/MotionEffects";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Coastal Community for Second Chances | Uday",
  description: "A coastal community for second chances—bringing hope, dignity, and opportunity through Uday, One Simple Wish, and Rescue Mission.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>
        <MotionEffects />
        {children}
      </body>
    </html>
  );
}
