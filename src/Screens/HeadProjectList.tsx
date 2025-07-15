import { useEffect, useState } from "react";
import MainSearchBar from "../UI_Components/SearchBars/MainSearchBar";
import Filter from "../UI_Components/Filter/Filter";
import Button1 from "../UI_Components/Buttons/Button1";
import PaginationNav from "../UI_Components/Navigations/PaginationNav";
import MainNavigation from "../UI_Components/Navigations/MainNavigation";
import { TbFilterBolt } from "react-icons/tb";
import CircularProgress from "../UI_Components/Progresses/CircularProgress";

interface ProjectListProps {
  Category: string;
  Description: string;
  EmployeeName:string;
  ProjectId:string;
  SubmissionDate: string;
  ComplitionPercentage:number;
  Price:number;
}

interface HeadProjectListProps {
  ProjectDetails: ProjectListProps[];
}

const HeadProjectList: React.FC<HeadProjectListProps> = ({ ProjectDetails }) => {
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
  const itemsPerPage = 6;

  // Filter ProjectDetails based on search query, activeTab, and selected filters
  const filteredItems = ProjectDetails.filter(
    (item) =>
      (item.ComplitionPercentage.toString().includes(searchQuery.toLowerCase()) ||
        item.Description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ProjectId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.SubmissionDate.toString().includes(searchQuery.toLowerCase()) ||
        item.Price.toString().includes(searchQuery.toLowerCase())) &&
      (selectedFilters.length === 0 || selectedFilters.includes(item.Category))
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);
  // Get max text length from all items
  const maxTextLength = Math.max(
    ...ProjectDetails.map((item) => (item.EmployeeName + item.ProjectId).length)
  );

  // Decide width class based on max text length
  const widthClass =
    maxTextLength > 30
      ? "w-[300px]"
      : maxTextLength > 20
      ? "w-[250px]"
      : "w-[200px]";

  // Reset to first page when search query, activeTab, or selectedFilters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedFilters]);

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
          <MainSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>
      <div className={`flex w-full gap-x-5 items-start shrink-0 flex-row`}>
        {(isXXS || isXS || isSM || isMD) ? (
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
              ? "w-full flex"
              : "w-[75%]"
          }`}
        >

            <div className="overflow-x-auto">
              {currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-start items-start ${
                      index === currentItems.length - 1 ? "mt-0" : "my-1"
                    } w-full min-w-[700px] flex-col`}
                  >
                    <div className="flex flex-col-reverse items-start justify-start w-full">
                      <div>
                        <Button1
                          width={widthClass}
                          gradientType="gradient1"
                          text={`${is2XL ? "text-[15px]" : "text-[12px]"}`}
                          value={item.EmployeeName + "\u00A0\u00A0\u00A0" + item.ProjectId}
                        />
                      </div>
                      <div className="border-t-2 border-[#000000] w-full"></div>
                    </div>
                    <div className="flex mt-3 w-full pl-[2vw] justify-between items-center">
                      <div
                        className={`text-[#000000] w-[30%] text-start flex font-normal ${
                          is2XL ? "text-[15px]" : "text-[12px]"
                        } -tracking-[0.02rem]`}
                      >
                        {item.Description}
                      </div>
                      <div
                        className={`text-[#000000] font-normal flex justify-center w-[30%] ${
                          is2XL ? "text-[15px]" : "text-[12px]"
                        } -tracking-[0.02rem]`}
                      >
                        Submission Date: {item.SubmissionDate}
                      </div>
                       <div
                        className={`w-[20%] ${is2XL ? "text-[15px]" : "text-[12px]"} text-[#000000] flex flex-col items-center justify-center`}
                      >
                        <CircularProgress progress={item.ComplitionPercentage}/>
                        <div>Completed</div>
                      </div>
                      <div
                        className={`text-[#000000] w-[20%] space-y-1 font-normal text-[12px] -tracking-[0.02rem]`}
                      >
                       <div> ₹. {item.Price}/-</div>
                        <div>Amount Left</div>
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

export default HeadProjectList;