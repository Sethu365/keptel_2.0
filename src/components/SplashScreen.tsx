import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

type SplashProps = {
  minDuration?: number; // extra time AFTER animation finishes
  logoSrc?: string;
  onFinish?: () => void;
  /** "out" (shrink), "in" (grow), or "none" */
  endZoom?: "out" | "in" | "none";
};

export default function SplashScreen({
  minDuration = 2000, // ⏱️ hold logo for 5s AFTER animation
  logoSrc = "/assets/logo.png",
  onFinish,
  endZoom = "out",
}: SplashProps) {
  const [visible, setVisible] = useState(true);
  const [exitNow, setExitNow] = useState(false);

  // how long the logo animation itself runs
  const LOGO_ANIMATION_MS = 5000; // 5 seconds

  // Timing logic: animation (5s) + hold (minDuration, default 5s) → then fade out (1.3s)
  useEffect(() => {
    const totalVisible = LOGO_ANIMATION_MS + minDuration;

    const t1 = setTimeout(() => {
      setExitNow(true);
      const t2 = setTimeout(() => {
        setVisible(false);
        onFinish?.();
      }, 1300); // 🕊️ slow fade-out (1.3s)
      return () => clearTimeout(t2);
    }, totalVisible);

    return () => clearTimeout(t1);
  }, [minDuration, onFinish]);

  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  if (!visible) return null;

  const exitScale = endZoom === "none" ? 1 : endZoom === "out" ? 0.96 : 1.04;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      role="status"
      aria-label="Loading"
      initial={{ opacity: 1, scale: 1 }}
      animate={exitNow ? { opacity: 0, scale: exitScale } : { opacity: 1, scale: 1 }}
      transition={{
        duration: 1.3, // 🌙 slower fade
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <div className="relative">
        {/* === Animated Ring === */}
        {!prefersReduced && (
          <motion.svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <motion.circle
              cx="120"
              cy="120"
              r="100"
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0.5,
                scale: 0.95,
              }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1, 1.05],
              }}
              transition={{
                duration: 3, // ring draws in 3s
                ease: "easeInOut",
              }}
              style={{ originX: "120px", originY: "120px" }}
            />
          </motion.svg>
        )}

        {/* === Logo === */}
        <motion.img
          src={logoSrc}
          alt="Company logo"
          className="h-28 md:h-32 w-auto object-contain select-none"
          draggable={false}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0, 1, 1, 1],
            scale: [0.9, 1.04, 1, 1],
            filter: ["blur(3px)", "blur(0px)", "blur(0px)", "blur(0px)"],
          }}
          transition={{
            duration: LOGO_ANIMATION_MS / 1000, // 5s animation
            times: [0, 0.4, 0.6, 1],
            ease: "easeInOut",
          }}
        />

        {/* === Subtle Gloss Sweep === */}
        {!prefersReduced && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -inset-y-12 -left-1/3 w-1/4 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
              initial={{ x: "-130%" }}
              animate={{ x: "230%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.3,
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
