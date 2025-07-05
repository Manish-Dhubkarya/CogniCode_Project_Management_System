import { useEffect, useState } from "react";
import UserProfile from "../assets/CredientialAssets/UserProfile.jpg";
import Button4 from "../UI_Components/Buttons/Button4";
import MainNavigation from "../UI_Components/Navigations/MainNavigation";

const Profile = () => {
  const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isXXS =width<=638;
    const isXS = width > 480 && width <= 639;
    const isSM = width > 640 && width <= 767;
    const isMD = width > 768 && width <= 1023;
    const isLG = width > 1024 && width <= 1279;
    const isXL = width > 1280 && width <= 1536;
    const is2XL = width > 1536;
  return (
    <div className="flex items-center  justify-center h-screen">
      <MainNavigation isMenuHide={false} />

    <div className={`w-full  ${isXXS || isXS || isSM || isMD || isLG?"":"flex items-end"}   ${isXL || is2XL?"px-[12vw]": isLG?"px-[2vw]":""}   gap-12`}>
      {/* Left Side: Profile Info */}
      <div className={`flex ${isXXS || isXS || isSM || isMD || isLG?"flex-row justify-evenly":"flex-col justify-center"}  items-center w-full ${isXXS || isXS || isSM || isMD || isLG?"":"max-w-xs"}   `}>
        {/* Profile Image */}
        <div className="flex flex-col items-center">
         <div className="w-[215px] h-[215px] rounded-full overflow-hidden border-6  border-gray-300 shadow-md">
          <img
            src={UserProfile}
            alt="User Profile"
            className="w-full h-full p-3  rounded-full object-cover"
          />
        </div>

        {/* Name and Info */}
        <div className="text-center">
          <h2 className="text-[16px] font-normal">Himanshu Verma</h2>
          <p className="text-gray-700 text-[20px] font-medium">UI Designer</p>
          <p className="text-[12px] text-black font-medium mt-1.5">Team Leader : James Gunn</p>
        </div>
        </div>

<div className={`${isXXS || isXS || isSM || isMD || isLG?"mb-20":""}`}>
        {/* Projects Info */}
        <div className="mt-6 text-center tracking-tight leading-tight text-black tex-[16px] font-medium">
          <div className="">Projects Executed</div>
          <div className="">Jan - May 2025</div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <Button4 onClick={()=>alert("Hello")} value1="3" value2="On-Going" />
          <Button4 value1="12" value2="Completed" />
        </div>
        </div>
      </div>

      {/* Right Side: Performance Record */}
      <div className={`flex flex-col w-full ${isXXS || isXS || isSM || isMD || isLG ? "items-center" : "items-start"}`}>
  <div className={`text-[28px] text-black font-medium ${isXXS || isXS || isSM || isMD || isLG ? "text-start mt-10 mb-4" : "mb-6"} -tracking-[0.02rem]`}>
    Performance Record 2024-2025
  </div>

  {[
    { label: "Accuracy", value: "90%" },
    { label: "On Time Execution", value: "70%" },
    { label: "Skills", value: "80%" },
    { label: "Efficiency", value: "75%" },
  ].map((item, index) => {
    const widthClass =

     isXXS || isXS || isSM
        ? "w-[80%]"
        : isMD
        ? "w-[75%]"
        : isLG
        ? "w-[650px]"
        : "w-[635px]";

    return (
      <div
        key={index}
        className={`flex flex-col items-start ${widthClass} ${index !== 3 ? "mb-7" : ""}`}
      >
        {/* Make sure text is left-aligned using items-start and text-left */}
        <p className="text-[20px] text-black text-left w-full -tracking-[0.02rem] mb-1">
          {item.label}
        </p>
        <div className="bg-gray-300 h-[25px] w-full rounded-[5px]">
          <div
            className="h-[25px] bg-gradient-to-r from-[#104A99] to-[#1B7BFF] rounded-[5px]"
            style={{ width: item.value }}
          />
        </div>
      </div>
    );
  })}
</div>

    </div>
    </div>
  );
};

export default Profile;
