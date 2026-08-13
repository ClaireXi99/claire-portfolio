import { Sparkles, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SemEval-2024 数值标题生成",
    category: "竞赛",
    description:
      "用 CoT + SFT 的方式微调 Mistral-7B，做数值推理的标题生成任务。最终拿了第二名，论文被收录。",
    tags: ["PyTorch", "DeepSpeed", "vLLM"],
    highlight: true,
    link: "https://github.com/GavinZhao19/SemEval24-NumAnalysis-CN",
  },
  {
    title: "盘古大模型 RAG 验证",
    category: "工作项目",
    description:
      "搭建了 50 万 token 的领域语料库，设计评测方案验证 RAG 效果。",
    tags: ["RAG", "Prompt", "Python"],
    highlight: false,
  },
  {
    title: "AI 音乐训练数据平台",
    category: "工作项目",
    description:
      "搭建数据处理 Pipeline，用 Agent 方式编排不同的处理模块，产出模型训练用的音频数据。",
    tags: ["Agent", "Pipeline", "Audio"],
    highlight: false,
  },
  {
    title: "睡眠质量检测研究",
    category: "学术",
    description:
      "用对比学习做生理信号的表征学习，融合多模态数据。第一作者发表于 ICBBT 2023。",
    tags: ["PyTorch", "Multi-modal"],
    highlight: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-primary-500 mb-2">{"// work"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Work
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            工作和学习中做过的一些项目。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                project.highlight
                  ? "bg-gradient-to-br from-primary-50/50 to-white border-primary-100 hover:border-primary-200 hover:shadow-primary-500/10"
                  : "bg-white border-gray-100 hover:border-primary-100 hover:shadow-primary-500/5"
              }`}
            >
              {project.highlight && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-medium text-primary-600">
                  <Sparkles className="w-3.5 h-3.5" />
                  2nd Place
                </div>
              )}
              <p className="font-mono text-xs text-primary-500 mb-2">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-500 transition-colors"
                    title="GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
