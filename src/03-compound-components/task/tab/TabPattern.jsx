const Tabs = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

const TabList = ({ children }) => {
  return <div className="mb-2">{children}</div>;
};

const Tab = ({ isActive, onTabClick, children }) => {
  return (
    <button
      onClick={onTabClick}
      className={`px-2 py-1 font-medium border rounded-sm transition-colors cursor-pointer capitalize 
        ${
          isActive
            ? "border-yellow-500 text-yellow-500"
            : "border-transparent text-gray-200 hover:text-gray-300"
        }`}
    >
      {children}
    </button>
  );
};

const TabPanel = ({ isActive, children }) => {
  if (!isActive) return null;

  return <div className="py-2 text-lg pl-2">{children}</div>;
};

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export default Tabs;
