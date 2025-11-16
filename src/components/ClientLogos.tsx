import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Logo = { name: string; image: string };

// ✅ Skeleton shimmer placeholder (subtle brand tint)
function Skeleton() {
  return (
    <div
      className="h-12 w-28 rounded-lg bg-slate-200/70 overflow-hidden relative"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(214,58,30,0.06) 45%, rgba(255,255,255,0) 100%)",
        }}
      />
      <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
    </div>
  );
}

// ✅ Individual Logo with fallback + grayscale + gentle hover accent
function ClientLogoItem({ name, image }: Logo) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (errored || !image) {
    return (
      <div
        className="h-12 px-4 rounded-lg border border-slate-200 bg-white/80 flex items-center justify-center text-slate-500 text-sm font-medium"
        aria-label={name}
        title={name}
      >
        {name}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      {!loaded && <Skeleton />}

      <div
        className={[
          // container gives a small interactive affordance but stays minimal
          "p-1 rounded-md transition-all duration-200",
          // subtle shadow + faint brand ring on hover (very restrained)
          "hover:shadow-md hover:scale-[1.01] focus-within:ring-1 focus-within:ring-brand/20",
        ].join(" ")}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={[
            "h-12 w-auto object-contain transition-transform duration-300",
            // tiny grayscale until hover to keep visual balance (optional)
            // remove grayscale if you prefer full color logos always
            "group-hover:grayscale-0",
            loaded ? "block" : "hidden",
          ].join(" ")}
          // ensure keyboard accessibility for focus ring
          tabIndex={0}
        />
      </div>
    </div>
  );
}

// ✅ Main Logo Grid with reveal animation
export default function ClientLogos({ logos }: { logos: Logo[] }) {
  const reduce = useReducedMotion();

  const parentVariants = reduce
    ? undefined
    : {
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.05 },
        },
      };

  const itemVariants = reduce
    ? undefined
    : {
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      };

  return (
    <motion.div
      variants={parentVariants}
      initial={parentVariants ? "hidden" : undefined}
      whileInView={parentVariants ? "show" : undefined}
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-10 gap-y-8 justify-items-center items-center"
    >
      {logos.map((logo) => (
        <motion.div
          key={logo.name}
          variants={itemVariants}
          whileHover={{ y: -2, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <ClientLogoItem {...logo} />
        </motion.div>
      ))}
    </motion.div>
  );
}
