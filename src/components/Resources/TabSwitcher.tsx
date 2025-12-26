import clsx from "clsx";
import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
  count?: number;
}

interface TabSwitcherProps {
  tabs: Tab[];
  defaultIndex?: number;
  customHeader?: string;
}

const TabSwitcher = ({
  tabs,
  defaultIndex = 0,
  customHeader,
}: TabSwitcherProps) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className={clsx(customHeader, "flex")}>
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;

          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm font-medium transition-colors flex items-center
                ${
                  isActive
                    ? "border-b-2 border-purple-600 text-purple-600 bg-purple-100"
                    : "text-gray-500 hover:text-purple-500"
                }`}
            >
              {tab.label}
              {typeof tab.count === "number" && (
                <span
                  className={clsx(
                    "ml-2 px-2 py-0.5 text-[10px] rounded-full h-5 w-5 flex items-center justify-center",
                    isActive
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  )}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="pt-8">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabSwitcher;
