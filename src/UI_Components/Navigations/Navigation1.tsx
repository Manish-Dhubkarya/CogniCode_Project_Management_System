import React, { useState } from "react";

const tabs = ["Requests", "Active", "On-Going", "Completed", "Employees"];

const NavigationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Requests");

  return (
    <div className="flex" style={{ transform: "rotate(0.3deg)" }}>
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab;

        // Base zIndex: first tab gets highest
        let zIndex = tabs.length - index;

        if (isActive) {
          zIndex = tabs.length - index - 0.5; // Put it just below previous, above next
        }

        return (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-1 flex items-center justify-center border border-blue-500
              text-sm cursor-pointer transition-all duration-200 ease-in-out select-none
              rounded-l-md rounded-r-md
              ${isActive ? `bg-white font-semibold scale-[1.05] h-[40px]` : `bg-[#F8FAFC] h-[35px]`}
              ml-[-10px] transform skew-x-[-12deg]`}
            style={{ zIndex }}
          >
            <div className="transform skew-x-[12deg]">
              {tab}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NavigationTabs;
