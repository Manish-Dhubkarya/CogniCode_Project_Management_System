import MainNavigation from "../UI_Components/Navigations/MainNavigation"
import UserLogo from "../assets/CredientialAssets/UserLogo.png"
const LoginPage = () => {
  return (
    <div className="flex flex-col bg-red-700 items-center h-screen justify-center">
      <MainNavigation isMenuHide={true}/>
      <div></div>
      <img src={UserLogo}/>
      <div className="bg-[#2C6BC1] w-[192px] rounded-[5px] text-[14px] text-white py-1 mb-2 mt-5">Log in</div>
      <div className="bg-[#0348A6] w-[192px] rounded-[5px] text-[14px] text-white py-1">Register</div>
    </div>
  )
}
export default LoginPage
