import React from "react";
import { FiSearch } from "react-icons/fi";

const MainSearchBar: React.FC = () => {
  return (
    <div className="h-[30px] w-[300px] sm:w-[300px] md:w-[320px] lg:w-[349px] relative">
      <input
        type="text"
        placeholder="Search..."
        className="
          w-full h-full 
          pl-3 pr-10 
          text-black
          text-[14px] 
          font-medium
          tracking-[0.04rem]
          rounded-[5px]
          border-[1.5px] border-[#1B7BFF]
          bg-white
          outline-none
          placeholder-gray-500
        "
      />
      <FiSearch color="#343434" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[16px]" />
    </div>
  );
};

export default MainSearchBar;
