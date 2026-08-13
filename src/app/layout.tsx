import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "王映熹 | AI Product & Data Science",
  description:
    "AI Product Manager & Data Scientist. 3 years at Huawei, Newcastle University MSc (Distinction). Building intelligent products with LLMs, RAG, and data-driven decision making.",
  keywords: [
    "AI Product Manager",
    "Data Science",
    "LLM",
    "RAG",
    "Huawei",
    "Portfolio",
    "王映熹",
  ],
  authors: [{ name: "王映熹 (Yingxi Wang)" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
