import { useEffect, useState } from "react";
import MainNavigation from "../UI_Components/Navigations/MainNavigation";
import Button4 from "../UI_Components/Buttons/Button4";
import Button1 from "../UI_Components/Buttons/Button1";
import PaginationNav from "../UI_Components/Navigations/PaginationNav";

interface ProjectDetailsProps {
  Workstream: string;
  Description: string;
  SubmissionDate: string;
  status: string;
}

interface ClientProfileProps {
  ClientName: string;
  Profile: string;
  Designation: string;
  ProjectStartDate: string;
  ProjectEndDate: string;
  ProjectOnGoing: number;
  ProjectCompleted: number;
  ProjectDetails: ProjectDetailsProps[];
}

const ClientProfile: React.FC<ClientProfileProps> = ({
  ClientName,
  Designation,
  ProjectStartDate,
  ProjectEndDate,
  ProjectOnGoing,
  ProjectCompleted,
  ProjectDetails,
  Profile,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 useEffect(() => {
  // Disable browser scroll restoration
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  // Scroll to top with a slight delay
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("client-profile-root")?.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    }, 0);
  };

  // Run on mount and after load
  scrollToTop();
  window.addEventListener("load", scrollToTop);

  return () => {
    window.removeEventListener("load", scrollToTop);
  };
}, []);

  const isXXS = width <= 480;
  const isXS = width > 480 && width <= 640;
  const isSM = width > 640 && width <= 768;
  const isMD = width > 768 && width <= 1024;
  const isLG = width > 1024 && width <= 1280;
  const isXL = width > 1280 && width <= 1536;
  const is2XL = width > 1536;

  // Calculate pagination
  const totalPages = Math.ceil(ProjectDetails.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = ProjectDetails.slice(startIndex, endIndex);

  return (
    <div
      className={`flex flex-col w-full ${
        isXXS || isXS ? "" : isXL || is2XL ? " py-[10vh]" :  "py-[10vh]"
      }`}
    >
      <div className={`flex items-center justify-center`}>
        <MainNavigation isMenuHide={false} />

        <div
          className={`w-full ${
            isXXS || isXS || isSM || isMD || isLG ? "" : "flex  items-end justify-center"
          } ${isXXS || isXS ? "pt-15 pb-10" : ""} ${
            isXL ? "px-[8vw] gap-15" : is2XL ? "gap-35 px-[8vw]" : isLG || isMD || isSM || isXS || isXXS ? "px-[2vw]" : ""
          }`}
        >
          {/* Left Side: Profile Info */}
          <div
            className={`flex  ${
              isXXS
                ? "flex-col"
                : isXS
                ? "flex-col"
                : isSM || isMD || isLG
                ? "flex-row justify-center gap-x-[5vh]"
                : "flex-col justify-center"
            } items-center w-full ${isXXS || isXS || isSM || isMD || isLG ? "mb-7" : "max-w-xs mb-7"}`}
          >
            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <div
                className={` ${
                  isXXS || isXS
                    ? "w-[200px] h-[200px]"
                    : isSM
                    ? "w-[200px] h-[200px]"
                    : isMD
                    ? "w-[200px] h-[200px]"
                    : isLG || isXL
                    ? "w-[255px] h-[255px]"
                    : "w-[275px] h-[275px] "
                } rounded-full overflow-hidden border-6 border-gray-300 shadow-md`}
              >
                <img
                  src={Profile}
                  alt="User Profile"
                  className="w-full h-full p-3 rounded-full object-cover"
                />
              </div>

              {/* Name and Info */}
              <div className="text-center ">
                <div className={`${is2XL ? "text-[40px] mt-2" : isXXS || isXS || isSM?"text-[27px]": "text-[36px]"} font-normal`}>
                  {ClientName}
                </div>
                <p className={`text-gray-700 ${is2XL ? "text-[34px] mt-2" : "text-[24px]"} font-medium`}>
                  {Designation}
                </p>
              </div>
            </div>

            <div
              className={`flex justify-center items-center flex-col ${
                isXXS
                  ? ""
                  : isXS
                  ? ""
                  : isSM
                  ? "mb-20"
                  : isMD
                  ? "mb-20"
                  : isLG
                  ? "mb-22"
                  : ""
              }`}
            >
              {/* Projects Info */}
              <div
                className={`${isXXS || isXS || isSM?"":"mt-22"}  text-center tracking-tight leading-tight text-black ${
                  is2XL ? "text-[32px] mt-2" : "text-[24px]"
                } font-medium`}
              >
                <div>
                  Projects {ProjectStartDate} - {ProjectEndDate}
                </div>
              </div>

              {/* Buttons */}
              <div className={`mt-4 w-fit flex ${ isXL || is2XL?"flex-col":"flex-row "}  gap-4`}>
                <Button4 onClick={() => alert("Hello")} value1={ProjectOnGoing} value2="On-Going" />
                <Button4 value1={ProjectCompleted} value2="Completed" />
              </div>
            </div>
          </div>
{(isXXS || isXS || isSM || isMD || isLG) &&
<div className={`text-black font-medium  ${isXXS
                  ? "text-[18px] pt-3 mb-3"
                  : isXS || isSM
                  ? "text-[20px] pt-3 mb-4"
                  : isMD
                  ? "text-[22px] pt-4 mb-5"
                  : isLG
                  ? "text-[24px] mb-6 pt-4":""}`}>Project Record 2024-2025</div>}
          {/* Right Side: Performance Record */}
          <div className="w-full overflow-x-auto">
            
          <div
            className={`flex  min-w-[650px] overflow-x-auto flex-col w-full ${isXXS || isXS || isSM || isMD || isLG ? "items-center" : "items-center"}`}
          >
            { (isXL || is2XL) &&
            <div
              className={` w-full ${
                 isXL
                  ? "text-[28px] mb-7"
                  : "text-[35px] mb-8"
              } text-black font-medium  "mb-6"
              } -tracking-[0.02rem]`}
            >
              Project Record 2024-2025
            </div>}
            {currentItems.map((item, index) => {
               

    return (
              <div
                className={`flex  justify-start items-start ${
                  index === currentItems.length - 1 ? "mt-3" : "my-3"
                } w-full flex-col`}
                key={item.Workstream}
              >
                <div className="flex flex-col-reverse items-start justify-start w-full">
                  <div>
                    <Button1 gradientType="gradient1" text={`${is2XL?"text-[15px]":"text-[12px]"} `} value="UI Designer" />
                  </div>
                  <div className="border-t-2 border-[#000000] w-full"></div>
                </div>
                <div className="flex mt-3 w-full  pl-[2vw] justify-between items-center">
                  <div className={`text-[#FF0000] w-[33.33%] text-start flex font-normal ${is2XL?"text-[15px]":"text-[12px]"} -tracking-[0.02rem]`}>
                    {item.Description}
                  </div>
                  <div className={`text-[#FF0000] font-normal flex justify-center w-[33.33%] ${is2XL?"text-[15px]":"text-[12px]"} -tracking-[0.02rem]`}>
                    Submission Date: {item.SubmissionDate}
                  </div>
                  <div className={`text-[#FF0000] w-[33.33%] font-normal text-[12px] -tracking-[0.02rem]`}>
                    {item.status}
                  </div>
                </div>
              </div>
  );
  })}
          </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-15 flex justify-center items-center">
        <PaginationNav
          total={totalPages}
          current={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ClientProfile;