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
  const [mobileSlideIndex, setMobileSlideIndex] = useState(0);
  const slideCount = productSlides.length;

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

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

  useEffect(() => {
    if (isDesktop) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setMobileSlideIndex((current) => (current + 1) % slideCount);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [isDesktop, slideCount]);

  const desktopActiveIndex = Math.min(
    slideCount - 1,
    Math.floor(progress * slideCount)
  );
  const activeIndex = isDesktop ? desktopActiveIndex : mobileSlideIndex;

  const selectSlide = (index: number) => {
    setMobileSlideIndex(index);

    const section = sectionRef.current;

    if (!isDesktop || !section) {
      return;
    }

    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
    const targetProgress = slideCount <= 1 ? 0 : index / (slideCount - 1);

    window.scrollTo({
      top: sectionTop + scrollable * targetProgress,
      behavior: "smooth"
    });
  };

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="relative bg-[linear-gradient(180deg,transparent,#0b0d0c_14%,#0b0d0c_86%,transparent)] md:h-[330vh]"
    >
      <div className="flex min-h-0 items-center py-16 md:sticky md:top-0 md:h-svh md:min-h-svh md:py-8 lg:py-10">
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

          <div className="relative mx-auto w-[min(100%,calc(56svh*1.5377))] max-w-4xl">
            <div className="absolute -inset-5 rounded-[42px] bg-lime/10 blur-3xl" />
            <div className="lime-glow relative overflow-hidden rounded-[30px] border border-lime/[0.18] bg-ink p-2 shadow-glass md:rounded-[34px] md:p-3">
              <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-ink/[0.74] px-3 py-1.5 text-[11px] font-medium text-ice shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:left-6 md:top-6 md:px-4 md:py-2 md:text-xs">
                <span className="h-2 w-2 rounded-full bg-lime" />
                {productSlides[activeIndex].label}
              </div>

              <div className="relative aspect-[2940/1912] w-full overflow-hidden rounded-[22px] bg-[#050706] md:rounded-[26px]">
                {productSlides.map((slide, index) => (
                  <SlideImage
                    key={slide.label}
                    slide={slide}
                    isActive={index === activeIndex}
                    priority={index === 0}
                  />
                ))}

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(199,255,74,0.11),transparent_28%),linear-gradient(180deg,rgba(7,7,7,0)_58%,rgba(7,7,7,0.74)_100%)]" />
              </div>
            </div>

            <div
              aria-label="Navegar pelas telas da experiência"
              className="mt-5 flex items-center justify-center gap-2.5"
              role="tablist"
            >
              {productSlides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    aria-current={isActive ? "true" : undefined}
                    aria-label={`Mostrar ${slide.label}`}
                    className={`focus-ring h-3 rounded-full transition duration-500 ease-smooth ${
                      isActive
                        ? "w-8 bg-lime shadow-[0_0_24px_rgba(199,255,74,0.4)]"
                        : "w-3 cursor-pointer bg-white/[0.18] hover:bg-white/35"
                    }`}
                    key={slide.label}
                    onClick={() => selectSlide(index)}
                    role="tab"
                    type="button"
                  >
                    <span className="sr-only">{slide.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
