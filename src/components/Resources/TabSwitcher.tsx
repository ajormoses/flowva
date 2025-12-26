import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
  defaultIndex?: number;
}

const TabSwitcher = ({ tabs, defaultIndex = 0 }: TabSwitcherProps) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex ">
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;

          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "border-b-2 border-purple-600 text-purple-600 bg-purple-100"
                    : "text-gray-500 hover:text-purple-500"
                }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="pt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabSwitcher;
