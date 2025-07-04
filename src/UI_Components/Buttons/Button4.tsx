import React from 'react';

interface Button3Props {
  value1: string;
  value2: string;
}

const Button4: React.FC<Button3Props> = ({ value1, value2 }) => {
  return (
    <div
      className={`
        sm:px-9 px-7 py-1.5 
        
        
        font-medium
        leading-5
        border-[1.5px]
        border-black
        rounded-[25px] 
        flex flex-col items-center justify-center 
        -tracking-[0.03rem] 
        text-white sm:text-[16px] text-[12px]
        cursor-pointer
      `}
      style={{
        background: 'radial-gradient(50% 322.36% at 50% 50%, #011B40 0%, #0348A6 100%)',
      }}
    >
      <div>{value1}</div>
      <div>{value2}</div>
    </div>
  );
};

export default Button4;
