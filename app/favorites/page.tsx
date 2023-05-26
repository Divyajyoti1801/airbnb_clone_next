import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavorites";
import EmptyState from "../components/EmptyState";
import FavoriteClient from "./FavoriteClient";
const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login!" />;
  }
  if (listings.length === 0) {
    return (
      <EmptyState
        title="No Favorites"
        subtitle="Seems like you do not have any favorites"
      />
    );
  }
  return <FavoriteClient listings={listings} currentUser={currentUser} />;
};

export default FavoritesPage;
