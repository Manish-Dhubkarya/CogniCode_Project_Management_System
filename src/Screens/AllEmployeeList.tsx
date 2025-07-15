import { FaUser } from "react-icons/fa";
import ProfileWithDesignation from "../UI_Components/Profile/ProfileWithDesignation";
import { useEffect, useState } from "react";

const teamLeaders = [
  { Designation: "Full Stack Developer", EmployeeName: "Manish Dhubkarya", isSmall: false },
  { Designation: "UI Designer", EmployeeName: "Riya Sharma", isSmall: true },
  { Designation: "Backend Developer", EmployeeName: "Amit Verma", isSmall: true },
  { Designation: "DevOps Engineer", EmployeeName: "Kunal Joshi", isSmall: true },
  { Designation: "QA Engineer", EmployeeName: "Sneha Patel", isSmall: true },
];

const employees = [
  { name: "Vishwajeet Gour" },
  { name: "Riya Sharma" },
  { name: "Amit Verma" },
  { name: "Kunal Joshi" },
  { name: "Sneha Patel" },
  { name: "Manish Dhubkarya" },
];

const AllEmployeeList = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isXS = width <= 640;
  const isSM = width > 640 && width <= 768;
  const isMD = width > 768 && width <= 1024;
  const isLG = width > 1024 && width <= 1280;
  const isXL = width > 1280 && width <= 1536;
  const is2XL = width > 1536;

  return (
    <div className={`flex flex-col w-full text-[12px]  py-5 space-y-10`}>

      {/* -------- Team Leaders -------- */}
      <div className="w-full space-y-5">
        <div className={`${isXS || isSM?"text-[15px]":isMD?"text-[18px]":"text-[20px]"}  w-fit font-medium -tracking-[0.02rem]`}>
          Team Leaders
        </div>

        {/* Small screen: Horizontal Scroll */}
        <div className="block md:hidden pb-2 overflow-x-auto">
          <div className="flex gap-5 w-max items-end">
            {teamLeaders.map((leader, index) => (
              <div key={index} className="min-w-[220px] flex-shrink-0 relative">
                <ProfileWithDesignation
                  IsSmall={leader.isSmall}
                  Designation={leader.Designation}
                  EmployeeName={leader.EmployeeName}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Medium and up: Grid Layout */}
        <div className={`hidden md:grid  items-end custom-indent-wrap gap-x-5 gap-y-5
          ${isMD || isLG || isXL || is2XL ?"grid-cols-3" : "grid-cols-1"}`}>
          {teamLeaders.map((leader, index) => (
            <div key={index} className="bg-white">
              <ProfileWithDesignation
                IsSmall={leader.isSmall}
                Designation={leader.Designation}
                EmployeeName={leader.EmployeeName}
              />
            </div>
          ))}
        </div>
      </div>

      {/* -------- Employees: Design -------- */}
      <div className="w-full space-y-5">
        <div className={`${isXS || isSM?"text-[15px]":isMD?"text-[18px]":"text-[20px]"} w-fit font-medium -tracking-[0.02rem]`}>
          Employees : Design Department
        </div>

        <div className={`flex flex-wrap  gap-x-10 gap-y-5`}>
          {employees.map((employee, index) => (
            <div key={index} className={`flex ${isXS || isSM || isMD?"w-[80px]":"w-[100px]"}  items-center flex-col`}>
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
                <div>{employee.name}</div>
                <div className="font-medium">Profile</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEmployeeList;
