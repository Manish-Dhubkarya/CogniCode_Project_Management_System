import React from 'react';

interface Button2Props {
  width: string;
  height: string;
  value: string;
}

const Button2: React.FC<Button2Props> = ({ width, height, value }) => {
  return (
    <div
      className={`${width} ${height} border border-black rounded-[5px] px-5 py-1 shadow-[0px_4px_4px_0px_#00000040] bg-[#1B7BFF] flex items-center justify-center text-white text-sm cursor-pointer`}
    >
      {value}
    </div>
  );
};

export default Button2;
