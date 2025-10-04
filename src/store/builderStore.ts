import { create } from 'zustand';
import type { Edge, Node, XYPosition } from 'reactflow';

export type ComponentType = 'heading' | 'subheading' | 'paragraph' | 'button' | 'card';

export interface BuilderNodeData {
  type: ComponentType;
  label: string;
  props: Record<string, unknown>;
}

export interface BuilderState {
  nodes: Node<BuilderNodeData>[];
  edges: Edge[];
  selectedNodeId?: string;
  addNode: (componentType: ComponentType, position: XYPosition) => void;
  updateNode: (id: string, data: Partial<BuilderNodeData>) => void;
  removeNode: (id: string) => void;
  setNodes: (nodes: Node<BuilderNodeData>[]) => void;
  setEdges: (edges: Edge[]) => void;

  selectNode: (id?: string) => void;
}

const makeId = () => crypto.randomUUID();

const initialNodes: Node<BuilderNodeData>[] = [
  {
    id: makeId(),
    type: 'component',
    position: { x: 200, y: 100 },
    data: {
      type: 'heading',
      label: 'Welcome to Code Buddy',
      props: { align: 'center' },
    },
  },
  {
    id: makeId(),
    type: 'component',
    position: { x: 220, y: 200 },
    data: {
      type: 'paragraph',
      label: 'Launch production-ready apps in minutes with a neon-fast visual builder.',
      props: { align: 'center', width: 'medium' },
    },
  },
  {
    id: makeId(),
    type: 'component',
    position: { x: 260, y: 320 },
    data: {
      type: 'button',
      label: 'Start Building',
      props: { variant: 'accent' },
    },
  },
];

export const useBuilderStore = create<BuilderState>((set) => ({
  nodes: initialNodes,
  edges: [],
  selectedNodeId: undefined,
  addNode: (componentType, position) => {
    const defaults: Record<ComponentType, Partial<BuilderNodeData>> = {
      heading: { label: 'Heading', props: { align: 'left' } },
      subheading: { label: 'Subheading', props: { align: 'left' } },
      paragraph: {
        label: 'Tell your story with a paragraph that spans multiple lines.',
        props: { width: 'wide' },
      },
      button: { label: 'Primary Action', props: { variant: 'accent' } },
      card: { label: 'Card Component', props: { elevation: 'medium' } },
    };

    set((state) => ({
      nodes: [
        ...state.nodes,
        {
          id: makeId(),
          type: 'component',
          position,
          data: {
            type: componentType,
            label: defaults[componentType].label ?? componentType,
            props: defaults[componentType].props ?? {},
          },
        },
      ],
      selectedNodeId: undefined,
    }));
  },
  updateNode: (id, data) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id
          ? {
              ...node,
              data: { ...node.data, ...data, props: { ...node.data.props, ...data.props } },
            }
          : node,
      ),
    })),
  removeNode: (id) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== id),
      edges: state.edges.filter((edge) => edge.source !== id && edge.target !== id),
      selectedNodeId: state.selectedNodeId === id ? undefined : state.selectedNodeId,
    })),
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),

  selectNode: (id) => set((state) => {
    if (state.selectedNodeId === id) return state;
    return { selectedNodeId: id };
  }),
}));
