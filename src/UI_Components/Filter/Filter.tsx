import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

interface FilterProps {
  setClose: (value: boolean) => void;
  filters: string[];
  setSelectedFilters: (filters: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({ filters, setClose, setSelectedFilters }) => {
  const [selected, setSelected] = useState<string[]>([]); // Changed to array for multiple selections
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update parent component's selectedFilters whenever local selected state changes
  useEffect(() => {
    setSelectedFilters(selected);
  }, [selected, setSelectedFilters]);

  const handleFilterChange = (filter: string) => {
    const newSelected = selected.includes(filter)
      ? selected.filter((f) => f !== filter)
      : [...selected, filter];
    setSelected(newSelected);
  };

  const handleClearFilters = () => {
    setSelected([]);
  };

  const isXXS = width <= 480;
  const isXS = width > 480 && width <= 640;
  const isSM = width > 640 && width <= 768;
  const isMD = width > 768 && width <= 1024;

  return (
    <div className="flex flex-col items-start mx-auto">
      <div className="w-full flex">
        <div className="w-full items-start flex flex-col justify-between">
          <div className="text-[12px] font-bold mb-2">Filter</div>
          <div className="font-bold text-[12px] mb-4 space-x-[2px]">
            <span
              className="hover:scale-110 cursor-pointer"
              onClick={() => setSelectedFilters(selected)}
            >
              Apply
            </span>
            <span>/</span>
            <span
              className="hover:scale-110 duration-150 transition transform cursor-pointer"
              onClick={handleClearFilters}
            >
              Clear filters
            </span>
          </div>
        </div>
        {(isXXS || isXS || isSM || isMD) && (
          <div onClick={() => setClose(false)} className="p-2 h-fit rounded-full">
            <IoMdCloseCircle size={20} />
          </div>
        )}
      </div>

      <div className="border-black border-[1.5px] bg-white rounded-xl py-5.5 pl-4 pr-8 xs:space-y-3 space-y-4 md:space-y-5 lg:space-y-6">
        {filters.map((filter) => (
          <label
            key={filter}
            className="flex items-center text-start space-x-3 text-black text-[12px] cursor-pointer"
          >
            <span className="relative w-4 h-4">
              <input
                type="checkbox" // Changed from radio to checkbox
                value={filter}
                checked={selected.includes(filter)}
                onChange={() => handleFilterChange(filter)}
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