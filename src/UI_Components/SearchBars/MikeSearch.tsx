import React from "react";
import { FiMic } from "react-icons/fi";

const MikeSearch: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          relative 
          w-[90%] 
          h-[34px] 
          bg-white 
          rounded-full
          py-1 
          pl-6
          pr-4 
          flex 
          items-center
          shadow-sm
        "
      >
        <input
          type="text"
          placeholder="Search..."
          className="
            w-full 
            h-full 
            bg-transparent 
            text-black
            border-0 
             text-[14px] 
          font-medium
          tracking-[0.04rem]
            border-b-[1.5px] 
            border-[#C2C2C2]
            focus:border-[#1B7BFF]
            focus:outline-none
            placeholder-[#C2C2C2]
            text-sm
            pb-[2px]
          "
        />
        <FiMic size={15} color="#343434" className="ml-2" />
      </div>
    </div>
  );
};

export default MikeSearch;
