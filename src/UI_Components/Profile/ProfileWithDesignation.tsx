import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

interface ProfileWithDesignationProps{
  Designation:string;
  EmployeeName:string;
  IsSmall:boolean;
  borderColor?:string;

}
const ProfileWithDesignation:React.FC<ProfileWithDesignationProps> = (props) => {
    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  //  const isXXS =width<=480;
    const isXS = width > 480 && width <= 640;
    const isSM = width > 640 && width <= 768;
    const isMD = width > 768 && width <= 1024;
    const isLG = width > 1024 && width <= 1280;
    const isXL = width > 1280 && width <= 1536;
    const is2XL = width > 1536;
  return (
    <div className="flex  items-start ">
        <div className="flex  flex-col items-center justify-center">
        <div className={`p-4 relative z-1 rounded-full  w-fit  bg-white ${props.borderColor? props.borderColor:"border-gray-400"}  border-3`}>
          {props.IsSmall?
          <FaUser size={isXS?25:isSM?30:isMD?35: isLG?40:isXL?45:is2XL?40:15} color="#9e9e9e" />:
          <FaUser size={isXS?40:isSM?45:isMD?50: isLG?55:isXL?60:is2XL?65:30} color="#9e9e9e" />
          }
     
     </div>
     {props.IsSmall?
     <div style={{ boxShadow: "0px 4px 4px 0px #00000040" }} className={`flex absolute max-w-[160px] min-w-[160px] items-center justify-start rounded-[5px] border-[1px] border-black ${isXS?"ml-48 py-1":isSM?"ml-50 py-1":isMD?"ml-50 py-1.5":isLG?"ml-52 py-2": isXL?"ml-55 py-2": is2XL?"ml-55 py-2":"ml-45 py-1.5"}  mb-5 bg-[#1B7BFF] pr-2 pl-7  `}>
        <div className={`${isMD || isLG || isXL || is2XL?"text-[12px]":"text-[10px]"} text-white font-medium`}>{props.Designation}</div>
      </div>:
      <div style={{ boxShadow: "0px 4px 4px 0px #00000040" }} className={`flex absolute max-w-[160px] min-w-[160px] items-center justify-start rounded-[5px] border-[1px] border-black ${isXS?"ml-48 py-2":isSM?"ml-50 py-2":isMD?"ml-50 py-2.5":isLG?"ml-52 py-3": isXL?"ml-55 py-3": is2XL?"ml-55 py-3":"ml-45 py-2"}  mb-5 bg-[#1B7BFF] pr-2 pl-7  `}>
        <div className={`${isMD || isLG || isXL || is2XL?"text-[12px]":"text-[10px]"} text-white font-medium`}>{props.Designation}</div>
      </div>}
     
     
     <div className={`${isMD || isLG || isXL || is2XL?"text-[12px]":"text-[10px]"}  pt-1 font-normal text-black`}>{props.EmployeeName}</div>
      <div className={`text-black absolute  ${isMD || isLG || isXL || is2XL?"mt-12 ml-35  text-[12px]":"mt-10 ml-28  text-[10px]"}  font-medium -tracking-[0.02rem]`} >Profile</div>

     </div>
      
    </div>
  );
}
export default ProfileWithDesignation;
