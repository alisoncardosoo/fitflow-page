"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={`mx-auto mb-12 ${isCenter ? "max-w-3xl text-center" : "max-w-2xl text-left"}`}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-lime/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-normal text-ice md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-pretty text-lg leading-8 text-muted ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
