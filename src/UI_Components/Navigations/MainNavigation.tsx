import { useEffect, useState } from "react";
import CogniCodeLogo from "../../assets/MainAssets/CogniCodeLogo.svg";
import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
interface MainNavigationProps{
  isMenuHide:boolean;
}
const MainNavigation:React.FC<MainNavigationProps> = ({isMenuHide}) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //  const isXXS =width<=480;
  //   const isXS = width > 480 && width <= 640;
  //   const isSM = width > 640 && width <= 768;
    const isMD = width > 768 && width <= 1024;
    const isLG = width > 1024 && width <= 1280;
    const isXL = width > 1280 && width <= 1536;
    const is2XL = width > 1536;
  return (
    <div className="w-full fixed top-0 z-20 flex items-center xs:h-[35px] sm:h-[37px] md:h-[42px] lg:h-[47px] xl:h-[57px]  h-[37px] justify-between bg-black">
      <div>
        <img
          className={`mt-1 cursor-pointer px-[3vw] xs:h-[35px] sm:h-[35px] md:h-[40px] lg:h-[45px] xl:h-[55px]  h-[35px]`}
          src={CogniCodeLogo}
        />
      </div>
      {!isMenuHide &&
      <div className="flex space-x-3 px-[5vw] items-center justify-center">
        <IoMdMenu
          color="#ffff"
          size={isMD || isLG || isXL || is2XL ? 25 : 20}
        />
        <FaUserCircle
          color="#ffff"
          size={isMD || isLG || isXL || is2XL ? 25 : 20}
        />
      </div>}
    </div>
  );
};

export default MainNavigation;
