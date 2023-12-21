"use client";

import { IconType } from "react-icons";

type ListingCategoryProps = {
  icon: IconType;
  label: string;
  description: string;
};

const ListingCategory = ({
  icon: Icon,
  label,
  description,
}: ListingCategoryProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} />
        <div className="flex flex-col">
          <div className="font-semibold text-lg">{label}</div>
          <div className="font-light text-neutral-500">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCategory;
