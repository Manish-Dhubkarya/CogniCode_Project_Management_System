import { useEffect, useState } from "react";
import Button1 from "../../UI_Components/Buttons/Button1";
import MainNavigation from "../../UI_Components/Navigations/MainNavigation";
import ProfileWithDesignation from "../../UI_Components/Profile/ProfileWithDesignation";
import Button2 from "../../UI_Components/Buttons/Button2";
import EmployeeSearchBar from "../../UI_Components/SearchBars/EmployeeSearch";

interface TeamLeaderProjectInfoProps{
  EmployeeDesignation:string;
  SubmissionDate:string;
  ProjectId:string;
  ProjectTitle:string;
  About_the_company:string;
  Needs:string;
  Vision:string;
  links:string[];
  ContentUse:string;
  Target_Audiance:string;
  Deadline:string;


}
const TeamLeaderProjectAss:React.FC<TeamLeaderProjectInfoProps> = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isXXS = width <= 480;
  const isXS = width > 480 && width <= 640;
  const isSM = width > 640 && width <= 768;
  const isMD = width > 768 && width <= 1024;
  const isLG = width > 1024 && width <= 1280;
  const isXL = width > 1280 && width <= 1536;

  const employees = [
  { EmployeeName: "Manish Dhubkarya", isSmall: true },
  { EmployeeName: "Riya Sharma", isSmall: true },
  { EmployeeName: "Amit Verma", isSmall: true },
  { EmployeeName: "Kunal Joshi", isSmall: true },
  { EmployeeName: "Sneha Patel", isSmall: true },
];
  const is2XL = width > 1536;
  const [searchQuery, setSearchQuery]=useState("")
  return (
    <div className="w-full">
      <MainNavigation isMenuHide={false}/>
    <div
      className={`flex flex-col text-[12px] text-start w-full -tracking-[0.02rem] text-black  ${
        isLG
          ? "px-[7.5vw] pt-20  overflow-y-auto  justify-center"
          : isXL || is2XL
          ? "px-[10.5vw]  overflow-y-auto pt-[11vh] justify-center"
          : "px-[4vw] pt-15"
      }  items-start space-y-6`}
    >
     
      <div className={`w-full ${isXXS || isXS || isSM?"space-y-4":"flex" } justify-between`}>
        <Button1 value="Full Stack Developer" gradientType="gradient1" />
        <div>Submission Date : {props.SubmissionDate}</div>
      </div>
      <div className="flex flex-col">
        <div>Project ID :</div>
        <div className="font-semibold">{props.ProjectId}</div>
      </div>
      {/* Title */}
      <div style={{ whiteSpace: 'pre' }}>Title : {" " + props.ProjectTitle}</div>
      {/* About the Company */}
      <div>
        {props.About_the_company}
      </div>
      {/* Needs */}
      <div>
       {props.Needs}
      </div>
      {/* Project Vision */}
      <div>
        {props.Vision}
        <div>
          Examples of styles you like:
        </div>
        {/* Links */}
        
      </div>
      <div>
          <div>http://www.airbnb.com</div>
<div>http://www.rallyinteractive.com</div>
<div>http://www.omio.com&nbsp;</div>
        </div>
        <div className="space-y-4">
          <div>Where will the content be used? {props.ContentUse}
</div>
<div>
Target audience: {props.Target_Audiance}
</div>
<div>Deadline: {props.Deadline}</div>
        </div>
        
    </div>
    <div className="w-full pb-[5vh] pt-[5vh] flex flex-col items-start">
            <div className="w-full border-1 border-[#000]"></div>
            <div className={`${isXXS || isXS || isSM?"text-[16px]":isMD?"text-[17px]":isLG?"text-[20px]": is2XL || isXL?"text-[20px]":""} ${isLG?"px-[7.5vw]":isXL || is2XL?"px-[10.5vw]":"px-[4vw]"} pt-[2vh] font-medium -tracking-[0.02rem]`}>Requests</div>

            <div className={`${isXXS || isXS || isSM || isMD || isLG?"flex flex-col":"flex flex-row space-x-4"} w-full ${isLG?"px-[7.5vw]":isXL || is2XL?"px-[10.5vw]":"px-[4vw]"} pt-[2vh]`} >
<div className={`${isXXS || isXS || isSM || isMD || isLG?"w-full":"w-[70%]"} space-y-5 pt-2`}>

        {/* Small screen: Horizontal Scroll */}
        <div className="block md:hidden pb-2 overflow-x-auto">
          <div className="flex gap-5 w-max items-end">
            {employees.map((leader, index) => (
              <div key={index} className="min-w-[250px] flex-shrink-0 relative">
                <ProfileWithDesignation
                  IsSmall={leader.isSmall}
                  Designation={"Assign"}
                  EmployeeName={leader.EmployeeName}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Medium and up: Grid Layout */}
        <div className={`hidden md:grid  items-end custom-indent-wrap gap-x-5 gap-y-5
          ${isMD || isLG?"grid-cols-3": isXL || is2XL ?"grid-cols-2" : "grid-cols-1"}`}>
          {employees.map((leader, index) => (
            <div key={index} className="bg-white">
              <ProfileWithDesignation
                IsSmall={leader.isSmall}
                Designation={"Assign"}
                EmployeeName={leader.EmployeeName}
              />
            </div>
          ))}
        </div>
      </div>
      {(is2XL || isXL) &&
      <div className="h-[350px] w-[1px] border-1"></div>
      }
      <div className={` flex flex-col space-y-6 ${is2XL || isXL?"pl-6 w-[25%]":"mt-4"}  items-start`}>
            <div className={`${isXXS || isXS || isSM?"text-[14px]":isMD?"text-[14px]":isLG?"text-[14px]": is2XL || isXL?"text-[16px]":""}  pt-[2vh] font-medium -tracking-[0.02rem]`}>Self Assign</div>
<div className="">
  <EmployeeSearchBar />
</div>
<Button2 value="Employees"/>
      </div>
        </div>
        </div>
    </div>)

}

export default TeamLeaderProjectAss;
