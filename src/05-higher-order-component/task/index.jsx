import withUserDataAndPermissions from "./hoc/withUserDataAndPermissions";
import ReportsPage from "./components/ReportsPage";
import ProfilePage from "./components/ProfilePage";
import AdminPanel from "./components/AdminPanel";
import EditorPage from "./components/EditorPage";
import userExamples from "./utils/userExamples";
import Roles from "./components/Roles";
import { useState } from "react";

// Wrap components with HOC (no permission == always shown)
const ProfilePageWithData = withUserDataAndPermissions(ProfilePage);
const ReportsPageWithData = withUserDataAndPermissions(ReportsPage, "report");
const AdminPanelWithData = withUserDataAndPermissions(AdminPanel, "admin");
const EditorPageWithData = withUserDataAndPermissions(EditorPage, "edit");

const DashboardDynamicUserWithHOCTask = () => {
  const [user, setUser] = useState(userExamples[0]); // default: Admin

  return (
    <div className="max-w-7xl mx-auto p-2">
      <h1 className="text-2xl font-bold text-center mt-2 mb-4">
        🔐 Dynamic Permission Demo
      </h1>

      <Roles userId={user.id} setUser={setUser} />

      {/* Live HOC-rendered components */}
      <div className="space-y-3">
        <ProfilePageWithData user={user} />

        <AdminPanelWithData user={user} />
        <ReportsPageWithData user={user} />
        <EditorPageWithData user={user} />
      </div>
    </div>
  );
};

export default DashboardDynamicUserWithHOCTask;
