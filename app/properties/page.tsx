import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "../components/EmptyState";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;
  }

  return <div>page</div>;
};

export default PropertiesPage;
