import { useState } from "react";

const NotificationsContent = () => {
  const [useEmail, setUseEmail] = useState("");

  // 🗂️ Define notification options once
  const emailNotifications = [
    {
      id: "account-activity",
      label: "Account activity",
      description: "Security alerts and sign-in notifications.",
      defaultChecked: true,
    },
    {
      id: "product-updates",
      label: "Product updates",
      description: "New features and tips.",
      defaultChecked: true,
    },
    {
      id: "weekly-digest",
      label: "Weekly digest",
      description: "Summary of your activity.",
      defaultChecked: false,
    },
  ];

  return (
    <div className="space-y-5">
      {/* Email Notifications */}
      <div>
        <h3 className="text-lg font-medium text-gray-100">
          Email Notifications
        </h3>

        <div className="w-full">
          <input
            type="text"
            value={useEmail}
            placeholder="Your email address"
            className="px-2 py-1 rounded outline-0 border w-1/2"
            onChange={(e) => setUseEmail(e.target.value)}
          />
        </div>

        <ul className="mt-3 space-y-3">
          {emailNotifications.map((item) => (
            <li key={item.id} className="flex items-center">
              <input
                id={item.id}
                type="checkbox"
                defaultChecked={item.defaultChecked}
                className="mt-0.5 h-4 w-4 cursor-pointer"
              />
              <label
                htmlFor={item.id}
                className="ml-3 text-slate-400 cursor-pointer"
              >
                <strong>{item.label}</strong> – {item.description}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Push Notifications */}
      <div>
        <h3 className="text-lg font-medium text-gray-100">
          Push Notifications
        </h3>

        <p className="mt-2 text-gray-300">
          Enable notifications in your browser settings.
        </p>
      </div>

      {/* Save Button */}
      <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-400 text-sm font-medium cursor-pointer hover:shadow transition">
        Save Preferences
      </button>
    </div>
  );
};

export default NotificationsContent;
