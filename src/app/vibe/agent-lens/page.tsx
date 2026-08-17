import { ArrowLeft, ExternalLink, Play, Eye, Zap, Shield, Search, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AgentLensPage() {
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

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AgentLens</h1>
        <p className="mt-3 text-gray-500 leading-relaxed">
          AI Agent 执行轨迹回放可视化器——将 Claude Code、Codex、OpenCode、DeepSeek Harness、LangChain
          等主流 AI Agent 的原始 trace 文件，渲染为可交互的动画时间线。一个零依赖的单 HTML 文件，拖入即用。
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Zero Dependencies", "Single HTML", "5 Frameworks", "Animated Replay", "Privacy-first"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://clairexi99.github.io/AgentLens/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
          >
            在线体验
            <Play className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/ClaireXi99/AgentLens"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-primary-300 hover:text-primary-600 transition-colors"
          >
            查看源码
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden border border-gray-100">
          <Image
            src="/claire-portfolio/vibe/agent-lens/cover.webp"
            alt="AgentLens 界面截图"
            width={2840}
            height={1597}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Why */}
        <div className="mt-16">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// why"}</p>
          <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/50">
            <p className="text-sm text-gray-600 leading-relaxed">
              2026 年，AI Agent（Claude Code、Codex、Devin 等）已成为开发者日常工具。但 Agent
              的执行过程是黑盒——一个会话可能包含几十次工具调用、数十万 token 消耗。
              <strong> AgentLens 让这个过程变得可见、可回放、可分享</strong>，
              帮助开发者理解 Agent 的决策链路、优化 prompt 策略、定位错误根因。
            </p>
          </div>
        </div>

        {/* Supported Frameworks */}
        <div className="mt-12">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// supported frameworks"}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: "Claude Code", desc: "JSONL 会话记录" },
              { name: "OpenAI Codex", desc: "JSONL 归档会话" },
              { name: "OpenCode", desc: "JSONL 会话" },
              { name: "DeepSeek Harness", desc: "JSON/JSONL 导出" },
              { name: "LangChain", desc: "JSON trace 导出" },
              { name: "自定义格式", desc: "events 数组 JSON" },
            ].map((fw) => (
              <div key={fw.name} className="p-3 rounded-xl border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900">{fw.name}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{fw.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mt-12">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// how it works"}</p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">格式自动识别</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                读取文件首行内容，通过特征匹配自动判断来源框架（JSONL 首行结构 / JSON 顶层字段），
                无需用户手动选择。
              </p>
            </div>
            <div className="p-4 rounded-xl border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">统一事件模型</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                所有框架的 trace 被标准化为 AgentEvent 格式：id、timestamp、type（user / thinking / text / tool_call / tool_result / error）、content、meta。
                这让同一套渲染引擎能处理任意来源的数据。
              </p>
            </div>
            <div className="p-4 rounded-xl border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">动画回放引擎</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                基于 requestAnimationFrame 的虚拟时间轴，支持播放/暂停/单步/变速（0.5x–10x）。
                事件卡片按真实时间间隔依次出现，完整还原 Agent 执行节奏。
              </p>
            </div>
            <div className="p-4 rounded-xl border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">实时统计面板</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Canvas 2D 绘制 token 用量折线图，实时计算累计消耗、成本估算、工具调用频率。
                回放到任意位置都能看到当前进度的统计快照。
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// features"}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Play, title: "动画回放", desc: "播放/暂停/单步/变速，像看视频一样回顾 Agent 执行" },
              { icon: Eye, title: "事件类型高亮", desc: "6 种颜色编码：用户、思考、回复、工具调用、结果、错误" },
              { icon: Search, title: "搜索与过滤", desc: "按类型过滤事件，按关键词或工具名搜索定位" },
              { icon: Zap, title: "Token 统计", desc: "实时 token 图表、成本估算、工具使用频率分析" },
              { icon: Moon, title: "深色/浅色主题", desc: "Tokyo Night 灵感设计，跟随系统偏好或手动切换" },
              { icon: Shield, title: "隐私优先", desc: "纯浏览器运行，零网络请求，数据不离开本地" },
            ].map((f) => (
              <div key={f.title} className="flex gap-3 p-4 rounded-xl border border-gray-100">
                <f.icon className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{f.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech */}
        <div className="mt-12">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// tech highlights"}</p>
          <ul className="space-y-2">
            {[
              "单文件架构：index.html 即是全部，无 npm / CDN / 构建步骤",
              "CSS Custom Properties 驱动主题系统，一键切换深色/浅色",
              "Canvas 2D API 绘制实时图表，无图表库依赖",
              "拖拽上传 + File Reader API，支持 JSONL 流式解析",
              "导出为独立 HTML，可直接分享给团队成员查看",
              "44 个自动化测试覆盖所有解析器和边界情况",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-primary-400 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Start */}
        <div className="mt-12">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// quick start"}</p>
          <div className="p-5 rounded-xl bg-gray-900 text-gray-100 font-mono text-sm space-y-2">
            <p className="text-gray-400"># 方式一：直接打开</p>
            <p>open index.html</p>
            <p className="text-gray-400 mt-4"># 方式二：在线访问</p>
            <p>https://clairexi99.github.io/AgentLens/</p>
            <p className="text-gray-400 mt-4"># 然后拖入你的 trace 文件即可</p>
          </div>
        </div>
      </div>
    </div>
  );
}
