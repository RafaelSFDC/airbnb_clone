"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";
import useFavorite from "../hooks/useFavorites";

type HeartButtonProps = {
  listingId: string;
  currentUser?: SafeUser | null;
};

const HeartButton = ({ listingId, currentUser }: HeartButtonProps) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser: currentUser,
  });
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
