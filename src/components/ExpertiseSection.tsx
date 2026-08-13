import { Brain, BarChart3, Workflow } from "lucide-react";

const expertiseItems = [
  {
    icon: Brain,
    title: "AI / LLM",
    description:
      "接触过 RAG、Prompt Engineering、SFT 微调等方向。参加过 SemEval-2024 竞赛（第二名），有一些大模型应用的实践经验。",
  },
  {
    icon: Workflow,
    title: "数据产品",
    description:
      "做过数据处理 Pipeline、标注体系设计、数据质量评估等工作。习惯从数据角度思考产品问题。",
  },
  {
    icon: BarChart3,
    title: "数据科学",
    description:
      "硕士方向是数据科学，做过多模态数据融合、信号处理相关的研究。熟悉 Python 数据分析工具链。",
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

        <div className="grid md:grid-cols-3 gap-6">
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
