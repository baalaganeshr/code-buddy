import { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange,
  ReactFlowProvider,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useBuilderStore, type ComponentType } from '@/store/builderStore';
import BuilderNode from './BuilderNode';

const nodeTypes = { component: BuilderNode };
const edgeTypes = {};

const CanvasInner = () => {
  const { nodes, edges, setNodes, setEdges, addNode } = useBuilderStore();
  const { project } = useReactFlow();

  const onNodesChange = useCallback<OnNodesChange>(
    (changes) => {
      setNodes(applyNodeChanges(changes, nodes));
    },
    [nodes, setNodes],
  );

  const onEdgesChange = useCallback<OnEdgesChange>(
    (changes) => {
      setEdges(applyEdgeChanges(changes, edges));
    },
    [edges, setEdges],
  );

  const onConnect = useCallback<OnConnect>(
    (connection) => {
      setEdges(addEdge(connection, edges));
    },
    [edges, setEdges],
  );

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const type = event.dataTransfer.getData('application/reactflow') as ComponentType | '';
      if (!type) return;

      const bounds = event.currentTarget.getBoundingClientRect();
      const position = project({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
      addNode(type, position);
    },
    [addNode, project],
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      fitView
      onDrop={handleDrop}
      onDragOver={handleDragOver}

      className="rounded-3xl border border-border bg-background/80 shadow-glow"
    >
      <Background color="rgba(255, 26, 67, 0.2)" gap={24} />
      <MiniMap pannable zoomable className="!bg-background/90" />
      <Controls className="!bg-background/80" />
    </ReactFlow>
  );
};

const BuilderCanvas = () => (
  <ReactFlowProvider>
    <CanvasInner />
  </ReactFlowProvider>
);

export default BuilderCanvas;
