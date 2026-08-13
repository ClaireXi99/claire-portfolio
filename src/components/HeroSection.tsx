import { Mail, Github, AudioWaveform, Database, Brain, Bot } from "lucide-react";

const expertiseItems = [
  { icon: AudioWaveform, title: "数据合成", desc: "TTS 训练数据合成 · AI 音乐训练数据合成" },
  { icon: Database, title: "数据产品", desc: "数据 Pipeline 搭建 · 标注体系设计 · 质量管控" },
  { icon: Brain, title: "LLM", desc: "大模型能力评测 · RAG 效果验证" },
  { icon: Bot, title: "Agent", desc: "Agent 方向的 vibe coding 探索" },
];

const experiences = [
  {
    role: "数据开发工程师",
    company: "华为 2012 实验室 · 中央媒体研究院",
    period: "2024.11 – 至今",
    location: "上海",
    description:
      "负责情感 TTS 数据处理与标注体系建设，以及 AI 音乐生成模型训练数据的 Pipeline 搭建、多渠道数据拓源与质量管控。",
    tags: ["Pipeline", "TTS", "ASR", "Data"],
  },
  {
    role: "测试开发工程师",
    company: "华为 NCE 解决方案与集成验证部",
    period: "2023.06 – 2024.10",
    location: "东莞",
    description:
      "参与盘古大模型在 NCE 网络场景的落地验证，负责 RAG 链路搭建与效果评测，以及大模型能力评估体系的设计。",
    tags: ["RAG", "LLM Eval", "Prompt", "Python"],
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
          </div>

          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <p className="mt-6 text-gray-500 leading-relaxed">
              数据科学硕士，目前在做 AI 相关的数据合成工作。
              之前在英国读书期间做过一些 NLP 和深度学习的研究。
              对用 AI 做产品比较感兴趣，也在持续学习中。
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
