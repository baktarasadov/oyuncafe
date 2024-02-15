import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import HeaderRoot from "@/components/layoutRoot/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderRoot />
        <main style={{ minHeight: "85vh" }}>{children}</main>
      </body>
    </html>
  );
}