import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // make sure you have a globals.css file for Tailwind setup

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Event Registration System",
  description: "Register for upcoming events and workshops",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-50 text-gray-900"}>
        {children}
      </body>
    </html>
  );
}
