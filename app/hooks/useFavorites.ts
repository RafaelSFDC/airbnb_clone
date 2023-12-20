import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

import { SafeUser } from "../types";

import useLoginModal from "./useLoginModal";
import { toast } from "sonner";

type IUseFavorite = {
  listingId: string;
  currentUser?: SafeUser | null;
};

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      async function toggleFavorite() {
        hasFavorited
          ? await axios.delete(`/api/favorites/${listingId}`)
          : await axios.post(`/api/favorites/${listingId}`);
        router.refresh();
      }

      toast.promise(toggleFavorite(), {
        loading: "Processing...",
        success: "Success!",
        error: "Something went wrong",
      });
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
