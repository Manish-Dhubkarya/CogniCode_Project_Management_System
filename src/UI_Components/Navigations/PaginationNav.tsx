import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

interface PaginationNavProps {
  total: number;
}

const PaginationNav: React.FC<PaginationNavProps> = ({ total }) => {
  const [current, setCurrent] = useState(1);

  const handlePrev = () => {
    if (current > 1) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current < total) setCurrent(current + 1);
  };

  return (
    <div className="flex items-center select-none justify-center space-x-3 bg-[#e6e6e6] border border-black px-5 py-1.5 rounded-full w-fit">
        <IoMdArrowDropleft onClick={handlePrev} className='cursor-pointer' size={20} />
      <span className="text-sm font-medium text-black">
        {current} / {total}
      </span>
        <IoMdArrowDropright onClick={handleNext} className='cursor-pointer' size={20} />
    </div>
  );
};

export default PaginationNav;
