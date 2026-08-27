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
  title: "王映熹 | AI Agent 开发与 AI 评测工程师",
  description:
    "AI Agent 开发与 AI 评测工程师，专注 Agentic Workflow、Agent Evaluation、RAG、AI 数据合成与评测驱动的系统迭代。",
  keywords: [
    "AI Agent",
    "AI Agent Developer",
    "AI Evaluation",
    "Agent Evaluation",
    "LLM Evaluation",
    "Trajectory Evaluation",
    "LLM",
    "RAG",
    "AI 数据合成",
    "EvalScope",
    "Python",
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
