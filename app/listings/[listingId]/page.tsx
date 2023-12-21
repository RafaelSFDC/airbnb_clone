import getListingById from "@/app/actions/getListingById";
import ListingClient from "./ListingClient";
import getCurrentUser from "@/app/actions/getCurrentUser";

type Params = {
  listingId?: string;
};

const ListingPage = async ({ params }: { params: Params }) => {
  const listings = await getListingById(params);
  const currentUser = await getCurrentUser();
  if (!listings) {
    return <div>Listing not found</div>;
  }
  return <ListingClient listing={listings} currentUser={currentUser} />;
};

export default ListingPage;
