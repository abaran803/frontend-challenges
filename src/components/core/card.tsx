import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const cardVariants = cva('rounded-[20px] bg-white', {
  variants: {
    variant: {
      default: '',
      shadow: 'drop-shadow',
      outlined: '',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'shadow',
    size: 'default',
  },
});

function Card({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="div"
      className={cn(cardVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Card, cardVariants };
