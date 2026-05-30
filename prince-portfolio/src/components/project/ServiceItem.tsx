import { motion } from 'framer-motion';
import type { Service } from '../../types';

interface ServiceItemProps {
  service: Service;
  index: number;
}

export function ServiceItem({ service, index }: ServiceItemProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-12 py-12 md:py-16 border-b border-on-primary-container/20 group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="md:col-span-1 font-kanit text-[12px] font-semibold tracking-[0.1em] text-on-primary-container mb-2 md:mb-0">
        {service.number}
      </div>
      <div className="md:col-span-6 font-kanit text-[40px] font-medium leading-[1.2] uppercase font-bold pr-4 flex items-center mb-4 md:mb-0">
        <span className="underline-grow">{service.name}</span>
      </div>
      <div className="md:col-span-5 font-kanit text-[16px] leading-[1.5] text-on-primary-container/80 max-w-sm">
        {service.description}
      </div>
    </motion.div>
  );
}
