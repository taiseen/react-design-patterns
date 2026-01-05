import Visitors from "./Visitors";
import UserCard from "./UserCard";
import Revenue from "./Revenue";

const Dashboard = () => {
  return (
    <>
      <UserCard user={user} />

      <Revenue stats={stats} />

      <Visitors />
    </>
  );
};

export default Dashboard;
