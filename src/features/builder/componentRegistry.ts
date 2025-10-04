import type { ComponentType } from '@/store/builderStore';
import type { LucideIcon } from 'lucide-react';
import { Heading1, Heading2, AlignLeft, MousePointerClick, SquareStack } from 'lucide-react';

export interface ComponentDefinition {
  type: ComponentType;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const componentLibrary: ComponentDefinition[] = [
  {
    type: 'heading',
    name: 'Heading',
    description: 'Large hero titles for sections and callouts.',
    icon: Heading1,
  },
  {
    type: 'subheading',
    name: 'Subheading',
    description: 'Secondary heading to support your main message.',
    icon: Heading2,
  },
  {
    type: 'paragraph',
    name: 'Paragraph',
    description: 'Body copy for explaining features or onboarding steps.',
    icon: AlignLeft,
  },
  {
    type: 'button',
    name: 'Button',
    description: 'Primary action with accent glow states.',
    icon: MousePointerClick,
  },
  {
    type: 'card',
    name: 'Card',
    description: 'Content container with surface glow and spacing controls.',
    icon: SquareStack,
  },
];
