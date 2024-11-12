import Head from "next/head";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maurice Becnel",
  description: "Maurice Becnel - Front-End Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <Head>
        <link rel="icon" href="src/app/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
