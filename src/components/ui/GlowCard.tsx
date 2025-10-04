import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface GlowCardProps extends PropsWithChildren {
  className?: string;
  title?: string;
  description?: string;
}

const GlowCard = ({ className, title, description, children }: GlowCardProps) => {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-2xl border border-accent/20 bg-surface/80 p-6 shadow-glow transition hover:border-accent/60',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-80" />
      <div className="relative space-y-3">
        {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
        {description && <p className="text-sm text-text-secondary">{description}</p>}
        {children}
      </div>
      <div className="pointer-events-none absolute -inset-0.5 -z-10 bg-accent/10 blur-3xl" />
    </div>
  );
};

export default GlowCard;
