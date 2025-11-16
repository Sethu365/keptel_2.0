import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-10 shadow-lg relative"
    >
      {/* Subtle brand-tinted quote mark */}
      <Quote className="w-12 h-12 text-brand opacity-15 absolute top-8 left-8" />

      <div className="relative">
        <p className="text-xl text-slate-700 mb-6 italic leading-relaxed">
          "{quote}"
        </p>

        <div className="flex items-center gap-4">
          {/* Brand gradient avatar with soft depth */}
          <div className="w-14 h-14 bg-gradient-to-br from-brand to-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
            {author.split(' ').map(n => n[0]).join('')}
          </div>

          <div>
            <div className="font-bold text-slate-900">{author}</div>
            <div className="text-slate-600">
              {role}, {company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
