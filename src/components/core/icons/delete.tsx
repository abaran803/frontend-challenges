import DeleteIcon from '@/assets/svgs/delete.svg?react';

interface IDelete {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Delete = (props: IDelete) => {
  const { onClick } = props;
  return (
    <div
      className="text-black-light w-8.5 h-8.5 flex items-center justify-center"
      onClick={onClick}
    >
      <DeleteIcon className="hover:[&>path]:stroke-grey-shadow" />
    </div>
  );
};

export default Delete;
