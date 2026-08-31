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
    project: "inspect_ai",
    repo: "https://github.com/UKGovernmentBEIS/inspect_ai",
    stars: "2.7k",
    org: "UK Government BEIS",
    contribution: "Fix value_to_float silently passing through numeric custom sentinels",
    background:
      "value_to_float() 的 correct/incorrect/partial 参数按 docstring 允许数值型自定义值，但数值转换分支排在哨兵相等检查之前，数值哨兵被原样透传而非映射到 1/0.5/0：静默无警告，accuracy 可超 1、partial 记满分甚至出现负分，下游 accuracy()/mean()/pass@k 全部被污染。",
    solution:
      "将哨兵相等检查移到数值转换之前（字符串路径不变，纯分支重排）；逐值验证默认行为不变、NaN/±inf 透传保留、非哨兵数值仍透传；新增数值哨兵映射与非常数透传两组回归测试，tests/scorer/ 519 通过。",
    pr: "https://github.com/UKGovernmentBEIS/inspect_ai/pull/4928",
    status: "Merged",
  },
  {
    project: "lmms-eval",
    repo: "https://github.com/EvolvingLMMs-Lab/lmms-eval",
    stars: "4.4k",
    org: "EvolvingLMMs-Lab",
    contribution: "Fix MMMU open-ended scoring that iterated per character",
    background:
      "mmmu_process_results 把 parse_open_response 返回的候选列表塌缩成单个字符串，导致 eval_open 逐字符而非逐候选比对；开放题正确答案被判错，MMMU 开放题分数系统性偏低。",
    solution:
      "在 mmmu_acc 路径保留完整候选列表以对齐官方 MMMU 评测契约，另拆出 to_submission_answer() 供仍需单值的提交文件使用；补充单测钉住候选列表、提交格式与选择题回归。修复前后实测：数值题与字符串题准确率 0.0 → 1.0，错答控制组保持 0.0。",
    pr: "https://github.com/EvolvingLMMs-Lab/lmms-eval/pull/1471",
    status: "Merged",
  },
  {
    project: "Archify",
    repo: "https://github.com/tt-a1i/archify",
    stars: "14.8k",
    org: "tt-a1i",
    contribution: "Added RAG pipeline architecture example",
    background:
      "Archify 官方示例只覆盖 Web 应用、部署拓扑与电商场景，缺少 AI/ML 架构模式示例，而 RAG 正是其目标用户最常见的生产级 AI 架构。",
    solution:
      "编写 12 组件 / 13 连接的 RAG pipeline 架构 IR（查询链路、文档摄取、安全护栏、语义缓存），通过 showcase 级 9/9 校验、5 视口双主题 visual-check、全量测试 657/657；CI 被首次贡献者门禁阻塞，在 fork 中等效干跑 9/9 全绿。+13837 行。",
    pr: "https://github.com/tt-a1i/archify/pull/67",
    status: "Merged",
  },
  {
    project: "EvalScope",
    repo: "https://github.com/modelscope/evalscope",
    stars: "3.3k",
    org: "ModelScope · Alibaba Group",
    contribution: "Added olmOCR-Bench document transcription benchmark",
    background:
      "EvalScope 缺少文档转录类 VLM 基准；olmOCR-Bench 需要 PDF 渲染 + 按官方规则细粒度评分，没有现成适配器。",
    solution:
      "实现完整适配器：pypdfium2 渲染、五类评分规则 1:1 移植、按 (pdf, page) 分组去重转录、35 个单元测试全覆盖。+2226 行代码。",
    pr: "https://github.com/modelscope/evalscope/pull/1598",
    status: "Merged",
  },
  {
    project: "TruLens",
    repo: "https://github.com/truera/trulens",
    stars: "3.5k",
    org: "TruEra (Snowflake)",
    contribution: "Fix ndcg_at_k shape crash and cohens_kappa label mutation",
    background:
      "ndcg_at_k 在 golden set 标注数少于 retriever 返回数时因 shape 不匹配 crash；cohens_kappa 直接修改传入 label 列表导致副作用。",
    solution:
      "用零值填充 y_true 对齐 y_score 长度解决 ndcg 维度问题；cohens_kappa 内部改用副本避免 mutation。PR #2709 Merged。",
    pr: "https://github.com/truera/trulens/pull/2709",
    status: "Merged",
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
];

export function CommunityContributionsSection() {
  return (
    <section id="community" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-primary-500 mb-6">
          {"// community contributions"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Community Contributions
        </h2>
        <p className="text-gray-500 mb-12">
          活跃于 AI 评估与工具链开源社区，贡献新基准与官方示例、修复核心缺陷、开发实用工具。
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {contributions.map((item) => (
            <div
              key={item.pr}
              className="h-full p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
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

              <div className="space-y-2 text-sm text-gray-500 leading-relaxed">
                <p>
                  <span className="text-gray-700 font-medium">背景：</span>
                  {item.background}
                </p>
                <p>
                  <span className="text-gray-700 font-medium">贡献：</span>
                  {item.solution}
                </p>
              </div>

              <div className="mt-auto pt-5">
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
