"use client";
import React, { useState } from "react";

interface TabsProps {
  tabs: { name: string; component: React.FC }[];
  prose?: boolean;
}

const Tabs = ({ tabs, prose = false }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].name);

  const ActiveComponent = tabs.find((tab) => tab.name === currentTab)?.component;

  return (
    <div>
      {/* Mobile Dropdown (Hidden on Small Screens) */}
      <div className="sm:hidden">
        <select
          value={currentTab}
          onChange={(e) => setCurrentTab(e.target.value)}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Tabs (Hidden on Mobile) */}
      <nav className="hidden sm:flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setCurrentTab(tab.name)}
            className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 ${
              tab.name === currentTab
                ? "border-b-2 text-teal-600 border-teal-400 dark:text-teal-300"
                : "text-zinc-700 dark:text-zinc-300 dark:hover:text-teal-500"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className={`mt-4 transition-all duration-200 ${prose ? "prose dark:prose-invert" : ""}`}>
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default Tabs;
