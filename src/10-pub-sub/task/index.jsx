import NotificationButtons from "./components/publisher/NotificationButtons";
import NotificationPanel from "./components/subscriber/NotificationPanel";
import Button from "../../components/ui/Button";

const PubSubTask = () => {
  const handleOpenTab = () => window.open("day-10-task", "_blank");

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-3 items-center justify-baseline">
        <h1 className="text-xl">Pub/Sub - Notifications System</h1>

        <Button className="w-fit" size="sm" onClick={handleOpenTab}>
          New Tab
        </Button>
      </div>

      {/* publisher */}
      <NotificationButtons />

      {/* subscriber */}
      <NotificationPanel />
    </div>
  );
};

export default PubSubTask;
