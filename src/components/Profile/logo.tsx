import { cn } from '@/lib/utils';
import CameraIcon from '@/assets/svgs/camera.svg?react';

interface ProfileLogoProps {
  logo?: string;
}

const ProfileLogo = (props: ProfileLogoProps) => {
  const { logo } = props;
  return (
    <div
      className={cn(
        'relative w-[200px] h-[200px] rounded-full flex flex-col justify-center items-center gap-1.5',
        logo ? 'border-3 border-black-light' : 'bg-[#d9d9d9]'
      )}
    >
      <div className="w-[45px] h-[45px] bg-white rounded-full"></div>
      <div>
        <div className="w-[90px] h-[40px] bg-white rounded-t-[40px]"></div>
      </div>
      {!logo && (
        <div className="absolute bottom-4 right-0 bg-white w-14 h-14 border border-black-light rounded-full flex justify-center items-center">
          <div className="w-9 h-9 flex justify-center items-center">
            <CameraIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileLogo;
