import { Input } from '@/components/core/input';
import { useState, type ChangeEvent } from 'react';

interface BoardTestProps {
  title?: string;
  subtitle?: string;
  time?: string;
  isEditing?: boolean;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
}

const BoardText = (props: BoardTestProps) => {
  const { title, subtitle, time, isEditing, setIsEditing } = props;
  const [tempTitle, setTempTitle] = useState(title);

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    if (setTempTitle) {
      setTempTitle(event.target.value);
    }
  };
  return (
    <div className="flex flex-col mx-1.5 gap-0.25">
      {isEditing && (
        <div className="flex justify-between items-center">
          <div>
            <Input
              value={tempTitle}
              onChange={handleChangeTitle}
              placeholder={title}
              className="text-[28px]/10.5 font-medium text-black-light"
            />
          </div>
          <div
            onClick={() => setIsEditing?.(false)}
            className="text-[20px]/7.5 text-grey-shadow font-medium relative -left-16 cursor-pointer"
          >
            Cancel
          </div>
        </div>
      )}
      {!isEditing && (
        <>
          <div className="text-[28px]/10.5 font-medium text-black-light">
            {title}
          </div>
          <div className="flex gap-3.5 items-center">
            <div className="text-[18px]/7 font-light text-black-light">
              {subtitle}
            </div>
            <div className="text-grey-shadow text-[16px]/6 font-light">
              {time}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BoardText;
