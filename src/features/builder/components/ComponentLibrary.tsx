import { componentLibrary } from '../componentRegistry';
import { useBuilderStore, type ComponentType } from '@/store/builderStore';
import { Button } from '@/components/ui/Button';

const ComponentLibrary = () => {
  const addNode = useBuilderStore((state) => state.addNode);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, type: ComponentType) => {
    event.dataTransfer.setData('application/reactflow', type);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="space-y-5 rounded-3xl border border-border bg-background/80 p-5 shadow-glow">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">Components</p>
        <h3 className="mt-2 text-lg font-semibold text-white">Drag elements into the canvas</h3>
      </div>
      <div className="space-y-4">
        {componentLibrary.map((component) => {
          const Icon = component.icon;
          return (
            <div
              key={component.type}
              draggable
              onDragStart={(event) => handleDragStart(event, component.type)}
              className="group cursor-grab rounded-2xl border border-border bg-surface/80 p-4 transition hover:border-accent/60"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-white">{component.name}</p>
                  <p className="text-xs text-text-secondary">{component.description}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                className="mt-4 w-full text-xs uppercase tracking-[0.2em] text-text-secondary hover:text-white"
                onClick={() => addNode(component.type, { x: 240, y: 180 })}
              >
                Add to canvas
              </Button>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default ComponentLibrary;
