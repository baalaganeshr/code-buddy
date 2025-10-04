import { motion } from 'framer-motion';
import GlowCard from '@/components/ui/GlowCard';
import Badge from '@/components/ui/Badge';

const steps = [
  {
    step: 'Design',
    title: 'Compose screens visually',
    description:
      'Snap components into responsive grids, tweak tokens, and manage variants with Tailwind-powered controls.',
  },
  {
    step: 'Automate',
    title: 'Connect data and logic',
    description:
      'Bind Supabase tables, REST APIs, or local JSON. Build branching logic, filters, and transformations via nodes.',
  },
  {
    step: 'Ship',
    title: 'Preview, export, deploy',
    description:
      'Inspect generated React code, run quick smoke tests, and publish directly to Vercel in a single click.',
  },
];

const WorkflowSection = () => (
  <section id="workflow" className="relative mx-auto max-w-6xl px-6 py-24">
    <div className="mx-auto max-w-2xl text-center">
      <Badge>Three-step flow</Badge>
      <h2 className="mt-4 text-4xl font-semibold text-white">
        Reverse-engineered from teams launching apps weekly.
      </h2>
      <p className="mt-4 text-base text-text-secondary">
        Code Buddy encodes the rituals of high-performing product teams so your ideas ship faster
        than competitors can spec them.
      </p>
    </div>
    <div className="mt-12 grid gap-8 lg:grid-cols-3">
      {steps.map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <GlowCard className="h-full">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-sm font-semibold text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm text-text-secondary">{step.description}</p>
          </GlowCard>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WorkflowSection;
