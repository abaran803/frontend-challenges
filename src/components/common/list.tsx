import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { Card, type cardVariants } from '@/components/core/card';
import type { IOption } from '@/types/core';
import { useState } from 'react';
import Up from '@/assets/svgs/up.svg?react';
import Down from '@/assets/svgs/down.svg?react';
import RadioInputs from '@/components/core/radioInput';

interface ListProps {
  asCard?: boolean;
  image?: string | null;
  title: string;
  options: IOption[];
}

function List({
  className,
  image = null,
  asCard = true,
  title,
  options,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof cardVariants> &
  ListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  const Comp = asCard ? Card : 'div';
  return (
    <Comp className={className} {...props}>
      <div
        className="flex justify-between items-center p-12.5"
        onClick={handleExpand}
      >
        <div className="flex items-center gap-10">
          {image && (
            <img className="rounded-[10px] w-[200px] h-[200px]" src={image} />
          )}
          <div className="font-[poppins] font-medium text-[28px]/10.5 text-black-light">
            {title}
          </div>
        </div>
        <div className="w-[42px] h-[42px] flex justify-center items-center cursor-pointer">
          {isExpanded ? <Up /> : <Down />}
        </div>
      </div>
      {isExpanded && (
        <RadioInputs
          className="px-12.5 pb-[50px]"
          name="abc"
          options={options}
          deletable
          onOptionChange={() => {}}
        />
      )}
    </Comp>
  );
}

export { List };
