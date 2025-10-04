import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const CallToAction = () => (
  <section className="relative mx-auto max-w-5xl px-6 pb-24">
    <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-background via-surface to-background p-10 text-center shadow-glowStrong">
      <div className="absolute -bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
      <div className="relative flex flex-col items-center gap-4">
        <Sparkles className="h-6 w-6 text-accent" />
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">
          Launch your ideas at the speed of thought.
        </h2>
        <p className="max-w-2xl text-base text-text-secondary">
          Start building for free. Upgrade only when you need team seats, advanced automation, or
          custom deployment pipelines.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button glow className="text-base">
            Create your workspace <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="secondary" className="text-base">
            Browse templates
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
