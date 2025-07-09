import { useEffect, useRef, useState } from "react";
import Button1 from "../UI_Components/Buttons/Button1";
import Button3 from "../UI_Components/Buttons/Button3";
import MainNavigation from "../UI_Components/Navigations/MainNavigation";
import ProgressTracking from "../UI_Components/Progresses/ProgressTracking";
import MikeSearch from "../UI_Components/SearchBars/MikeSearch";
import UserIcon from "../assets/CredientialAssets/UserLogo.png";

interface ChatMesssageProps{
  message:string;
}
interface ClientProjectInfoProps{
  EmployeeName:string;
  EmployeeDesignation:string;
  ProjectID:string;
  ProjectTitle:string;
  AboutCompany:string;
  WhatDoYouNeed:string;
  ChatMessages:ChatMesssageProps[]
}
const ClientProjectInfo:React.FC<ClientProjectInfoProps> = ({EmployeeDesignation, EmployeeName, ProjectID, ProjectTitle, AboutCompany, WhatDoYouNeed, ChatMessages}) => {
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
      <div className={`w-full ${isLG || isXL || is2XL?"flex-row space-x-17 ":"flex-col space-y-17"} flex justify-between  items-center`}>
        {/* Left Column */}
        <div className={`${isLG || isXL || is2XL?"w-[50%]":"w-full"} ${is2XL?"text-[14px]":"text-[12px]"} flex flex-col space-y-4 items-start`}>
          <Button1 value={EmployeeDesignation} gradientType="gradient1" />
          <div className="leading-relaxed flex items-start flex-col">
            <div className={`${is2XL?"text-[14px]":"text-[12px]"}`}>{EmployeeName}</div>
            <div className={`${is2XL?"text-[14px]":"text-[12px]"}`}>
              Project ID: <span className="font-semibold">{ProjectID}</span>
            </div>
            {/* You may want to add a Submission Date prop if needed */}
          </div>
          <div className="flex space-x-8 items-start mt-4 flex-row">
            <ProgressTracking height={descriptionHeight} />
            <div
              ref={descriptionRef}
              className="space-y-4  flex text-start flex-col"
            >
              <div>Title: {ProjectTitle}</div>
              <div>
                About the company: {AboutCompany}
              </div>
              <div>
                What do you need?: {WhatDoYouNeed}
              </div>
              <div className="w-fit space-y-3 mt-7">
                <Button3 value="Updates" />
                <Button3 value="Add Files" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={`${isLG || isXL || is2XL?"w-[50%]":"w-full"} px-3 min-h-[500px] space-y-7 flex flex-col items-center justify-between pb-10 bg-[#CFE3FF] rounded-[10px]`}>
          {/* Header Nav (Chat | Files) */}
          <div className="w-full items-center justify-start h-[400px] max-h-[400px] flex flex-col">
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
    </div>
  );
};

export default ClientProjectInfo;