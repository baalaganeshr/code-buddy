import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { MotionButton } from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import GlowGrid from '@/components/layout/GlowGrid';

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <GlowGrid className="opacity-90" />
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Badge>Zero-code Deployments</Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl"
        >
          Build production-ready web apps with a neon-fast visual canvas.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-text-secondary"
        >
          Code Buddy combines a drag-and-drop designer, workflow logic, and live code generation so
          anyone can launch polished apps in minutes without an engineering budget.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <MotionButton
            variants={buttonVariants}
            glow
            className="text-base"
            onClick={() =>
              document.querySelector('#builder')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Start Building
            <ArrowRight className="h-4 w-4" />
          </MotionButton>
          <MotionButton
            variants={buttonVariants}
            variant="secondary"
            className="text-base"
            onClick={() =>
              document.querySelector('#preview')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Play className="h-4 w-4" /> Watch Preview
          </MotionButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-6 rounded-2xl border border-accent/20 bg-surface/60 p-6 text-left backdrop-blur-xl sm:grid-cols-4"
        >
          {[
            { label: 'Templates', value: '35+' },
            { label: 'Deployments', value: '1-click' },
            { label: 'Logic Nodes', value: '50+' },
            { label: 'Team Modes', value: 'Realtime' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-sm uppercase tracking-[0.2em] text-text-secondary">
                {item.label}
              </span>
              <span className="text-2xl font-semibold text-white">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
