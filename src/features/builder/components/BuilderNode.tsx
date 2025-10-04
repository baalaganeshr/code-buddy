import type { NodeProps } from 'reactflow';
import clsx from 'clsx';
import type { BuilderNodeData } from '@/store/builderStore';

const typeStyles: Record<string, string> = {
  heading: 'text-2xl font-semibold',
  subheading: 'text-xl font-medium text-text-secondary',
  paragraph: 'text-sm leading-relaxed text-text-secondary',
  button:
    'inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-glow',
  card: 'rounded-2xl border border-border bg-background/80 p-4 text-sm text-text-secondary',
};

const BuilderNode = ({ data, selected }: NodeProps<BuilderNodeData>) => {
  const content = () => {
    switch (data.type) {
      case 'heading':
      case 'subheading':
      case 'paragraph':
        return data.label;
      case 'button':
        return data.label;
      case 'card':
        return (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-text-primary">{data.label}</p>
            <p className="text-xs text-text-secondary">
              Drag content into this card or connect automation logic.
            </p>
          </div>
        );
      default:
        return data.label;
    }
  };

  return (
    <div
      className={clsx(
        'rounded-2xl border border-border bg-surface/80 px-6 py-4 text-left shadow-lg backdrop-blur-md',
        selected && 'border-accent/70 shadow-glowStrong',
      )}
    >
      <div className={clsx('text-white', typeStyles[data.type] ?? '')}>{content()}</div>
    </div>
  );
};

export default BuilderNode;
