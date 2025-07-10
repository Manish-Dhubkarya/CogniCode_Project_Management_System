import React from "react";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation1: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-full py-2 px-4 overflow-x-auto no-scrollbar">
      <div
        className="inline-flex pl-2"
        style={{ transform: "rotate(0.2deg)" }}
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab;
          let zIndex = tabs.length - index;
          if (isActive) {
            zIndex = tabs.length - index - 0.5;
            if (index === 0) {
              zIndex = tabs.length - index + 0.5;
            }
          }
          return (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative font-dmsans text-black flex items-center justify-center border-[1.5px] border-[#2C6BC1]
                cursor-pointer select-none rounded-l-md rounded-r-md whitespace-nowrap
                text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px]
                px-4 sm:px-5 md:px-6 lg:px-7
                h-[30px] sm:h-[34px] md:h-[36px] lg:h-[40px]
                ml-[-10px]
                transition-all duration-300 ease-in-out
                ${index === 0 ? "skew-x-[-16deg] z-5" : "transform skew-x-[-16deg]"}
                ${isActive
                  ? "bg-white font-medium scale-[1.15] translate-y-[2.5px] shadow-md"
                  : "bg-[#F8FAFC] font-normal scale-100 translate-y-0 shadow-none"
                }
              `}
              style={{ zIndex }}
            >
              <div className="transform -tracking-[0.03rem] skew-x-[16deg]">
                {tab}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation1;