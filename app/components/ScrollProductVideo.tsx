"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "../lib/assets";
import { productSlides } from "../lib/content";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

type Slide = (typeof productSlides)[number];

function SlideImage({
  slide,
  isActive,
  priority
}: {
  slide: Slide;
  isActive: boolean;
  priority: boolean;
}) {
  const [src, setSrc] = useState(assetPath(slide.image));

  return (
    <Image
      src={src}
      alt={`FitFlow — ${slide.label}`}
      fill
      sizes="(max-width: 1024px) 100vw, 1024px"
      priority={priority}
      className={`object-contain transition-opacity duration-700 ease-smooth ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      onError={() => {
        const fallback = assetPath(slide.fallback);
        setSrc((current) => (current === fallback ? current : fallback));
      }}
    />
  );
}

export function ScrollProductVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    // Em telas pequenas a seção não é alta/sticky, então mantemos o primeiro
    // slide fixo (mesmo comportamento estático que o vídeo tinha no mobile).
    if (!isDesktop || !section) {
      setProgress(0);
      return;
    }

    let frame = 0;

    const tick = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const nextProgress = clamp(-rect.top / scrollable, 0, 1);

      setProgress((prev) => (Math.abs(prev - nextProgress) > 0.001 ? nextProgress : prev));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isDesktop]);

  const activeIndex = Math.min(
    productSlides.length - 1,
    Math.floor(progress * productSlides.length)
  );

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="relative bg-[linear-gradient(180deg,transparent,#0b0d0c_14%,#0b0d0c_86%,transparent)] md:h-[330vh]"
    >
      <div className="flex min-h-svh items-center py-20 md:sticky md:top-0 md:h-svh md:py-8 lg:py-10">
        <div className="section-shell flex h-full flex-col justify-center">
          <div className="mx-auto mb-6 max-w-3xl text-center lg:mb-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-lime/80 md:text-sm">
              Experiência
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.02] text-ice md:text-5xl lg:text-6xl">
              Uma operação inteira em movimento.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Do primeiro cadastro ao acompanhamento financeiro, o FitFlow transforma a rotina da
              academia em uma experiência contínua.
            </p>
          </div>

          <div className="relative mx-auto w-[min(100%,calc(54svh*1.5377))] max-w-5xl">
            <div className="absolute -inset-6 rounded-[44px] bg-lime/10 blur-3xl" />
            <div className="glass-panel lime-glow relative overflow-hidden rounded-[34px] p-2 md:p-3">
              <div className="absolute left-6 top-6 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-ink/[0.62] px-4 py-2 text-xs font-medium text-ice backdrop-blur-xl md:flex">
                <span className="h-2 w-2 rounded-full bg-lime" />
                {productSlides[activeIndex].label}
              </div>

              <div className="relative aspect-[2940/1912] w-full overflow-hidden rounded-[26px] bg-ink">
                {productSlides.map((slide, index) => (
                  <SlideImage
                    key={slide.label}
                    slide={slide}
                    isActive={index === activeIndex}
                    priority={index === 0}
                  />
                ))}

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(199,255,74,0.12),transparent_28%),linear-gradient(180deg,rgba(7,7,7,0)_52%,rgba(7,7,7,0.78)_100%)]" />
              </div>

              <div className="grid grid-cols-2 gap-2 px-2 pb-2 pt-3 sm:grid-cols-3 lg:grid-cols-6">
                {productSlides.map((slide, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      className={`rounded-full border px-3 py-2 text-center text-xs transition duration-700 ease-smooth ${
                        isActive
                          ? "border-lime/[0.35] bg-lime/[0.12] text-lime"
                          : "border-white/[0.08] bg-white/[0.035] text-muted"
                      }`}
                      key={slide.label}
                    >
                      {slide.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mx-auto mt-7 h-1.5 max-w-3xl overflow-hidden rounded-full bg-white/[0.08]">
              <div
                className="h-full rounded-full bg-lime transition-[width] duration-500 ease-smooth"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
