import React, { useState } from "react";

const filters = [
  "Data Science Projects",
  "UI Design Projects",
  "Coding Projects",
  "Research Papers",
  "Plagarism Removal",
  "Immediate Deadline Projects",
];

const Filter: React.FC = () => {
  const [selected, setSelected] = useState<string>("Immediate Deadline Projects");

  return (
    <div className="flex flex-col items-start mx-auto">
      <div className="text-[12px] font-bold mb-2">Filter</div>
      <div className="font-bold text-[12px] mb-4 space-x-[2px]"><span>Apply</span><span>/</span><span>Clear filters</span></div>

      <div className=" border-black  border-[1.5px] bg-white rounded-xl  py-5.5 pl-4 pr-8 xs:space-y-3 space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7">
        {filters.map((filter) => (
          <label
            key={filter}
            className="flex items-center space-x-3 text-black text-[12px] cursor-pointer"
          >
            <span className="relative w-4  h-4">
              <input
                type="radio"
                name="filter"
                value={filter}
                checked={selected === filter}
                onChange={() => setSelected(filter)}
                className="appearance-none cursor-pointer w-4 h-4 rounded-full border-[1.5px] border-[#0141A0] checked:bg-[#011B40] checked:border-[#011B40]"
              />
            </span>
            <span>{filter}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
