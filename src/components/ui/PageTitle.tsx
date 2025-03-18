
import React from 'react';
import { cn } from '../../lib/utils';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageTitle({ title, subtitle, className, children }: PageTitleProps) {
  return (
    <div className={cn("mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {children && <div className="mt-2 sm:mt-0">{children}</div>}
    </div>
  );
}
