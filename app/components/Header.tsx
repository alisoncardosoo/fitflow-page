"use client";

import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { assetPath } from "../lib/assets";
import { navItems } from "../lib/content";

function BrandMark() {
  return (
    <a className="focus-ring flex items-center rounded-xl" href="#top" aria-label="FitFlow início">
      <Image
        src={assetPath("/images/logo-fitflow.png")}
        alt="FitFlow"
        width={4290}
        height={2292}
        priority
        className="h-11 w-auto object-contain"
      />
    </a>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-x-clip transition-all duration-700 ease-smooth ${
        isScrolled
          ? "bg-ink/[0.72] shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-shell flex h-[76px] items-center justify-between">
        <BrandMark />

        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.035] p-1 text-sm text-muted backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-full px-4 py-2 transition duration-500 ease-smooth hover:bg-white/[0.08] hover:text-ice"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="focus-ring group ml-1 flex items-center gap-2 rounded-full bg-lime px-4 py-2 font-semibold text-ink transition duration-500 ease-smooth hover:scale-[1.02] hover:bg-mist"
            href="#precos"
          >
            Solicitar demonstração
            <ArrowRight className="h-4 w-4 transition duration-500 group-hover:translate-x-0.5" />
          </a>
        </nav>

        <button
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-ice backdrop-blur-xl transition hover:bg-white/10 lg:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`section-shell overflow-hidden transition-all duration-700 ease-smooth lg:hidden ${
          isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass-panel rounded-[28px] p-3">
          {navItems.map((item) => (
            <a
              className="focus-ring block rounded-2xl px-4 py-3 text-sm text-muted transition hover:bg-white/[0.06] hover:text-ice"
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="focus-ring mt-2 flex items-center justify-center rounded-2xl bg-lime px-4 py-3 text-sm font-semibold text-ink"
            href="#precos"
            onClick={() => setIsOpen(false)}
          >
            Solicitar demonstração
          </a>
        </nav>
      </div>
    </header>
  );
}
