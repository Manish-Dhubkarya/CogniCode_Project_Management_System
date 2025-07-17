import { useEffect, useRef, useState } from "react";
import Button1 from "../UI_Components/Buttons/Button1";
import MainNavigation from "../UI_Components/Navigations/MainNavigation";
import MikeSearch from "../UI_Components/SearchBars/MikeSearch";
import UserIcon from "../assets/CredientialAssets/UserLogo.png";
import ProfileWithDesignation from "../UI_Components/Profile/ProfileWithDesignation";
import ProgressTracking2 from "../UI_Components/Progresses/ProgressTracking2";
import { FaUser } from "react-icons/fa";

interface ChatMesssageProps{
  message:string;
}
interface WorkingEmployeesProps{
  employeeName:string;
}
interface HeadClientProjectInfoProps{
  HeadName:string;
  HeadDesignation:string;
  SubmissionData:string;
  AmountLeft:number;
  EmployeeName:string;
  EmployeeDesignation:string;
  ProjectID:string;
  ProjectTitle:string;
  AboutCompany:string;
  WhatDoYouNeed:string;
  ChatMessages:ChatMesssageProps[];
  Employees:WorkingEmployeesProps[];
}
const HeadClientProjectInfo:React.FC<HeadClientProjectInfoProps> = ({EmployeeDesignation, EmployeeName, ProjectID, ProjectTitle, AboutCompany, WhatDoYouNeed, ChatMessages, HeadName, HeadDesignation, Employees, SubmissionData, AmountLeft}) => {
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (descriptionRef.current) {
        const height = descriptionRef.current.offsetHeight;
        setDescriptionHeight(height);
      }
    };

    // Initial height calculation
    updateHeight();

    // Set up ResizeObserver
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === descriptionRef.current) {
          setDescriptionHeight(entry.contentRect.height);
        }
      }
    });

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    // Set up a MutationObserver to detect content changes
    const mutationObserver = new MutationObserver(updateHeight);
    if (descriptionRef.current) {
      mutationObserver.observe(descriptionRef.current, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
        mutationObserver.disconnect();
      }
    };
  }, []);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isXXS = width <= 480;
  const isXS = width > 480 && width <= 640;
  const isSM = width > 640 && width <= 768;
  const isMD = width >768 && width <=1024;
  const isLG = width > 1024 && width <= 1280;
  const isXL = width > 1280 && width <= 1536;
  const is2XL = width > 1536;

  const messages = ChatMessages && ChatMessages.length > 0 ? ChatMessages : [
    {
      message:
        "Hi, Sasha your paper has been finished with writing will be going for plag report today.",
    },
    {
      message: "Ok Sir please tell me about any remaining payments",
    },
    {
      message: "Sure, It will be updated in your profile.",
    },
  ];

  return (
    <div className={`flex flex-col w-full text-black  ${isLG?"px-[7.5vw] py-20 overflow-y-auto min-h-screen justify-center": (isXL || is2XL)?"px-[10.5vw] min-h-screen overflow-y-auto py-20 justify-center": "px-[4vw] py-15"}  items-center`}>
      <MainNavigation isMenuHide={false} />
      <div className={`  flex space-x-7 items-start`}>
        <div>
      <ProgressTracking2 height={descriptionHeight}/>
      </div>
      <div ref={descriptionRef} className={``}>
      <div className={`w-full ${isLG || isXL || is2XL?"flex-row space-x-17 ":"flex-col space-y-17"} flex justify-between items-center`}>
        {/* Left Column */}
        <div className={`${isLG || isXL || is2XL?"w-[50%]":"w-full"} ${is2XL?"text-[14px]":"text-[12px]"} flex flex-col space-y-4 items-start`}>
          <Button1 value={EmployeeDesignation} gradientType="gradient1" />
          <div className="leading-relaxed flex items-start flex-col">
            <div className={`${is2XL?"text-[14px]":"text-[12px]"}`}>{EmployeeName}</div>
            <div className={`${is2XL?"text-[14px]":"text-[12px]"}`}>
              Project ID: <span className="font-semibold">{ProjectID}</span>
            </div>
             <div className={`${is2XL?"text-[14px]":"text-[12px]"}`}>
              Submission Date: <span>{SubmissionData}</span>
            </div>
             <div className={`${is2XL?"text-[14px]":"text-[12px]"}`}>
              Amount Left: <span className="font-semibold">₹. {AmountLeft}/-</span>
            </div>
            
          </div>
          <div className="flex space-x-8 items-start mt-4 flex-row">
            <div
              
              className="space-y-6  flex text-start flex-col"
            >
              <div>Title: {ProjectTitle}</div>
              <div>
                About the company: {AboutCompany}
              </div>
              <div>
                What do you need?: {WhatDoYouNeed}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={`${isLG || isXL || is2XL?"w-[50%]":"w-full"} px-3 min-h-[300px] space-y-7 flex flex-col items-center justify-between pb-10 bg-[#CFE3FF] rounded-[10px]`}>
          {/* Header Nav (Chat | Files) */}
          <div className="w-full items-center justify-start flex flex-col">
            <div
              className="py-3 flex items-center w-fit rounded-[5px] justify-center text-white"
              style={{
                background:
                  "conic-gradient(from 0deg at 49.56% 50%, #0348A6 0deg, #011B40 360deg)",
              }}
            >
              <div className={`flex gap-18 px-9 ${is2XL?"text-[14px]":"text-[12px]"} font-semibold`}>
                <div className="hover:underline">Chat</div>
                <div className="hover:underline">Files</div>
              </div>
            </div>

            {/* Custom Chat */}
            <div className={`w-full rounded-md p-4 ${is2XL?"text-[14px]":"text-[12px]"} overflow-y-auto thin-scroll space-y-2`}>
              {messages.map((msg, index) => {
                const isLeft = index%2===0?false:true;
                return (
                  <div
                    key={index}
                    className={`flex ${isLeft ? "justify-start" : "justify-end"} my-7`}
                  >
                    <div
                      className={`flex items-center ${
                        isLeft ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div className="w-8 h-8 shrink-0 rounded-full text-white flex items-center justify-center">
                        <img src={UserIcon} alt="User Icon" />
                      </div>
                      <div
                        className={`${
                          isLeft ? `${(isSM || isXS || isXXS)?"pr-0":"pr-12"}`  : `${(isSM || isXS || isXXS)?"pl-0":"pl-12"}`
                        } text-start py-2 rounded-lg`}
                      >
                        {msg.message}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Search / Message Input */}
          <MikeSearch />
        </div>
      </div>
      <div className={` ${isLG || isXL || is2XL?"flex-row mt-15":" flex-col space-y-7 mt-7"} flex  w-full justify-between`}>
        <div className={`${isLG || isXL || is2XL?"space-y-7":"space-y-4"}  flex flex-col items-start`}>
          <div className="text-[14px] font-medium">Project Head</div>
          <ProfileWithDesignation borderColor="border-[#1B7BFF]" Designation={HeadDesignation} EmployeeName={HeadName} IsSmall={false} />
        </div>
        <div className="space-y-7 flex flex-col items-start">
 <div className="text-[14px] w-full text-start font-medium">Employees Working</div>
  <div className={`flex gap-x-7 gap-y-5  overflow-x-auto thin-scroll ${is2XL|| isXL?"max-w-[600px]":isLG?"max-w-[500px]":"max-w-[80vw]"}`}>
           {Employees.map((employee, index) => (
             <div key={index} className={`flex flex-shrink-0  ${isXS || isSM || isMD?"w-auto":"w-auto"}  items-center flex-col`}>
               <div className="p-4 relative z-10 rounded-full w-fit bg-white border-2 border-gray-400">
                 <FaUser
                   size={
                     isXS
                       ? 25
                       : isSM
                       ? 30
                       : isMD
                       ? 35
                       : isLG
                       ? 40
                       : isXL
                       ? 45
                       : is2XL
                       ? 50
                       : 20
                   }
                   color="#9e9e9e"
                 />
               </div>
               <div className="text-center">
                 <div className="text-[12px]">{employee.employeeName}</div>
                 <div className="font-medium text-[12px]">Profile</div>
               </div>
             </div>
           ))}
         </div>
        </div>
        </div>
      </div>
       
      </div>
       

    </div>
  );
};

export default HeadClientProjectInfo;