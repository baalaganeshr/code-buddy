import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GlowGridProps {
  className?: string;
}

const GlowGrid = ({ className }: GlowGridProps) => {
  return (
    <div className={clsx('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,26,67,0.12),_transparent_55%)]" />
      <motion.div
        className="absolute inset-0 opacity-70"
        animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
};

export default GlowGrid;
