'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type FadeSectionProps = {
  children: ReactNode;
  delay?: number;
};

export function FadeSection({ children, delay = 0 }: FadeSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
