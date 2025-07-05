import { useEffect, useState } from "react";
import { FaRegUserCircle, FaUser, FaUserCircle } from "react-icons/fa";
interface ProfileWithDesignationProps {

}
const ProfileWithDesignation = () => {
    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const isXS = width > 480 && width <= 639;
  const isSM = width > 640 && width <= 767;
  const isMD = width > 768 && width <= 1023;
  const isLG = width > 1024 && width <= 1279;
  const isXL = width > 1280 && width <= 1536;
  const is2XL = width > 1536;
  return (
    <div className="flex  items-start ">
        <div className="flex  flex-col items-center justify-center">
        <div className={`p-4 relative z-1 rounded-full  w-fit  bg-white border-gray-400 border-3`}>
     <FaUser size={isXS?40:isSM?45:isMD?50: isLG?55:isXL?60:is2XL?65:30} color="#9e9e9e" />
     </div>
     <div style={{ boxShadow: "0px 4px 4px 0px #00000040" }} className={`flex absolute max-w-[160px] min-w-[140px] items-center justify-start rounded-[5px] border-[1px] border-black ${isXS?"ml-48 py-2":isSM?"ml-50 py-2":isMD?"ml-50 py-2.5":isLG?"ml-52 py-3": isXL?"ml-55 py-3": is2XL?"ml-55 py-3":"ml-45 py-2"}  mb-5 bg-[#1B7BFF] pr-2 pl-7  `}>
        <div className={`${isMD || isLG || isXL || is2XL?"text-[12px]":"text-[10px]"} text-white font-medium`}>Full Stack Developer</div>
      </div>
     
     
     <div className={`${isMD || isLG || isXL || is2XL?"text-[12px]":"text-[10px]"}  pt-1 font-normal text-black`}>Manish Dhubkarya</div>
      <div className={`text-black absolute  ${isMD || isLG || isXL || is2XL?"mt-12 ml-35  text-[12px]":"mt-10 ml-28  text-[10px]"}  font-medium -tracking-[0.02rem]`} >Profile</div>

     </div>
      
    </div>
  );
}
export default ProfileWithDesignation;
