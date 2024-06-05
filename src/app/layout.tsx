import type { Metadata } from "next";

//css
import "./globals.css";
import "./loading.css"

//fonts
import { poppins } from "./fonts/font";

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
    <html lang="en" className="scrollbar-none md:scrollbar-thin md:scrollbar-track-white md:scrollbar-thumb-slate-900" >
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
