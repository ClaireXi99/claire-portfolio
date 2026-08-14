import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CodeCityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/#vibe-coding"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Code City</h1>
        <p className="mt-3 text-gray-500 leading-relaxed">
          把任意 GitHub 仓库可视化为一座 3D 城市。文件变成建筑——高度代表文件大小，颜色代表编程语言。
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Three.js", "GitHub API", "Treemap", "Zero Dependencies"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/ClaireXi99/code-city"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
        >
          查看源码
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <div className="mt-12 rounded-2xl overflow-hidden border border-gray-100">
          <Image
            src="/claire-portfolio/vibe/code-city/cover.webp"
            alt="Code City 3D 可视化"
            width={2840}
            height={1348}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="mt-12">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// how it works"}</p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">数据获取</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                通过 GitHub REST API 获取仓库文件树，或使用 File System Access API 扫描本地目录。
              </p>
            </div>
            <div className="p-4 rounded-xl border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">布局算法</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Squarified Treemap 算法将目录映射为城市街区，文件映射为建筑占地面积。
              </p>
            </div>
            <div className="p-4 rounded-xl border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">3D 渲染</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Three.js 将每个文件渲染为 3D 方块：高度 = log2(文件大小)，颜色 = 编程语言，位置由 treemap 布局决定。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// features"}</p>
          <ul className="space-y-2">
            {[
              "输入 owner/repo 即可可视化任何公开仓库",
              "支持本地文件夹扫描",
              "鼠标交互：旋转、平移、缩放",
              "Hover 查看文件名、路径、大小",
              "语言统计面板",
              "纯前端，零依赖，无需后端",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-primary-400 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
