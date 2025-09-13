import AddBoard from '@/components/Board/AddBoard';
import BoardText from '@/components/Board/BoardText';
import ImageHolder from '@/components/Board/ImageHolder';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface BoardProps {
  title?: string;
  subtitle?: string;
  time?: string;
  className?: string;
  type?: 'default' | 'add';
  variant?: 'small' | 'large';
}

const Board = (props: BoardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    type = 'default',
    time,
    subtitle,
    title,
    className = '',
    variant = 'large',
  } = props;
  const componentWidth = variant === 'small' ? '200px' : '375px';
  const cardHeight = variant === 'small' ? '200px' : '290px';
  return (
    <div
      className={cn(`w-[${componentWidth}] flex flex-col gap-1.5`, className)}
    >
      <div
        className={`w-[100%] h-[${cardHeight}] bg-white rounded-[10px] overflow-hidden`}
      >
        {type === 'add' && <AddBoard />}
        {type === 'default' && (
          <ImageHolder
            variant={variant}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
      <BoardText
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        title={title}
        subtitle={subtitle}
        time={time}
      />
    </div>
  );
};

export default Board;
