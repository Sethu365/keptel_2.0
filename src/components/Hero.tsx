import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;

  backgroundImage?: string;

  backgroundVideoSrc?: string;
  backgroundVideoPoster?: string;
  videoOnMobile?: boolean;

  parallaxStrength?: number;
}

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  onPrimaryClick,
  onSecondaryClick,
  backgroundImage = "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920",
  backgroundVideoSrc,
  backgroundVideoPoster,
  videoOnMobile = false,
  parallaxStrength = 80,
}: HeroProps) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const showVideo = !!backgroundVideoSrc && !prefersReducedMotion;

  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, parallaxStrength]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, parallaxStrength * 0.6]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -parallaxStrength * 0.15]);

  return (
    <section
      className="
        relative h-[100svh] min-h-[560px]
        flex items-center justify-center overflow-hidden
        px-4 sm:px-6
      "
      aria-label="Hero"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={prefersReducedMotion ? undefined : { y: bgY }}
        aria-hidden="true"
      >
        {showVideo ? (
          <>
            {!videoOnMobile && (
              <div
                className="absolute inset-0 md:hidden"
                style={{
                  backgroundImage: `url(${backgroundVideoPoster || backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
            <div className={`${videoOnMobile ? "" : "hidden md:block"} absolute inset-0`}>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={backgroundVideoPoster || backgroundImage}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={backgroundVideoSrc} type="video/mp4" />
              </video>
            </div>
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </motion.div>

      {/* Overlay (stronger on mobile for contrast) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
        style={prefersReducedMotion ? undefined : { y: overlayY }}
      >
        <div className="absolute inset-0 bg-slate-900/75 sm:bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/60 sm:to-slate-900/40" />
        <motion.div
          aria-hidden="true"
          className="absolute -inset-1 opacity-[0.07] sm:opacity-[0.06]"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(1100px 520px at 8% 0%, rgba(255,255,255,0.8), transparent 60%), radial-gradient(800px 380px at 92% 100%, rgba(255,255,255,0.6), transparent 60%)",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="
          relative z-10 w-full max-w-6xl
          text-center text-white
        "
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={prefersReducedMotion ? undefined : { y: fgY }}
      >
        <motion.h1
          className="
            font-bold leading-tight mx-auto
            text-[clamp(2rem,8vw,3rem)]   /* ~32–48px on mobile */
            sm:text-[clamp(2.5rem,6vw,3.5rem)]
            md:text-6xl lg:text-7xl
            max-w-[22ch]
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
            mb-4 sm:mb-5 md:mb-6
          "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="
            mx-auto max-w-prose
            text-base sm:text-lg md:text-2xl
            leading-relaxed sm:leading-8
            text-gray-200
            px-1
            drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]
            mb-8 sm:mb-10 md:mb-12
          "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="
            flex flex-col sm:flex-row gap-3 sm:gap-4
            items-stretch sm:items-center justify-center
            px-1
          "
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
        >
          {ctaPrimary && (
            <Button
              variant="primary"
              size="lg"
              icon
              onClick={onPrimaryClick}
              className="w-full sm:w-auto"
            >
              {ctaPrimary}
            </Button>
          )}
          {ctaSecondary && (
            <Button
              variant="outline"
              size="lg"
              onClick={onSecondaryClick}
              className="
                w-full sm:w-auto
                border-white text-white
                hover:bg-white hover:text-slate-900
              "
            >
              {ctaSecondary}
            </Button>
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator (hide on very small screens to avoid overlap) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 "
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white" aria-hidden="true">
            <path d="M6 8l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 12l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
  