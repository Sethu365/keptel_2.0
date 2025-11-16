import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ImageFeatureProps {
  image: string;
  imagePosition?: 'left' | 'right';
  eyebrow?: string;
  title: string;
  description: string;
  features?: { icon: LucideIcon; text: string }[];
}

export default function ImageFeature({
  image,
  imagePosition = 'left',
  eyebrow,
  title,
  description,
  features = []
}: ImageFeatureProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: imagePosition === 'left' ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={imagePosition === 'right' ? 'md:order-2' : ''}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: imagePosition === 'left' ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={imagePosition === 'right' ? 'md:order-1' : ''}
      >
        {eyebrow && (
          <p className="text-brand font-semibold uppercase tracking-wider text-sm mb-4">
            {eyebrow}
          </p>
        )}
        <h3 className="text-4xl font-bold text-slate-900 mb-6">{title}</h3>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">{description}</p>

        {features.length > 0 && (
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-4 h-4 text-brand" />
                  </div>
                  <p className="text-slate-700">{feature.text}</p>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}
