import { useEffect, useState } from "react";
import Button1 from "../UI_Components/Buttons/Button1";
import MainNavigation from "../UI_Components/Navigations/MainNavigation";
import Button2 from "../UI_Components/Buttons/Button2";

interface EmployeeProjectInfoProps{
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
const EmployeeProjectInfo:React.FC<EmployeeProjectInfoProps> = (props) => {
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
  return (
    <div>
      <MainNavigation isMenuHide={false}/>
    <div
      className={`flex flex-col text-[12px] text-start w-full -tracking-[0.02rem] text-black  ${
        isLG
          ? "px-[7.5vw] py-20 overflow-y-auto min-h-screen justify-center"
          : isXL || is2XL
          ? "px-[10.5vw] min-h-screen overflow-y-auto py-20 justify-center"
          : "px-[4vw] py-15"
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
        <Button2 value="Assign Employee"/>
    </div>
    </div>)

}

export default EmployeeProjectInfo;
