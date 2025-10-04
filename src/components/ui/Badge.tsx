import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface BadgeProps extends PropsWithChildren {
  className?: string;
}

const Badge = ({ className, children }: BadgeProps) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-accent-soft',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
