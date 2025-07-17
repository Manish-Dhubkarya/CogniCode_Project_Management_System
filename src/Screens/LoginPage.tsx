import { useState } from "react"
import MainNavigation from "../UI_Components/Navigations/MainNavigation"
import UserLogo from "../assets/CredientialAssets/UserLogo.png"
import RegistrationPage from "./RegistrationPage"
const LoginPage = () => {
  const [openRegistration, setOpenRegistration]=useState(false)
  return (
    <div className="flex flex-col select-none items-center h-screen justify-center">
      <MainNavigation isMenuHide={true}/>
      <div></div>
      <img src={UserLogo}/>
      <div className="bg-[#2C6BC1] w-[192px] rounded-[5px] text-[14px] text-white py-1 cursor-pointer mb-2 mt-5">Log in</div>
      <div onClick={()=>setOpenRegistration(true)} className="bg-[#0348A6] w-[192px] rounded-[5px] text-[14px] text-white py-1 cursor-pointer">Register</div>
   {openRegistration &&
   <RegistrationPage isOpen={openRegistration} onSubmit={()=>alert("Submittt")} onClose={()=>setOpenRegistration(false)}/>
   }
    </div>
  )
}
export default LoginPage
