import React from "react";

const Tabs = ({ tabs, activeTab, onTabClick }: any) => {
  return (
    <div className="flex justify-center">
      <div className="flex">
        {tabs.map((name: string) => (
          <button
            key={name}
            className={`rounded-full px-3 py-2 text-sm font-medium leading-5 focus:outline-none ${
              activeTab === name
                ? "text-white bg-blue-900 border border-blue-600"
                : "text-gray-400 bg-gray-800"
            }`}
            onClick={() => onTabClick(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
