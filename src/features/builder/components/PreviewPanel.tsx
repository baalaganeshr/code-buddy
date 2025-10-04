import { useMemo } from 'react';
import { useBuilderStore } from '@/store/builderStore';

const PreviewPanel = () => {
  const nodes = useBuilderStore((state) => state.nodes);

  const orderedNodes = useMemo(() => {
    return [...nodes].sort((a, b) => a.position.y - b.position.y);
  }, [nodes]);

  const renderNode = (type: string, label: string, props: Record<string, unknown>) => {
    switch (type) {
      case 'heading':
        return <h1 className="text-3xl font-semibold text-white">{label}</h1>;
      case 'subheading':
        return <h2 className="text-xl font-medium text-text-secondary">{label}</h2>;
      case 'paragraph':
        return <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">{label}</p>;
      case 'button': {
        const variant = props.variant as string;
        const base =
          'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition';
        const variantClasses =
          variant === 'outline'
            ? 'border border-accent/60 text-white'
            : variant === 'ghost'
              ? 'bg-transparent text-accent'
              : 'bg-accent text-white shadow-glow';
        return <button className={`${base} ${variantClasses}`}>{label}</button>;
      }
      case 'card': {
        const elevation = props.elevation as string;
        const shadow =
          elevation === 'high'
            ? 'shadow-glowStrong'
            : elevation === 'low'
              ? 'shadow-sm'
              : 'shadow-glow';
        return (
          <div className={`w-full rounded-2xl border border-border bg-surface/80 p-6 ${shadow}`}>
            <p className="text-sm font-semibold text-white">{label}</p>
            <p className="mt-2 text-xs text-text-secondary">
              Drop additional components inside this card to build complex layouts.
            </p>
          </div>
        );
      }
      default:
        return label;
    }
  };

  return (
    <section className="rounded-3xl border border-border bg-background/80 p-6 shadow-glow">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">Live preview</p>
          <h3 className="text-lg font-semibold text-white">See your layout render instantly</h3>
        </div>
        <span className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
          Desktop
        </span>
      </div>
      <div className="grid gap-6">
        {orderedNodes.map((node) => (
          <div
            key={node.id}
            className={
              node.data.props.align === 'center'
                ? 'flex justify-center text-center'
                : node.data.props.align === 'right'
                  ? 'flex justify-end text-right'
                  : 'text-left'
            }
          >
            {renderNode(node.data.type, node.data.label, node.data.props)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviewPanel;
