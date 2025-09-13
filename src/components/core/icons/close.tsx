import CloseIcon from '@/assets/svgs/close.svg?react';
import { cn } from '@/lib/utils';

interface IClose {
  className: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Close = (props: IClose) => {
  const { onClick, className } = props;
  return (
    <div
      className={cn(
        'text-black-light w-8.5 h-8.5 flex items-center justify-center',
        className
      )}
      onClick={onClick}
    >
      <CloseIcon />
    </div>
  );
};

export default Close;
