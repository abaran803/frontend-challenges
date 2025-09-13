import Mountain from '@/assets/svgs/mountain.svg?react';
import Edit from '@/components/core/edit';

interface ImageHolderProps {
  variant?: 'small' | 'large';
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageHolder = (props: ImageHolderProps) => {
  const { isEditing, setIsEditing, variant = 'small' } = props;

  return (
    <div className="h-[100%] hover:[&>div>.edit-button]:flex relative">
      <div className="h-[100%] flex gap-0.5">
        <div className="flex-3 bg-[#e9e9e9] flex justify-center items-center">
          <div className="w-20">
            <Mountain className="w-[100%]" />
          </div>
        </div>
        {variant === 'large' && (
          <div className="flex-1 flex flex-col gap-0.5 h-[100%]">
            <div className="flex-1 bg-[#e9e9e9] flex justify-center items-center">
              <div className="w-10">
                <Mountain className="w-[100%]" />
              </div>
            </div>
            <div className="flex-1 bg-[#e9e9e9] flex justify-center items-center">
              <div className="w-10">
                <Mountain className="w-[100%]" />
              </div>
            </div>
          </div>
        )}
        {!isEditing && (
          <Edit
            className="absolute edit-button hidden edit-button bottom-4 right-4"
            onClick={() => setIsEditing(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ImageHolder;
