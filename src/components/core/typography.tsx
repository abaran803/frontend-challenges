// components/ui/avatar-with-status.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const typographyVariants = cva('', {
  variants: {
    variant: {
      'small-title': 'typography-small-title',
      'medium-title': 'typography-medium-title',
      'body-light': 'typography-body-light',
      body: 'typography-body',
      label: 'typography-label',
      'small-light': 'typography-small-light',
      'body-22': 'typography-body-22',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

function Typography({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof typographyVariants>) {
  return (
    <div
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

export default Typography;
