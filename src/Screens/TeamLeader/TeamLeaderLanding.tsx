import { useEffect, useState } from "react";
import MainSearchBar from "../../UI_Components/SearchBars/MainSearchBar";
import Navigation1 from "../../UI_Components/Navigations/Navigation1";
import Filter from "../../UI_Components/Filter/Filter";
import Button1 from "../../UI_Components/Buttons/Button1";
import PaginationNav from "../../UI_Components/Navigations/PaginationNav";
import MainNavigation from "../../UI_Components/Navigations/MainNavigation";
import { TbFilterBolt } from "react-icons/tb";

interface EmployeeCredientialsProps {
  Profile: string;
  name: string;
}
interface MultipleEmployeeProps {
  Profile: string[];
}
interface TeamLeaderProjectDetailsProps {
  Designation: string;
  Description: string;
  SubmissionDate: string;
  status: string;
  statusRemark?: string;
  EmployeeCredientials?: EmployeeCredientialsProps[];
  MultipleEmployee?: MultipleEmployeeProps[];
}

interface TeamLeaderLandingProps {
  ProjectDetails: TeamLeaderProjectDetailsProps[];
}

const TeamLeaderLanding: React.FC<TeamLeaderLandingProps> = ({
  ProjectDetails,
}) => {
  const tabs = ["Requests", "Active", "On-Going", "Completed", "Employees"];
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
  const [showFilter, setShowFilter] = useState(false);
  const [renderDrawer, setRenderDrawer] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]); // Manage activeTab state
  const itemsPerPage = 6;

  // Filter ProjectDetails based on search query and activeTab
  const filteredItems = ProjectDetails.filter(
    (item) =>
      item.status === activeTab && // Filter by active tab
      (item.Designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.SubmissionDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.statusRemark?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Reset to first page when search query or activeTab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab]);

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
        {isXXS || isXS || isSM || isMD ? (
          renderDrawer && (
            <div
              className={`
                fixed top-9 left-0 w-[280px] z-5 bg-gradient-to-br from-[#50e2ff] to-[#f6fa04] p-4 rounded-br-[10px]
                transform transition-transform duration-300 ease-in-out
                ${drawerVisible ? "translate-x-0" : "-translate-x-full"}
              `}
            >
              <Filter filters={filters} setClose={() => setShowFilter(false)} />
            </div>
          )
        ) : (
          <div className="w-[25%] mt-2">
            <Filter filters={filters} setClose={setShowFilter} />
          </div>
        )}
        <div
          className={`flex flex-col ${
            isXXS || isXS || isSM || isMD ? "w-full" : "w-[75%]"
          }`}
        >
          <div
            className={`items-center flex ${
              isXXS || isXS || isSM || isMD ? "w-full" : "justify-start w-fit "
            }`}
          >
            <Navigation1
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          {/* Table */}
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
                        width="w-[180px]"
                        gradientType="gradient1"
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

                    {item.status === "On-Going" ? (
                      <div
                        className={`text-[#000000] w-[30%] font-normal text-[12px] -tracking-[0.02rem]`}
                      >
                        {item.EmployeeCredientials?.map((cred, idx) => (
                          <div className="flex items-center justify-center space-x-2">
                            <img
                              className="w-7 h-7 rounded-full"
                              src={cred.Profile}
                            />
                            <div key={idx}>{cred.name}</div>
                          </div>
                        ))}
                      </div>
                    ) : item.status === "Active" ||
                      item.status === "Employees" ? (
                      <div
                        className={`text-[#000000] w-[30%] font-normal text-[12px] -tracking-[0.02rem]`}
                      >
                        {/* {item.statusRemark} */}
                      </div>
                    ) : item.status === "Completed" ? (
                      <div
                        className={`text-[#000000] w-[30%] font-normal text-[12px] -tracking-[0.02rem]`}
                      >
                        {item.statusRemark}
                      </div>
                    ) : (
                      item.status === "Requests" && (
                        <div>
                            {/* multiple images */}
                          {item.MultipleEmployee?.map((employee, index) => {
  const profiles = employee.Profile;
  const visible = profiles.slice(0, 3);
  const remaining = profiles.length - 3;

  return (
    <div key={index} className="flex items-center">
      <div className="flex -space-x-3">
        {visible.map((imgUrl, i) => (
          <img
            key={i}
            src={imgUrl}
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        ))}
        {remaining > 0 && (
          <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-black">
            +{remaining}
          </div>
        )}
      </div>
    </div>
  );
})}

                          <img src="" />
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-[#000000] text-[14px] font-normal mt-7">
                No results found
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <PaginationNav
          total={totalPages}
          current={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default TeamLeaderLanding;
