"use client";

import { ArrowLeft, BookOpen, Users, Shield, BarChart3, ChevronDown, ChevronRight, Database, Cpu, GitBranch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    icon: Users,
    title: "角色管理",
    desc: "每个角色有独立卡片，记录外貌、性格、关系网，写作时自动引用保持一致。",
  },
  {
    icon: BookOpen,
    title: "章节关系追踪",
    desc: "伏笔埋设与回收、时间线校验、剧情因果链，跨章节不遗漏。",
  },
  {
    icon: Shield,
    title: "一致性校验",
    desc: "每章写完自动审查：人设矛盾、时间冲突、称谓错误，写百万字也不崩。",
  },
  {
    icon: BarChart3,
    title: "创作看板",
    desc: "实时进度、字数统计、审查状态一目了然，像游戏成就系统一样推进创作。",
  },
];

const techDetails = [
  {
    icon: Database,
    title: "Story Runtime 状态机",
    points: [
      "SQLite 持久化：角色卡、事件链、伏笔表、章节摘要存入结构化数据库",
      "每次写作前自动加载相关上下文（当前章涉及的角色、未回收伏笔、时间线位置）",
      "写完后自动提交 commit：提取新事实、更新角色状态、标记伏笔进展",
    ],
  },
  {
    icon: GitBranch,
    title: "多 Agent 编排",
    points: [
      "Context Agent：写前调研，生成写作任务书（含必须遵守的设定约束）",
      "Writer Agent：根据任务书执行写作，严格遵循角色卡和时间线",
      "Reviewer Agent：独立审查一致性，输出结构化问题清单（人设/时间/逻辑/称谓）",
      "Data Agent：从正文提取事实，生成 commit artifacts 更新数据库",
    ],
  },
  {
    icon: Cpu,
    title: "一致性保障机制",
    points: [
      "向量检索：每章写作时检索相关历史段落，避免矛盾",
      "硬规则校验：称谓表、时间线自动比对，冲突即阻断",
      "摘要链：每章生成 summary，后续章节通过摘要链获取全局视野",
      "分层记忆：短期（当前卷细节）+ 长期（跨卷设定）+ 永久（世界观硬约束）",
    ],
  },
];

const chapters = [
  "陌生的身体与意外的清晨", "早餐与抉择", "空降总监", "装聋作哑的学问", "狼来了",
  "女尊世界的真相", "暗流", "棋局", "来自过去的信", "暗中结盟",
  "暗查", "破冰前奏", "职场刁难", "没人欺负他", "两线作战",
  "深夜来谈", "价格战", "转机", "关系牌", "看见她",
  "人事暗战", "玲珑阁（上）", "玲珑阁（下）", "线索", "还衣服",
  "布局", "经营会议", "余震", "靠近", "新棋盘",
  "少东家", "两个世界", "资金链告急", "交易", "碰面",
  "围城", "破局突破", "大胜", "入局", "前路",
  "暗涌", "对账", "冰山一角", "财报前夜",
];

const characters = [
  { name: "许诺", file: "许诺_设定图.webp" },
  { name: "顾良川", file: "顾良川_设定图.webp" },
  { name: "林卓", file: "林卓_设定图.webp" },
  { name: "沈若琳", file: "沈若琳_设定图.webp" },
];

const mangaPages: Record<number, number> = {
  1: 4, 2: 3, 3: 4, 4: 4, 5: 4, 6: 3, 7: 3, 8: 4, 9: 3, 10: 3,
};

export default function NovelWriterPage() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
  const [activeManga, setActiveManga] = useState<number>(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back */}
        <Link
          href="/#vibe-coding"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary-500 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          AI 小说创作系统
        </h1>
        <p className="mt-3 text-gray-500 leading-relaxed">
          构建了一套面向长篇小说创作的 Skill，配合 Claude Code 的 Agent 能力进行多角色管理、章节关系追踪与自动一致性校验，实现百万字长篇也不会前后矛盾。
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Skill", "Multi-Agent", "Claude Code", "SQLite", "Vector Search", "Python"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Cover */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100">
          <Image
            src="/vibe/novel-writer/cover.webp"
            alt="AI 小说创作系统"
            width={1536}
            height={1024}
            className="w-full h-auto"
          />
        </div>

        {/* Feature Cards */}
        <div className="mt-12">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// features"}</p>
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="p-4 rounded-xl border border-gray-100 hover:border-primary-100 transition-colors">
                <f.icon className="w-5 h-5 text-primary-500 mb-2" />
                <h3 className="text-sm font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-1 text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// how it works"}</p>
          <h2 className="text-xl font-bold text-gray-900 mb-6">技术架构</h2>
          <div className="space-y-6">
            {techDetails.map((section) => (
              <div key={section.title} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <section.icon className="w-4 h-4 text-primary-500" />
                  <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                      <span className="text-primary-400 mt-0.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Architecture diagram */}
          <div className="mt-6 p-5 rounded-xl border-2 border-dashed border-gray-200">
            <p className="text-xs text-gray-400 text-center mb-3">编排流程</p>
            <div className="flex items-center justify-center gap-2 flex-wrap text-xs">
              <span className="px-3 py-1.5 rounded bg-primary-50 text-primary-700 font-medium">Context Agent</span>
              <span className="text-gray-300">→</span>
              <span className="px-3 py-1.5 rounded bg-primary-50 text-primary-700 font-medium">Writer Agent</span>
              <span className="text-gray-300">→</span>
              <span className="px-3 py-1.5 rounded bg-primary-50 text-primary-700 font-medium">Reviewer Agent</span>
              <span className="text-gray-300">→</span>
              <span className="px-3 py-1.5 rounded bg-primary-50 text-primary-700 font-medium">Data Agent</span>
              <span className="text-gray-300">→</span>
              <span className="px-3 py-1.5 rounded bg-green-50 text-green-700 font-medium">SQLite Commit</span>
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">
              每章经过 4 个 Agent 流水线处理，审查不通过则回退重写，直到一致性校验 pass
            </p>
          </div>
        </div>

        {/* Dashboard */}
        <div className="mt-16">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// dashboard"}</p>
          <div className="rounded-2xl border-[3px] border-gray-900 shadow-[6px_6px_0_#1a1a1a] overflow-hidden" style={{ background: "#fff7e8" }}>
            <div className="p-4 border-b-2 border-gray-900 flex items-center gap-2" style={{ background: "#fff3d5" }}>
              <span className="text-xs font-bold text-gray-900" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                NOVEL WRITER HUB
              </span>
            </div>
            <div className="p-5 grid grid-cols-4 gap-4">
              <StatCard label="总章数" value="44" sub="/500 章" />
              <StatCard label="总字数" value="~10万" sub="字" />
              <StatCard label="角色" value="12" sub="人" />
              <StatCard label="一致性" value="98%" sub="通过率" />
            </div>
            <div className="px-5 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">第1卷进度</span>
                <span className="text-xs font-bold" style={{ color: "#26a8ff" }}>44/80</span>
              </div>
              <div className="h-3 border-2 border-gray-900 rounded-none overflow-hidden" style={{ background: "#fffdf6" }}>
                <div className="h-full" style={{ width: "55%", background: "linear-gradient(90deg, #26a8ff, #7f5af0)" }} />
              </div>
            </div>
            <div className="px-5 pb-5">
              <p className="text-xs font-bold text-gray-900 mb-3">核心角色关系</p>
              <svg viewBox="0 0 400 120" className="w-full h-auto">
                <line x1="100" y1="60" x2="200" y2="30" stroke="#26a8ff" strokeWidth="2" />
                <line x1="100" y1="60" x2="200" y2="90" stroke="#7f5af0" strokeWidth="2" />
                <line x1="200" y1="30" x2="300" y2="60" stroke="#f5a524" strokeWidth="2" strokeDasharray="4" />
                <line x1="200" y1="90" x2="300" y2="60" stroke="#d7263d" strokeWidth="2" />
                <circle cx="100" cy="60" r="18" fill="#fff3d5" stroke="#2a220f" strokeWidth="2" />
                <text x="100" y="64" textAnchor="middle" fontSize="10" fill="#2a220f">许诺</text>
                <circle cx="200" cy="30" r="18" fill="#fff3d5" stroke="#2a220f" strokeWidth="2" />
                <text x="200" y="34" textAnchor="middle" fontSize="10" fill="#2a220f">顾良川</text>
                <circle cx="200" cy="90" r="18" fill="#fff3d5" stroke="#2a220f" strokeWidth="2" />
                <text x="200" y="94" textAnchor="middle" fontSize="10" fill="#2a220f">裴珩</text>
                <circle cx="300" cy="60" r="18" fill="#fff3d5" stroke="#2a220f" strokeWidth="2" />
                <text x="300" y="64" textAnchor="middle" fontSize="10" fill="#2a220f">沈若琳</text>
                <text x="145" y="40" fontSize="8" fill="#26a8ff">信任</text>
                <text x="145" y="82" fontSize="8" fill="#7f5af0">合作</text>
                <text x="245" y="40" fontSize="8" fill="#f5a524">试探</text>
                <text x="245" y="82" fontSize="8" fill="#d7263d">对抗</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Chapter Reader */}
        <div className="mt-16">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// chapters"}</p>
          <p className="text-sm text-gray-500 mb-4">已完成 44 章，前 10 章可展开阅读</p>
          <div className="space-y-1">
            {chapters.map((title, i) => {
              const num = i + 1;
              const readable = num <= 10;
              const expanded = expandedChapter === num;
              return (
                <div key={num} className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => readable && setExpandedChapter(expanded ? null : num)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left ${
                      readable ? "hover:bg-gray-50 cursor-pointer" : "cursor-default opacity-60"
                    }`}
                  >
                    {readable ? (
                      expanded ? <ChevronDown className="w-3.5 h-3.5 text-primary-500" /> : <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    ) : (
                      <span className="w-3.5 h-3.5" />
                    )}
                    <span className="font-mono text-xs text-gray-400 w-8">
                      {String(num).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-gray-700">{title}</span>
                    {readable && !expanded && (
                      <span className="ml-auto text-xs text-primary-400">可读</span>
                    )}
                  </button>
                  {expanded && readable && (
                    <div className="px-4 pb-4 pt-1 border-t border-gray-50">
                      <a
                        href={`/vibe/novel-writer/chapters/第${String(num).padStart(4, "0")}章-${title}.md`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xs text-primary-500 hover:text-primary-600"
                      >
                        打开第 {num} 章完整文本 →
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Manga Gallery */}
        <div className="mt-16">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// manga"}</p>
          <p className="text-sm text-gray-500 mb-4">前 10 章漫画改编（AI 生成）</p>

          {/* Chapter tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(mangaPages).map((ch) => {
              const chNum = Number(ch);
              return (
                <button
                  key={ch}
                  onClick={() => setActiveManga(chNum)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    activeManga === chNum
                      ? "bg-primary-500 text-white font-medium"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  第{chNum}章
                </button>
              );
            })}
          </div>

          {/* Active chapter pages */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: mangaPages[activeManga] }, (_, i) => i + 1).map((page) => (
              <div key={page} className="rounded-xl overflow-hidden border border-gray-100">
                <Image
                  src={`/vibe/novel-writer/manga/ch${String(activeManga).padStart(2, "0")}/page_${String(page).padStart(2, "0")}.webp`}
                  alt={`第${activeManga}章 第${page}页`}
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Characters */}
        <div className="mt-16">
          <p className="font-mono text-xs text-primary-500 mb-4">{"// characters"}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {characters.map((c) => (
              <div key={c.name} className="text-center">
                <div className="rounded-xl overflow-hidden border border-gray-100">
                  <Image
                    src={`/vibe/novel-writer/characters/${c.file}`}
                    alt={c.name}
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-700">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="text-center">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-xl font-bold" style={{ color: "#26a8ff" }}>{value}</p>
      <p className="text-xs text-gray-400">{sub}</p>
    </div>
  );
}
