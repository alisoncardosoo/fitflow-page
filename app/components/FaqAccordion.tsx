"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "../lib/content";

export function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqItems.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div className="glass-panel overflow-hidden rounded-[24px]" key={item.question}>
            <button
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-ice md:px-6"
              type="button"
              aria-expanded={isActive}
              onClick={() => setActiveIndex((current) => (current === index ? -1 : index))}
            >
              {item.question}
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-lime transition duration-500 ${
                  isActive ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isActive ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-5 pb-6 text-sm leading-7 text-muted md:px-6">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
