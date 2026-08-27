import { AudioWaveform, Bot, Brain, Database } from "lucide-react";

const expertiseItems = [
  {
    icon: Bot,
    title: "AI Agent 开发",
    description:
      "开发多节点 Agentic Workflow，配置 Native Agent Skill 路由与端到端任务链路，并探索 MCP 等 Agent 工具协议。",
  },
  {
    icon: Brain,
    title: "AI 评测",
    description:
      "通过 Trajectory、LLM-as-Judge、质量门禁与 Badcase 归因建立反馈闭环，以评测驱动系统持续迭代。",
  },
  {
    icon: Database,
    title: "RAG 系统",
    description:
      "覆盖领域知识库、检索链路、Prompt 优化与鲁棒性评测，用可复现的基准支持技术选型和版本演进。",
  },
  {
    icon: AudioWaveform,
    title: "AI 数据合成",
    description:
      "具备 TTS 与 AI 音乐训练数据合成经验，建设数据处理、标注、质量筛选与治理 Pipeline。",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-primary-500 mb-2">{"// expertise"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What I Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                <item.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
