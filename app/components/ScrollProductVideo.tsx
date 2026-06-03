"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { productLabels } from "../lib/content";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function ScrollProductVideo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [canUseVideo, setCanUseVideo] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    if (mediaQuery.matches || mobileQuery.matches) {
      setCanUseVideo(false);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section) {
      return;
    }

    let frame = 0;

    const tick = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const nextProgress = clamp(-rect.top / scrollable, 0, 1);

      targetTimeRef.current = duration > 0 ? nextProgress * duration : nextProgress * 8;
      currentTimeRef.current += (targetTimeRef.current - currentTimeRef.current) * 0.09;

      if (video && canUseVideo && duration > 0 && Number.isFinite(currentTimeRef.current)) {
        video.currentTime = currentTimeRef.current;
      }

      setProgress(nextProgress);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [canUseVideo, duration]);

  const activeLabel = Math.min(productLabels.length - 1, Math.floor(progress * productLabels.length));

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

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute -inset-6 rounded-[44px] bg-lime/10 blur-3xl" />
            <div className="glass-panel lime-glow relative overflow-hidden rounded-[34px] p-2 md:p-3">
              <div className="absolute left-6 top-6 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-ink/[0.62] px-4 py-2 text-xs font-medium text-ice backdrop-blur-xl md:flex">
                <span className="h-2 w-2 rounded-full bg-lime" />
                {productLabels[activeLabel]}
              </div>

              <div className="relative h-[min(46svh,520px)] overflow-hidden rounded-[26px] bg-ink md:h-[min(50svh,520px)]">
                {canUseVideo ? (
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover object-left-top"
                    muted
                    playsInline
                    preload="metadata"
                    poster="/images/fitflow-dashboard-preview.png"
                    onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
                    onError={() => setCanUseVideo(false)}
                  >
                    <source src="/videos/fitflow-demo-scroll.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src="/images/fitflow-dashboard-preview.png"
                    alt="Preview do dashboard FitFlow"
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover object-left-top"
                  />
                )}

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(199,255,74,0.12),transparent_28%),linear-gradient(180deg,rgba(7,7,7,0)_52%,rgba(7,7,7,0.78)_100%)]" />
              </div>

              <div className="grid grid-cols-2 gap-2 px-2 pb-2 pt-3 sm:grid-cols-3 lg:grid-cols-6">
                {productLabels.map((label, index) => {
                  const isActive = index === activeLabel;

                  return (
                    <div
                      className={`rounded-full border px-3 py-2 text-center text-xs transition duration-700 ease-smooth ${
                        isActive
                          ? "border-lime/[0.35] bg-lime/[0.12] text-lime"
                          : "border-white/[0.08] bg-white/[0.035] text-muted"
                      }`}
                      key={label}
                    >
                      {label}
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
