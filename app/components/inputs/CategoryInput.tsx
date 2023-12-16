"use client";
type CategoryInputProps = {
  onClick: (category: string) => void;
  selected?: boolean;
  label: string;
  icon: any;
};
const CategoryInput = ({
  onClick,
  selected,
  label,
  icon: Icon,
}: CategoryInputProps) => {
  return (
    <div
      className={`rounded-xl border-2 p-4 flex flex-col gap3 hover:border-black transition cursor-pointer
  ${selected ? "border-black" : "border-neutral-200"}
`}
      onClick={() => onClick(label)}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
