import { tabConfig } from "./data";
import { useState } from "react";
import Tabs from "./TabPattern";

const DisplayTab = () => {
//   const tabsName = ["profile", "billing", "notifications"];

  const [activeTab, setActiveTab] = useState(tabConfig[0].id);

  const isActive = (tabName) => activeTab === tabName;

  return (
    <div className="max-w-2xl mx-auto mt-5 p-6 bg-slate-700 rounded-md text-white border border-slate-500">
      <h2 className="text-2xl font-bold mb-4">Tab Settings</h2>

      <Tabs>
        <Tabs.List>
          {tabConfig.map((tab) => (
            <Tabs.Tab
              key={tab.id}
              isActive={isActive(tab.id)}
              onTabClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {tabConfig.map((tab) => (
          <Tabs.Panel key={tab.id} isActive={isActive(tab.id)}>
            {tab.content}
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  );
};

export default DisplayTab;
