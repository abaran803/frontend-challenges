import { useState } from 'react';
import Up from '@/assets/svgs/up_small.svg?react';
import Down from '@/assets/svgs/down_small.svg?react';
import type { IOption } from '@/types/core';
import Typography from '@/components/core/typography';

interface SortDropdownProps {
  title: string;
  options: IOption[];
}

const SortDropdown = (props: SortDropdownProps) => {
  const { title, options } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-[220px] flex flex-col gap-1">
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className="w-[100%] h-[56px] bg-[#fbfbfb] py-2.5 pl-3 flex justify-between items-center"
      >
        <div className="text-[24px]/9 text-black-light font-medium">
          {title}
        </div>
        <div className="w-[38px] h-[38px] flex justify-center items-center cursor-pointer">
          {isExpanded ? <Up /> : <Down />}
        </div>
      </div>
      {isExpanded && (
        <div className="border rounded-[5px] overflow-hidden border-[#6f6f6f4d]">
          {options.map((option: IOption) => (
            <div key={option.id} className="w-[100%] h-[56px] p-3 bg-white">
              <Typography variant="label">{option.title}</Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
