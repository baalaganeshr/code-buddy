import type { Node } from 'reactflow';
import type { BuilderNodeData } from '@/store/builderStore';

export const generateComponentCode = (nodes: Node<BuilderNodeData>[]) => {
  const ordered = [...nodes].sort((a, b) => a.position.y - b.position.y);

  const body = ordered
    .map((node) => {
      const props = node.data.props;
      switch (node.data.type) {
        case 'heading':
          return `<h1 className="text-4xl font-semibold text-white">${node.data.label}</h1>`;
        case 'subheading':
          return `<h2 className="text-2xl font-medium text-gray-300">${node.data.label}</h2>`;
        case 'paragraph':
          return `<p className="max-w-3xl text-gray-400">${node.data.label}</p>`;
        case 'button': {
          const variant = props.variant ?? 'accent';
          const variantClass =
            variant === 'outline'
              ? 'border border-rose-500 text-white'
              : variant === 'ghost'
                ? 'bg-transparent text-rose-400'
                : 'bg-rose-500 text-white shadow';
          return `<button className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium ${variantClass}">${node.data.label}</button>`;
        }
        case 'card':
          return `<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"><h3 className="text-lg font-semibold text-white">${node.data.label}</h3><p className="mt-2 text-sm text-gray-400">Drop additional components inside this card to build complex layouts.</p></div>`;
        default:
          return `<>${node.data.label}</>`;
      }
    })
    .join('\n    ');

  const wrapper = `import React from 'react';

export const GeneratedPage = () => {
  return (
    <main className="min-h-screen bg-[#050505] px-8 py-20 text-white">
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        ${body}
      </section>
    </main>
  );
};
`;

  return wrapper;
};
