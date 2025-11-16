// src/Button.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brand";

  const variants: Record<string, string> = {
    // Primary: filled Keptel brand for main CTA
    primary:
      "bg-brand hover:bg-brand-600 text-white shadow-lg hover:shadow-xl active:shadow-md",

    // Ghost: subtle, text-brand for secondary/inline actions
    ghost:
      "bg-transparent text-brand hover:bg-brand-50 active:bg-brand-50",

    // Outline: border with brand, on hover becomes filled (kept conservative)
    outline:
      "border border-brand text-brand hover:bg-brand hover:text-white active:bg-brand-600 shadow-[inset_0_0_0_9999px_rgba(255,255,255,0)]",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      whileHover={!disabled ? { scale: 1.015 } : undefined}
      whileTap={!disabled ? { scale: 0.985 } : undefined}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </motion.button>
  );
}
