import { useEffect, useState } from "react";
import MainSearchBar from "../UI_Components/SearchBars/MainSearchBar";
import Navigation1 from "../UI_Components/Navigations/Navigation1";
import Filter from "../UI_Components/Filter/Filter";
import Button1 from "../UI_Components/Buttons/Button1";
import PaginationNav from "../UI_Components/Navigations/PaginationNav";
import MainNavigation from "../UI_Components/Navigations/MainNavigation";
import { TbFilterBolt } from "react-icons/tb";
import EmployeeProfile from "./EmployeeProfile";
import UserProfile from "../assets/CredientialAssets/UserProfile.jpg";

interface ProjectDetailsProps {
  Category: string;
  Designation: string;
  Description: string;
  SubmissionDate: string;
  status: string;
  statusRemark: string;
}

interface EmployeeLandingProps {
  ProjectDetails: ProjectDetailsProps[];
}

const EmployeeLanding: React.FC<EmployeeLandingProps> = ({
  ProjectDetails,
}) => {
  const tabs = ["Active", "Accepted", "Requested", "Performance"];
  const employeeProfile = {
    EmployeeName: "Himanshu Verma",
    Profile: UserProfile,
    Designation: "CEO",
    TL: "NONE",
    ProjectStartDate: "1 June",
    ProjectEndDate: "1 Sep",
    ProjectOnGoing: 10,
    ProjectCompleted: 20,
    Performance: [
      { label: "Accuracy", value: "90%" },
      { label: "On Time Execution", value: "70%" },
      { label: "Skills", value: "80%" },
      { label: "Efficiency", value: "75%" },
    ],
  };
  const filters = [
    "Data Science Projects",
    "UI Design Projects",
    "Coding Projects",
    "Research Papers",
    "Plagarism Removal",
    "Immediate Deadline Projects",
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // New state for selected filters
  const [showFilter, setShowFilter] = useState(false);
  const [renderDrawer, setRenderDrawer] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const itemsPerPage = 6;

  // Sort ProjectDetails to move "Submitted" items to the end
  const sortedProjectDetails = [...ProjectDetails].sort((a, b) => {
    // Helper function to get priority based on status and statusRemark
    const getPriority = (item: ProjectDetailsProps) => {
      const status = item.status.toLowerCase();
      const remark = item.statusRemark.toLowerCase();

      if (status === "accepted") {
        return remark === "submitted" ? 2 : 1;
      } else if (status === "requested") {
        return remark === "accepted" ? 1 : remark === "no response" ? 2 : 3;
      }
      return 4;
    };

    return getPriority(a) - getPriority(b);
  });
  // Filter ProjectDetails based on search query, activeTab, and selected filters
  const filteredItems = sortedProjectDetails.filter(
    (item) =>
      item.status === activeTab &&
      (item.Designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.SubmissionDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.statusRemark.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedFilters.length === 0 || selectedFilters.includes(item.Category))
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const maxTextLength = Math.max(
    ...ProjectDetails.map((item) => item.Designation.length)
  );

  // Decide width class based on max text length
  const widthClass =
    maxTextLength > 30
      ? "w-[300px]"
      : maxTextLength > 20
      ? "w-[250px]"
      : "w-[180px]";

  // Reset to first page when search query, activeTab, or selectedFilters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab, selectedFilters]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showFilter) {
      setRenderDrawer(true);
      setTimeout(() => {
        setDrawerVisible(true);
      }, 10);
    } else {
      setDrawerVisible(false);
      const timeout = setTimeout(() => {
        setRenderDrawer(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [showFilter]);

  const isXXS = width <= 480;
  const isXS = width > 480 && width <= 640;
  const isSM = width > 640 && width <= 768;
  const isMD = width > 768 && width <= 1024;
  const isLG = width > 1024 && width <= 1280;
  const isXL = width > 1280 && width <= 1536;
  const is2XL = width > 1536;

  return (
    <div
      className={`flex w-full ${
        isXL || is2XL
          ? "flex-col min-h-screen py-[10vh] px-[10vw] items-center justify-start space-y-6"
          : isLG
          ? "flex-col min-h-screen py-[10vh] px-[5vw] items-center justify-start space-y-6"
          : "flex-col relative min-h-screen py-[10vh] px-[5vw] items-center justify-start space-y-6"
      }`}
    >
      <MainNavigation isMenuHide={false} />
      <div
        className={`flex ${
          isXXS || isXS || isSM || isMD
            ? "w-full justify-center items-center space-x-[10vw]"
            : "w-full items-center justify-center"
        }`}
      >
        {(isXXS || isXS || isSM || isMD) && (
          <div>
            <TbFilterBolt size={25} onClick={() => setShowFilter(true)} />
          </div>
        )}
        <div className={`${isXXS || isXS || isSM || isMD ? "w-fit" : "w-fit"}`}>
          <MainSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
      <div className={`flex w-full gap-x-5 items-start shrink-0 flex-row`}>
        {isXXS || isXS || isSM || isMD || activeTab === tabs[3] ? (
          renderDrawer && (
            <div
              className={`
                fixed top-9 left-0 w-[280px] z-5 bg-gradient-to-br from-[#50e2ff] to-[#f6fa04] p-4 rounded-br-[10px]
                transform transition-transform duration-300 ease-in-out
                ${drawerVisible ? "translate-x-0" : "-translate-x-full"}
              `}
            >
              <Filter
                filters={filters}
                setClose={() => setShowFilter(false)}
                setSelectedFilters={setSelectedFilters} // Pass callback to update selected filters
              />
            </div>
          )
        ) : (
          <div className="w-[25%] mt-2">
            <Filter
              filters={filters}
              setClose={setShowFilter}
              setSelectedFilters={setSelectedFilters} // Pass callback to update selected filters
            />
          </div>
        )}
        <div
          className={`flex flex-col ${
            isXXS || isXS || isSM || isMD
              ? "w-full"
              : activeTab === tabs[3]
              ? "w-full flex"
              : "w-[75%]"
          }`}
        >
          <div
            className={`items-center flex ${
              isXXS || isXS || isSM || isMD
                ? "w-full"
                : activeTab === tabs[3]
                ? "w-full flex items-center"
                : "justify-start w-fit px-5"
            }`}
          >
            <Navigation1
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          {activeTab !== tabs[3] ? (
            // Table
            <div className="overflow-x-auto">
              {currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-start items-start ${
                      index === currentItems.length - 1 ? "mt-7" : "my-7"
                    } w-full min-w-[700px] flex-col`}
                  >
                    <div className="flex flex-col-reverse items-start justify-start w-full">
                      <div>
                        <Button1
                          width={widthClass}
                          gradientType={`${
                            ["submitted", "declined"].includes(
                              item.statusRemark?.toLowerCase().trim()
                            )
                              ? ""
                              : "gradient1"
                          }`}
                          text={`${is2XL ? "text-[15px]" : "text-[12px]"}`}
                          value={item.Designation}
                        />
                      </div>
                      <div className="border-t-2 border-[#000000] w-full"></div>
                    </div>
                    <div className="flex mt-3 w-full pl-[2vw] justify-between items-center">
                      <div
                        className={`text-[#000000] w-[35%] text-start flex font-normal ${
                          is2XL ? "text-[15px]" : "text-[12px]"
                        } -tracking-[0.02rem]`}
                      >
                        {item.Description}
                      </div>
                      <div
                        className={`text-[#000000] font-normal flex justify-center w-[35%] ${
                          is2XL ? "text-[15px]" : "text-[12px]"
                        } -tracking-[0.02rem]`}
                      >
                        Submission Date: {item.SubmissionDate}
                      </div>
                      <div
                        className={`${
                          item.statusRemark.toLowerCase() === "accepted"
                            ? "text-[#0FB300]"
                            : item.statusRemark.toLowerCase() === "declined" ||
                              item.statusRemark.toLowerCase() ===
                                "submission pending"
                            ? "text-[#FF0000]"
                            : item.statusRemark.toLowerCase() === "submitted"
                            ? "text-[#474747]"
                            : "text-[#000]"
                        } w-[30%] font-normal text-[12px] -tracking-[0.02rem]`}
                      >
                        {item.statusRemark}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-[#000000] text-[14px] font-normal mt-7">
                  No results found
                </div>
              )}
            </div>
          ) : (
            <div className="py-10">
              <EmployeeProfile {...employeeProfile} />
            </div>
          )}
        </div>
      </div>
      {activeTab !== tabs[3] && (
        <div className="mt-8">
          <PaginationNav
            total={totalPages}
            current={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default EmployeeLanding;
