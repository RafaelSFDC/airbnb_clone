"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";

type HeartButtonProps = {
  listingId: string;
  curretUser?: SafeUser | null;
};

const HeartButton = ({ listingId, curretUser }: HeartButtonProps) => {
  const hasFavorited = false;
  // const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  // };
  const toggleFavorite = () => {};
  return (
    <div
      className="relative hover:opacity-80 transition cursor-pointer"
      onClick={toggleFavorite}
    >
      <AiOutlineHeart className="fill-white absolute -top-[2px] -right-[2px]" />
      <AiFillHeart
        className={
          hasFavorited
            ? "fill-red-500 absolute -top-[2px] -right-[2px]"
            : "fill-neutral-500/70 absolute -top-[2px] -right-[2px]"
        }
      />
    </div>
  );
};

export default HeartButton;
