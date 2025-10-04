import { useMemo } from 'react';
import { useBuilderStore } from '@/store/builderStore';
import { Button } from '@/components/ui/Button';

const PropertiesPanel = () => {
  const { nodes, selectedNodeId, updateNode, removeNode } = useBuilderStore();

  const selectedNode = useMemo(
    () => nodes.find((node) => node.id === selectedNodeId),
    [nodes, selectedNodeId],
  );

  if (!selectedNode) {
    return (
      <aside className="flex h-full flex-col justify-center rounded-3xl border border-border bg-background/80 p-6 text-center text-text-secondary shadow-glow">
        <p>Select a node to edit its properties.</p>
      </aside>
    );
  }

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateNode(selectedNode.id, { label: event.target.value });
  };

  const handlePropChange = (key: string, value: string) => {
    updateNode(selectedNode.id, { props: { ...selectedNode.data.props, [key]: value } });
  };

  return (
    <aside className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-background/80 p-6 shadow-glow">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">Inspector</p>
        <h3 className="mt-2 text-lg font-semibold text-white">{selectedNode.data.type} settings</h3>
      </div>
      <div className="space-y-4 text-left text-sm">
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">Label</span>
          {selectedNode.data.type === 'paragraph' ? (
            <textarea
              className="w-full rounded-xl border border-border bg-surface/80 p-3 text-sm text-white"
              rows={4}
              value={selectedNode.data.label}
              onChange={handleLabelChange}
            />
          ) : (
            <input
              className="w-full rounded-xl border border-border bg-surface/80 p-3 text-sm text-white"
              value={selectedNode.data.label}
              onChange={handleLabelChange}
            />
          )}
        </label>
        {selectedNode.data.type !== 'card' && (
          <label className="block space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Alignment
            </span>
            <select
              className="w-full rounded-xl border border-border bg-surface/80 p-3 text-sm text-white"
              value={(selectedNode.data.props.align as string) ?? 'left'}
              onChange={(event) => handlePropChange('align', event.target.value)}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </label>
        )}
        {selectedNode.data.type === 'button' && (
          <label className="block space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">Variant</span>
            <select
              className="w-full rounded-xl border border-border bg-surface/80 p-3 text-sm text-white"
              value={(selectedNode.data.props.variant as string) ?? 'accent'}
              onChange={(event) => handlePropChange('variant', event.target.value)}
            >
              <option value="accent">Accent</option>
              <option value="outline">Outline</option>
              <option value="ghost">Ghost</option>
            </select>
          </label>
        )}
        {selectedNode.data.type === 'card' && (
          <label className="block space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Elevation
            </span>
            <select
              className="w-full rounded-xl border border-border bg-surface/80 p-3 text-sm text-white"
              value={(selectedNode.data.props.elevation as string) ?? 'medium'}
              onChange={(event) => handlePropChange('elevation', event.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        )}
      </div>
      <div className="mt-auto">
        <Button
          variant="secondary"
          className="w-full text-xs uppercase tracking-[0.2em] text-text-secondary"
          onClick={() => removeNode(selectedNode.id)}
        >
          Remove node
        </Button>
      </div>
    </aside>
  );
};

export default PropertiesPanel;
