import { useEffect, useState } from "react";
import Button1 from "../UI_Components/Buttons/Button1";
import MainNavigation from "../UI_Components/Navigations/MainNavigation";
import Button2 from "../UI_Components/Buttons/Button2";

const EmployeeProjectInfo = () => {
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
        <div>Submission Date : 27 May 25</div>
      </div>
      <div className="flex flex-col">
        <div>Project ID :</div>
        <div>FHJS675CK</div>
      </div>
      {/* Title */}
      <div>Title :  Paint & Escape UI Design Project</div>
      {/* About the Company */}
      <div>
        About the company: My name’s Craig, a retired Art Teacher from
        California and the current Founder of Paint & Escape. Paint &
        Escape vacations allow creative individuals, whether beginners or
        experts, hobbyists or professionals, to explore and share art with the
        world. I’ve been running this business for just over 18 months: going on
        over 50 art vacations, with just under 300 fantastically unique
        individuals. My mission is to awaken a new source of inspiration on a
        trip dedicated entirely to painting.
      </div>
      {/* Needs */}
      <div>
        What do you need?:  I’d like to make the UI on my website easier to use
        and work with. As I want to eventually increase the amount of travels
        Paint & Escape provides, and number of guests, I’ll need a smooth,
        operable UI to do this. The current UI is blocky, and doesn’t best suit
        the minimalist, flowing vision that the Paint & Escape brand
        encompasses.
      </div>
      {/* Project Version */}
      <div>
        Your vision for the project: I have a list of brand guidelines (logo,
        colors, fonts) that I will share with the chosen freelancer. I work with
        customers of all age groups, so would need the final UI product to be
        easily accessible to users of all kinds, including high-contrast text
        that’s easy to read. I’d like to simplify the application process, and
        have an animated form that responds quickly to the user’s commands, i.e.
        “next, back, send application”. I’ve also taken plenty of photographs
        over the last 18 months that I’d like to incorporate into the final
        product – potentially having a waterfall effect that appears when
        viewing “previous trips”.
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
          <div>Where will the content be used? On my website: Paint&Escape.co
</div>
<div>
Target audience: My customers are aged anywhere from their 20s to late 70s. They're all professionals with expendable income, and a love for art, culture, and traveling
</div>
<div>Deadline: I'm looking to get this UI fully operational within 2 weeks from the project start date.</div>
        </div>
        <Button2 value="Assign Employee"/>
    </div>
    </div>)

}

export default EmployeeProjectInfo;
