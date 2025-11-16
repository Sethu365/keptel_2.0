import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  accent?: boolean; // optional: show a thin brand border or line accent
}

export default function Card({
  children,
  className = '',
  hover = true,
  accent = false,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow:
                '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(214,58,30,0.05)',
            }
          : {}
      }
      className={`bg-white rounded-2xl p-8 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.06)] ${
        accent ? 'border-t-4 border-brand' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
