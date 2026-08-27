import { Mail, Github, AudioWaveform, Database, Brain, Bot } from "lucide-react";

const expertiseItems = [
  { icon: Bot, title: "AI Agent 开发", desc: "Agentic Workflow · Native Agent Skill · MCP" },
  { icon: Brain, title: "AI 评测", desc: "Trajectory · LLM-as-Judge · Badcase 归因" },
  { icon: Database, title: "RAG 系统", desc: "知识库 · 检索链路 · Prompt · 质量门禁" },
  { icon: AudioWaveform, title: "AI 数据合成", desc: "TTS / 音乐训练数据 · Pipeline · 标注与质量治理" },
];

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
    location: "UK",
    description:
      "做睡眠质量检测方向的研究，用对比学习处理生理信号数据，成果发表于 ICBBT 2023。",
    tags: ["PyTorch", "Research"],
  },
];

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20 pb-16">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left: Name + Intro + Expertise */}
        <div className="flex flex-col justify-center md:sticky md:top-24">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              王映熹
            </h1>
            <p className="mt-1 text-lg text-gray-400 font-mono">Claire Wang</p>
            <p className="mt-5 text-sm md:text-base font-semibold text-primary-600">
              AI Agent 开发工程师 · AI 评测工程师
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <p className="mt-6 text-gray-500 leading-relaxed">
              数据科学硕士，专注 AI Agent 开发与 AI 评测，也具备 AI 数据合成与质量治理经验。
              我把 Evaluation 看作 AI 系统持续演进的控制系统，而不只是上线前的验收环节：
              通过可复现的基准、可观测的执行轨迹和可归因的 Badcase，让 Agent 与 RAG
              系统的每次优化都有反馈、有依据、可迭代，并持续参与 AI 评测与工具链的开源建设。
            </p>
          </div>

          {/* Contact */}
          <div className="opacity-0 animate-fade-in-up animation-delay-400 mt-6 flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <Mail className="w-3.5 h-3.5 text-gray-400" />
              wangyingxiclaire@163.com
            </span>
            <a
              href="https://github.com/ClaireXi99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary-500 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>

          {/* Expertise */}
          <div className="opacity-0 animate-fade-in-up animation-delay-400 mt-10">
            <p className="font-mono text-xs text-primary-500 mb-4">{"// expertise"}</p>
            <div className="space-y-3">
              {expertiseItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                    <item.icon className="w-4 h-4 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Experience */}
        <div className="relative">
          <h3 className="font-mono text-xs text-primary-500 mb-6">{"// experience"}</h3>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.company + exp.period}
                className="relative pl-5 border-l-2 border-gray-100 hover:border-primary-200 transition-colors"
              >
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-primary-400" />
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-xs text-gray-400">{exp.period}</span>
                  <span className="text-xs text-gray-300">· {exp.location}</span>
                </div>
                <h4 className="text-sm font-semibold text-gray-900">{exp.role}</h4>
                <p className="text-xs text-gray-400 mb-1.5">{exp.company}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-gray-50 text-xs text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
