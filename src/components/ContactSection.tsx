import { Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-sm text-primary-500 mb-2">{"// contact"}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          对 AI 产品、数据科学或 vibe coding 感兴趣？
          <br />
          欢迎随时联系我，一起探索有趣的可能性。
        </p>

        <a
          href="mailto:wangyingxiclaire@163.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20 text-lg"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-400">
          <Mail className="w-4 h-4" />
          <span>wangyingxiclaire@163.com</span>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-200 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-200 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
