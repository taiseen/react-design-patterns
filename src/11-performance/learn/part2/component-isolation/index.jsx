import Visitors from "./Visitors";
import UserCard from "./UserCard";
import Revenue from "./Revenue";
import { memo } from "react";

const MUserCard = memo(UserCard);
const MRevenue = memo(Revenue);

const DashboardIsolated = ({ user = "Jon", stats = "Running" }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-lg font-semibold">Component Isolation:- memo(...)</h1>

      <div className="borderV1 p-2">
        <MUserCard user={user} />

        <MRevenue stats={stats} />

        <Visitors />
      </div>
    </div>
  );
};

export default DashboardIsolated;
