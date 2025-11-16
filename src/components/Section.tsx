import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Bg = "white" | "gray";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: Bg;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  /** Add a subtle divider line under the section */
  divider?: boolean;
  /** Stagger children inside a grid/wrapper you pass (use with a motion.div or plain div) */
  staggerChildren?: boolean;
  /** Viewport visibility threshold (0–1). Default 0.25 */
  viewportAmount?: number;
  /** Animate only once when entering viewport */
  once?: boolean;
  /** Optional id for anchor links */
  id?: string;
}

const headerVariant = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerParent = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export default function Section({
  children,
  className = "",
  background = "white",
  eyebrow,
  title,
  subtitle,
  centered = true,
  divider = false,
  staggerChildren = false,
  viewportAmount = 0.25,
  once = true,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        background === "gray" ? "bg-slate-50" : "bg-white",
        "py-20 md:py-28",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        {(eyebrow || title || subtitle) && (
          <motion.header
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount: viewportAmount }}
            className={clsx(
              "mx-auto mb-12 md:mb-16",
              centered ? "text-center max-w-3xl" : "text-left max-w-4xl"
            )}
          >
            {eyebrow && (
              <motion.p
                variants={headerVariant}
                className="text-sm font-semibold tracking-wide text-brand uppercase"
              >
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={headerVariant}
                className="text-4xl md:text-5xl font-bold text-slate-900 mt-3"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={headerVariant}
                className={clsx(
                  "text-lg md:text-xl text-slate-600 mt-4 leading-relaxed",
                  centered ? "mx-auto" : ""
                )}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.header>
        )}

        {/* Content wrapper — enable optional staggering for descendants */}
        <motion.div
          variants={staggerChildren ? staggerParent : undefined}
          initial={staggerChildren ? "hidden" : undefined}
          whileInView={staggerChildren ? "show" : undefined}
          viewport={staggerChildren ? { once, amount: viewportAmount } : undefined}
        >
          {children}
        </motion.div>

        {divider && (
          <div className="mt-16 md:mt-20">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
