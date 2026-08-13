import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "MBTI 旅行目的地推荐",
    description: "水墨风旅行人格测试 H5，五轮塔罗抽牌算出你的命定目的地。",
    cover: "/vibe/langti/cover.webp",
    slug: "/vibe/langti",
    tags: ["Next.js", "Framer Motion", "H5"],
  },
  {
    title: "AI 小说创作系统",
    description: "面向长篇创作的 Skill，配合 Agent 实现百万字不崩人设。",
    cover: "/vibe/novel-writer/cover.webp",
    slug: "/vibe/novel-writer",
    tags: ["Claude Code", "Skill", "Agent"],
  },
];

export function VibeCodingSection() {
  return (
    <section id="vibe-coding" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-primary-500 mb-2">{"// vibe coding"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Vibe Coding Projects
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            用 AI 辅助开发的一些小作品。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={project.slug}
              className="group block rounded-2xl border border-gray-100 overflow-hidden hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-50">
                <Image
                  src={project.cover}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-primary-400 transition-colors" />
                </div>
                <p className="text-sm text-gray-500 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-gray-50 text-xs text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
