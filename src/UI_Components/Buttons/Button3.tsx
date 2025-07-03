import React from 'react';

interface Button3Props {
  width: string;
  height: string;
  value: string;
}

const Button3: React.FC<Button3Props> = ({ width, height, value }) => {
  return (
    <div
      className={`${width} ${height} mix-blend-hard-light rounded-[7px] flex items-center justify-center text-white text-sm cursor-pointer`}
      style={{
          background: 'linear-gradient(90deg, #012557 0%, #0251BD 100%)',
      }}
    >
      {value}
    </div>
  );
};

export default Button3;
