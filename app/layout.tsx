import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const myFont = localFont({
  variable: "--font-heading",
  src: './Akira Expanded.otf',
})


const mainFont = Outfit({
  variable: "--font-main",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesiFest",
  description: "Sankofa Canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.variable} ${mainFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
