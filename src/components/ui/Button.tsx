import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  glow?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white shadow-glow transition hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft/60',
  secondary:
    'bg-muted text-text-primary border border-border hover:border-accent-soft/80 transition',
  ghost: 'bg-transparent text-text-secondary hover:text-white',
  outline: 'border border-accent/40 text-white hover:bg-accent/10',
};

function Component(
  { className, variant = 'primary', glow, children, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={clsx(
        'group relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium',
        variantStyles[variant],
        glow && 'shadow-glowStrong',
        className,
      )}
      {...props}
    >
      {glow && (
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-accent/20 blur-xl transition-opacity group-hover:opacity-90" />
      )}
      {children}
    </button>
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(Component);
Button.displayName = 'Button';

const MotionButton = motion.create(Button);

export { Button, MotionButton };
