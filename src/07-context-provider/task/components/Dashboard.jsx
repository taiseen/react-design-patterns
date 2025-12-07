import { useLanguage } from "../provider/LanguageProvider";
import { useAuth } from "../provider/AuthProvider";
import { formatDate } from "../helper";
import GroupData from "./GroupData";
import AuthInput from "./AuthInput";

const Dashboard = () => {
  const { getTranslation, currentLanguage } = useLanguage();
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <AuthInput />;

  return (
    <div className="p-4 rounded shadow bg-slate-200 text-gray-900 space-y-4">
      <h2 className="text-2xl font-bold mb-4">
        {getTranslation("welcome")}, {user.name}!
      </h2>

      <p className="flex items-center justify-between">
        <span>{getTranslation("todaysSummary")}</span>
        <span>{formatDate(currentLanguage)}</span>
      </p>

      <div className="grid grid-cols-2 gap-1">
        <GroupData>
          <GroupData.Text>{getTranslation("totalRevenue")}:</GroupData.Text>
          <GroupData.Number>10,000</GroupData.Number>
        </GroupData>

        <GroupData>
          <GroupData.Text>{getTranslation("totalExpenses")}:</GroupData.Text>
          <GroupData.Number>5,000</GroupData.Number>
        </GroupData>

        <GroupData>
          <GroupData.Text>{getTranslation("netProfit")}:</GroupData.Text>
          <GroupData.Number>5,000</GroupData.Number>
        </GroupData>

        <GroupData>
          <GroupData.Text>{getTranslation("currentStocks")}:</GroupData.Text>
          <GroupData.Number>120 {getTranslation("units")}</GroupData.Number>
        </GroupData>
      </div>

      <div className="space-y-2">
        <p>{getTranslation("salesImprovementTip")}</p>
        <p>{getTranslation("additionalInfo")}</p>
      </div>
    </div>
  );
};

export default Dashboard;
