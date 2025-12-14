import { useState, useEffect, useCallback, useRef } from "react";
import useEvent from "../../hook/useEvent";
import {
  LOCALSTORAGE_NOTIFICATIONS_KEY,
  EVENT_NOTIFICATION_SHOW,
} from "../../const";

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);
  const timeoutRefs = useRef(new Map()); // Map<notificationId, timeoutId>

  // 🔁 Clean up all timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current.clear();
    };
  }, []);

  // 📤 Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(
      LOCALSTORAGE_NOTIFICATIONS_KEY,
      JSON.stringify(notifications)
    );
  }, [notifications]);

  // 📥 Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCALSTORAGE_NOTIFICATIONS_KEY);
    if (stored) {
      try {
        setNotifications(
          JSON.parse(stored).map((n) => ({ ...n, exiting: false }))
        );
      } catch (e) {
        console.warn("Failed to parse notifications from localStorage", e);
        setNotifications([]);
      }
    }
  }, []);

  // Unified logic to animate + remove a notification
  const scheduleRemoval = useCallback((id) => {
    // 1. Trigger exit animation
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, exiting: true } : n))
    );

    // 2. Remove from state after animation completes
    setTimeout(() => {
      setNotifications((prev) => prev.filter((item) => item.id !== id));
      timeoutRefs.current.delete(id); // clean up ref
    }, 300);
  }, []);

  // 📢 Handle incoming notification event
  const handleNotification = useCallback(
    (data) => {
      setNotifications((prev) => [...prev, { ...data, exiting: false }]);

      const timerId = setTimeout(() => {
        scheduleRemoval(data.id);
      }, 5000);

      timeoutRefs.current.set(data.id, timerId);
    },
    [scheduleRemoval]
  );

  // 📡 Subscribe to event bus
  useEvent(EVENT_NOTIFICATION_SHOW, handleNotification);

  // 🖱️ Manual dismiss
  const dismiss = useCallback(
    (id) => {
      const timerId = timeoutRefs.current.get(id);
      if (timerId) {
        clearTimeout(timerId);
        timeoutRefs.current.delete(id);
      }

      scheduleRemoval(id);
    },
    [scheduleRemoval]
  );

  // 🎨 Dynamic styling by category
  const getCategoryStyle = (category) => {
    switch (category) {
      case "success":
        return "bg-green-100 border-green-500 text-green-800";
      case "error":
        return "bg-red-100 border-red-500 text-red-800";
      case "warning":
        return "bg-yellow-100 border-yellow-500 text-yellow-800";
      default:
        return "bg-gray-100 border-gray-500 text-gray-800";
    }
  };

  return (
    <>
      {/* 🎞️ Scoped keyframes — no global CSS pollution */}
      <style>
        {`
          @keyframes slide-in-right {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-out-right {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
          }
        `}
      </style>

      <div className="fixed top-4 right-4 space-y-2 max-w-md z-50">
        {notifications.map((notify) => (
          <div
            key={notify.id}
            className={`
              p-3 border rounded shadow-md flex justify-between items-center gap-4
              transition-transform
              ${getCategoryStyle(notify.category)}
              ${
                notify.exiting
                  ? "animate-[slide-out-right_0.2s]"
                  : "animate-[slide-in-right_0.2s]"
              }
            `}
          >
            <span>{notify.message}</span>

            <button
              type="button"
              aria-label="Dismiss notification"
              className="rounded-full p-1 w-6 h-6 border cursor-pointer flex items-center justify-center text-lg hover:bg-gray-200"
              onClick={() => dismiss(notify.id)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotificationPanel;
