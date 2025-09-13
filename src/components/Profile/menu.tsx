import { cn } from '@/lib/utils';

interface ProfileMenuProps {
  item: string;
  selected?: boolean;
}

const ProfileMenu = (props: ProfileMenuProps) => {
  const { item, selected = false } = props;
  return (
    <div
      className={cn(
        'w-[400px] h-[70px] bg-[#d7e0db] text-black-light py-5 px-12.5 typography-label hover:font-medium',
        selected ? 'bg-white font-medium' : ''
      )}
    >
      {item}
    </div>
  );
};

export default ProfileMenu;
