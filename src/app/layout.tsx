import type { Metadata } from "next";
import { Inter } from "next/font/google";

//css
import "./globals.css";
import "./loading.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Net",
  description: "Social Net",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
