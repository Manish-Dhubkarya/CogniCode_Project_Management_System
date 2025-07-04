import React from 'react';

interface Button2Props {
  value: string;
}

const Button2: React.FC<Button2Props> = ({ value }) => {
  return (
    <div
      className={`
        border border-black 
        rounded-[5px] 
        font-medium
        px-5 py-1 
        shadow-[0px_4px_4px_0px_#00000040] 
        bg-[#1B7BFF] 
        flex items-center justify-center 
        text-white 
        text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]
        cursor-pointer
      `}
    >
      {value}
    </div>
  );
};

export default Button2;
