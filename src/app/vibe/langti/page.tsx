import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LangtiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Back */}
        <Link
          href="/#vibe-coding"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">MBTI 旅行目的地推荐</h1>
        <p className="mt-3 text-gray-500 leading-relaxed">
          水墨风旅行人格测试 H5，五轮塔罗抽牌测出你的旅行人格，算出命定目的地。
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["Next.js", "Framer Motion", "Tailwind", "TypeScript"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="http://47.97.206.195:8080/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
        >
          立即体验
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {/* Cover Image */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-gray-100">
          <Image
            src="/claire-portfolio/vibe/langti/cover.webp"
            alt="浪TI 产品设计图"
            width={1200}
            height={800}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
