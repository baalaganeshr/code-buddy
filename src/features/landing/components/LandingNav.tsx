import { Menu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const LandingNav = () => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-background/80 px-6 py-5 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 shadow-glow">
          <Sparkles className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.35em] text-text-primary">
            Code Buddy
          </p>
          <p className="text-xs text-text-secondary">Visual app builder for everyone</p>
        </div>
      </div>
      <nav className="hidden items-center gap-8 text-sm text-text-secondary md:flex">
        <a className="hover:text-white" href="#features">
          Features
        </a>
        <a className="hover:text-white" href="#workflow">
          Workflow
        </a>
        <a className="hover:text-white" href="#preview">
          Live Preview
        </a>
        <a className="hover:text-white" href="#builder">
          Builder
        </a>
      </nav>
      <div className="hidden gap-4 md:flex">
        <Button variant="ghost" className="text-sm font-medium">
          Sign In
        </Button>
        <Button glow className="text-sm font-semibold">
          Start Building
        </Button>
      </div>
      <Button variant="ghost" className="md:hidden">
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default LandingNav;
