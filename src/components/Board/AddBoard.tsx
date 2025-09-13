import { cn } from '@/lib/utils';
import AddIcon from '@/assets/svgs/add.svg?react';

interface AddBoardProps {
  className?: '';
}

const AddBoard = (props: AddBoardProps) => {
  const { className = '' } = props;
  return (
    <div
      className={cn(
        'w-[100%] h-[100%] flex flex-col justify-center items-center gap-4',
        className
      )}
    >
      <div className="w-20 h-20 border-6 border-grey-shadow rounded-full flex justify-center items-center">
        <AddIcon />
      </div>
      <div className="text-[22px]/8 font-medium">New Board</div>
    </div>
  );
};

export default AddBoard;
