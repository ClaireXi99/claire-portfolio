const experiences = [
  {
    role: "AI Agent 开发与评测工程师",
    company: "华为 2012 实验室 · 中央媒体研究院",
    period: "2024.11 – 至今",
    location: "上海",
    description:
      "面向音乐生成场景开发多节点 Agentic Workflow，配置 Native Agent Skill 路由与端到端任务链路；以 Trajectory、节点级质量监控和 LLM-as-Judge 开展评测与 Badcase 归因，并建设训练数据合成、处理与质量筛选 Pipeline。",
    tags: ["Agentic Workflow", "Agent Eval", "LLM-as-Judge", "AI Data"],
  },
  {
    role: "RAG 系统开发与评测工程师",
    company: "华为 NCE 解决方案与集成验证部",
    period: "2023.06 – 2024.10",
    location: "东莞",
    description:
      "参与接入网智能助手 RAG 系统建设，覆盖领域知识库、检索链路与 Prompt 优化；设计能力回归、检索质量和抗干扰评测体系，通过 A/B 对比、CI 质量门禁与 Badcase 闭环支持技术选型和系统迭代。",
    tags: ["RAG", "Evaluation", "CI/CD", "Python"],
  },
  {
    role: "Research Assistant",
    company: "Newcastle University · Sage Lab",
    period: "2022.09 – 2023.06",
    location: "Newcastle, UK",
    description:
      "自监督睡眠质量检测系统研究。提出对比学习生理信号表征方法，成果发表于 ICBBT 2023（第一作者）。",
    tags: ["PyTorch", "Deep Learning", "Contrastive Learning"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-primary-500 mb-2">{"// experience"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Professional Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company + exp.period}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 border-4 border-white shadow-sm -translate-x-[5px] md:-translate-x-[6px] top-6" />

                <div className="hidden md:block md:w-1/2" />

                <div className="md:w-1/2 pl-10 md:pl-0">
                  <div
                    className={`p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary-100 hover:shadow-md transition-all duration-300 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-primary-500">
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-400">
                        · {exp.location}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{exp.company}</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-primary-50 text-xs font-medium text-primary-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
