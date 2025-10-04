import { motion } from 'framer-motion';
import { Bot, Boxes, Code2, LayoutDashboard, Zap, Share2 } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import Badge from '@/components/ui/Badge';

const features = [
  {
    title: 'Visual Canvas',
    description:
      'Drag widgets, sections, and responsive layouts onto an infinite canvas. Snap-to-grid keeps designs pixel-perfect.',
    icon: LayoutDashboard,
  },
  {
    title: 'Logic Builder',
    description:
      'Chain together data sources, conditional paths, and actions using a flowchart editor powered by React Flow.',
    icon: Boxes,
  },
  {
    title: 'Live Preview',
    description:
      'See changes instantly inside a device frame with real data. Tweak props and state without reloading.',
    icon: Zap,
  },
  {
    title: 'AI Assist',
    description:
      'Generate entire screens, connect APIs, or refactor your app with AI prompts trained on production patterns.',
    icon: Bot,
  },
  {
    title: 'Code Generation',
    description:
      'Export clean React + Tailwind code formatted with Prettier, mapped directly from your component tree.',
    icon: Code2,
  },
  {
    title: 'Deploy Anywhere',
    description:
      'Publish to Vercel, Netlify, or ship a downloadable bundle. One click, zero vendor lock-in.',
    icon: Share2,
  },
];

const FeatureHighlights = () => {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Badge>Why teams switch</Badge>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Everything you expect from a senior front-end engineer�minus the cost.
        </h2>
        <p className="mt-6 text-base text-text-secondary">
          Crafted for design-led teams that need to iterate quickly. Code Buddy bundles UI, data,
          and deployment into one no-compromise builder.
        </p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.12, duration: 0.5 },
          },
        }}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map(({ title, description, icon: Icon }) => (
          <motion.div
            key={title}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          >
            <GlowCard>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/40 bg-accent/15 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-text-secondary">{description}</p>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureHighlights;
