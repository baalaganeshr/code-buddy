import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const PreviewShowcase = () => (
  <section id="preview" className="relative mx-auto max-w-6xl px-6 py-24">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <div className="space-y-6">
        <Badge>Live canvas</Badge>
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">
          Watch components render as you assemble your flow.
        </h2>
        <p className="text-base text-text-secondary">
          The preview window mirrors your layout in real time, syncing component state, props, and
          data bindings instantly. Expand to multi-device views or inspect generated code
          side-by-side with Monaco.
        </p>
        <ul className="space-y-3 text-sm text-text-secondary">
          <li className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
            Hot reloads powered by Vite + React 18 concurrent rendering.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
            Toggle between visual tree, code diff, and data inspector without leaving the page.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
            Share interactive previews via secure Supabase links in one click.
          </li>
        </ul>
        <Button className="mt-6 w-fit" glow>
          Explore the Builder <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface/80 p-8 shadow-glow"
      >
        <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-accent" />
              <span className="flex h-3 w-3 rounded-full bg-accent/70" />
              <span className="flex h-3 w-3 rounded-full bg-accent/50" />
            </div>
            <p className="text-xs text-text-secondary">Preview � Desktop</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4 rounded-2xl border border-border bg-background/80 p-4">
              <div className="rounded-xl border border-accent/20 bg-accent/10 p-4 text-xs text-text-secondary">
                Component Tree
              </div>
              <div className="space-y-2 text-xs text-text-secondary">
                {['Frame', 'Navbar', 'Hero', 'CTA'].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/70 px-3 py-2"
                  >
                    <span>{item}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-accent/80">
                      {index === 0 ? 'root' : 'node'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-video w-full rounded-2xl border border-border bg-gradient-to-br from-background via-muted/60 to-background p-6">
                <div className="flex h-full items-center justify-center rounded-xl border border-accent/20 bg-surface/70">
                  <span className="text-sm text-text-secondary">Live Preview</span>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-background/80 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                  Generated Code
                </p>
                <pre className="mt-3 max-h-40 overflow-hidden rounded-xl bg-muted/40 p-4 text-xs text-accent-soft">
                  {`const Hero = () => (
  <section className="py-24 text-white">
    <h1 className="text-5xl font-semibold">Glow-fast workflows</h1>
  </section>
);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PreviewShowcase;
