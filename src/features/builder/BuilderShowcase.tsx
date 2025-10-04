import ComponentLibrary from './components/ComponentLibrary';
import BuilderCanvas from './components/BuilderCanvas';
import PropertiesPanel from './components/PropertiesPanel';
import PreviewPanel from './components/PreviewPanel';
import CodePanel from './components/CodePanel';
import { Button } from '@/components/ui/Button';
import { Download, Rocket } from 'lucide-react';

const BuilderShowcase = () => {
  return (
    <section id="builder" className="border-t border-border bg-surface/90 py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
        <header className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">Visual builder</p>
            <h2 className="text-4xl font-semibold text-white">
              Assemble your app, no code required.
            </h2>
            <p className="max-w-2xl text-sm text-text-secondary">
              Drag UI blocks, connect logic, and preview production-ready interfaces in real time.
              Code Buddy keeps your design system, logic, and exports perfectly aligned.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" className="text-sm">
              <Download className="mr-2 h-4 w-4" /> Export bundle
            </Button>
            <Button glow className="text-sm">
              <Rocket className="mr-2 h-4 w-4" /> Publish to Vercel
            </Button>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)_320px]">
          <ComponentLibrary />
          <div className="min-h-[520px]">
            <BuilderCanvas />
          </div>
          <div className="flex flex-col gap-6">
            <PropertiesPanel />
            <PreviewPanel />
          </div>
        </div>

        <CodePanel />
      </div>
    </section>
  );
};

export default BuilderShowcase;
