import { FileText } from "lucide-react";

const papers = [
  {
    authors: "Wang, Y., Liang, H., & Zhai, B.",
    title: "Temporal Neighborhood based Self-supervised Pre-training Model for Sleep Stages Classification",
    venue: "ICBBT 2023",
    note: "",
    link: "https://dl.acm.org/doi/abs/10.1145/3608164.3608185",
  },
  {
    authors: "Zhao, J., Wang, Y., et al.",
    title: "NCL_NLP at SemEval-2024 Task 7: CoT-NumHG: A CoT-Based SFT Training Strategy with Large Language Models for Number-Focused Headline Generation",
    venue: "SemEval-2024",
    note: "",
    link: "https://aclanthology.org/2024.semeval-1.40/",
  },
  {
    authors: "Zhao, J., Wang, Y., et al.",
    title: "Legal_try at SemEval-2023 Task 6: Voting Heterogeneous Models for Entities identification in Legal Documents",
    venue: "SemEval-2023",
    note: "",
    link: "https://aclanthology.org/2023.semeval-1.178/",
  },
];

export function PapersSection() {
  return (
    <section id="papers" className="py-16 px-6 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-sm text-primary-500 mb-6">{"// papers"}</p>

        <div className="space-y-4">
          {papers.map((paper, i) => (
            <a
              key={i}
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="mt-0.5 text-gray-300 group-hover:text-primary-400 transition-colors">
                <FileText className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 group-hover:text-primary-600 transition-colors leading-relaxed">
                  {paper.title}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {paper.authors} · {paper.venue}
                  {paper.note && <span className="text-primary-400 ml-1">({paper.note})</span>}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
