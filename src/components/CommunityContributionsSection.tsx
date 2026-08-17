import { ExternalLink, GitPullRequest, Star } from "lucide-react";

type Contribution = {
  project: string;
  repo: string;
  org: string;
  contribution: string;
  background: string;
  solution: string;
  pr: string;
  status: "Merged";
  stars?: string;
  reference?: string;
};

const contributions: Contribution[] = [
  {
    project: "dsh-data-insight",
    repo: "https://github.com/ClaireXi99/dsh-data-insight",
    org: "DeepSeek Harness Community · awesome-dsh-plugin",
    contribution: "Added dsh-data-insight to Tools & Capabilities",
    background:
      "DeepSeek Harness 社区缺少一个能在 Agent 会话内直接完成 CSV、TSV 和 JSON 数据分析的轻量插件。",
    solution:
      "独立开发 profile、异常检测、数据总结与聚合查询工具，并通过 PR #1273 正式收录到 awesome-dsh-plugin。",
    pr: "https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/pull/1273",
    status: "Merged",
    reference: "PR #1273",
  },
  {
    project: "LightRAG",
    repo: "https://github.com/HKUDS/LightRAG",
    stars: "38.8k",
    org: "HKU Data Science Lab",
    contribution: "Generalized EMBEDDING_DIM startup guard across all embedding bindings",
    background:
      "用户配置非默认 embedding model 时，provider decorator 的默认维度会静默应用，导致 vector-store 写入失败。",
    solution:
      "在 create_optimized_embedding_function 中对 OpenAI/Gemini/Bedrock/VoyageAI/Azure 统一校验，不匹配时 fail-fast。",
    pr: "https://github.com/HKUDS/LightRAG/pull/3646",
    status: "Merged",
  },
];

export function CommunityContributionsSection() {
  return (
    <section id="community" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-sm text-primary-500 mb-6">
          {"// community contributions"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Community Contributions
        </h2>
        <p className="text-gray-500 mb-12">
          参与开源社区，开发实用工具，也解决真实问题。
        </p>

        <div className="space-y-6">
          {contributions.map((item) => (
            <div
              key={item.pr}
              className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary-100 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {item.project}
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">{item.org}</p>
                </div>
                {item.stars ? (
                  <div className="flex items-center gap-1 text-xs text-gray-400 shrink-0">
                    <Star className="w-3.5 h-3.5" />
                    {item.stars}
                  </div>
                ) : (
                  <div className="font-mono text-xs text-gray-400 shrink-0">
                    {item.reference}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <GitPullRequest className="w-4 h-4 text-purple-500 shrink-0" />
                <span className="text-sm font-medium text-gray-700">
                  {item.contribution}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-purple-50 text-xs font-medium text-purple-600">
                  {item.status}
                </span>
              </div>

              <div className="md:ml-6 space-y-2 text-sm text-gray-500 leading-relaxed">
                <p>
                  <span className="text-gray-700 font-medium">背景：</span>
                  {item.background}
                </p>
                <p>
                  <span className="text-gray-700 font-medium">贡献：</span>
                  {item.solution}
                </p>
              </div>

              <div className="mt-4 md:ml-6">
                <a
                  href={item.pr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary-500 hover:text-primary-600 transition-colors"
                >
                  查看已合并 PR →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
