// components/ui/avatar-with-status.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import EditIcon from '@/assets/svgs/edit.svg?react';

const editVariants = cva('flex justify-center items-center', {
  variants: {
    variant: {
      filled: 'w-[50px] h-[50px] rounded-full bg-white text-black-light',
    },
  },
  defaultVariants: {
    variant: 'filled',
  },
});

function Edit({
  className,
  variant,
  onClick,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof editVariants>) {
  return (
    <div
      onClick={onClick}
      className={cn(editVariants({ variant, className }))}
      {...props}
    >
      <div className="w-[30px] h-[30px] flex justify-center items-center active:w-[42px]">
        <EditIcon className="active:w-[19px] active:h-[19px]" />
      </div>
    </div>
  );
}

export default Edit;
