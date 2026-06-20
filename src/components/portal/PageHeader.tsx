import type { ReactNode } from "react";

export function PageHeader({
  eyebrow, title, description, action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
      <div className="min-w-0">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-deep">{eyebrow}</p>
        )}
        <h2 className="mt-1 truncate font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
