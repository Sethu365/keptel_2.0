import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">
            {stat.value}
          </div>
          <div className="text-slate-600 text-lg">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
