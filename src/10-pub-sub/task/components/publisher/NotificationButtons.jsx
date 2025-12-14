import { EVENT_NOTIFICATION_SHOW } from "../../const";
import Button from "../../../../components/ui/Button";
import eventBus from "../../service/eventBus";

const createNotification = (category, message) => ({
  id: crypto.randomUUID(),
  message,
  category,
});

const NotificationButtons = () => {
  const handlePublish = (category) => {
    const message = `This is a ${category} notification!`;
    const notification = createNotification(category, message);

    eventBus.publish(EVENT_NOTIFICATION_SHOW, notification);
  };

  return (
    <div className="flex items-center gap-4 justify-center p-4 border rounded border-slate-600">
      <Button
        variant="confirm"
        className="w-fit"
        onClick={() => handlePublish("success")}
      >
        Trigger Success
      </Button>

      <Button
        variant="danger"
        className="w-fit"
        onClick={() => handlePublish("error")}
      >
        Trigger Error
      </Button>

      <Button
        variant="caution"
        className="w-fit"
        onClick={() => handlePublish("warning")}
      >
        Trigger Warning
      </Button>
    </div>
  );
};

export default NotificationButtons;
