import { useEffect, useState } from "react";
import MainSearchBar from "../UI_Components/SearchBars/MainSearchBar";
import Navigation1 from "../UI_Components/Navigations/Navigation1";
import Filter from "../UI_Components/Filter/Filter";

const EmployeeLanding = () => {
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
      const is2XL = width > 1536;
  return (
    <div className={`flex w-full ${isXL || is2XL?"flex-col min-h-screen py-[20vh] items-center justify-start space-y-6":""}`}>
        <div>
            <MainSearchBar/>
            
        </div>
        <div className={`flex flex-row`}>
            <div>
                <Filter/>
            </div>
            <div className="flex flex-col w-full">
        <Navigation1/>
{/* table */}

        </div>
      </div>
    </div>
  )
}

export default EmployeeLanding;
