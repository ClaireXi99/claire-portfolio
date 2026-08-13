"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "home", href: "#home" },
  { label: "vibe coding", href: "#vibe-coding" },
  { label: "work", href: "#projects" },
  { label: "papers", href: "#papers" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg tracking-tight text-gray-900">
          Claire<span className="text-primary-500">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-sm text-gray-500 hover:text-primary-600 transition-colors"
              >
                <span className="text-gray-300 mr-1">{"//"}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-sm text-gray-500 hover:text-primary-600 transition-colors"
                >
                  <span className="text-gray-300 mr-1">{"//"}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
