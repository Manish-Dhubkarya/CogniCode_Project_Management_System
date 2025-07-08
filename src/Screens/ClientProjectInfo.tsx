import Button1 from "../UI_Components/Buttons/Button1";
import Button3 from "../UI_Components/Buttons/Button3";
import MainNavigation from "../UI_Components/Navigations/MainNavigation";
import ProgressTracking from "../UI_Components/Progresses/ProgressTracking";
import MikeSearch from "../UI_Components/SearchBars/MikeSearch";

const ClientProjectInfo = () => {
  return (
    <div
      className={`flex flex-col w-full text-black mt-20  px-[10vw] items-center`}
    >
      <MainNavigation isMenuHide={false} />
      <div className="w-full flex justify-between space-x-17 items-center">
        <div className="w-[50%] text-[12px] flex  flex-col space-y-4 items-start">
          <Button1 value="Full Stack Developer" gradientType="gradient1" />
          <div className="leading-relaxed flex  items-start flex-col">
            <div className="text-[12px]">Manish Dhubkarya</div>
            <div className="text-[12px]">
              Project ID: <span className="font-semibold">FHJS675CK</span>
            </div>
            <div className="text-[12px]">Submission Date : 27 May 25</div>
          </div>
          <div className="flex space-x-8 items-center mt-4 flex-row">
            <ProgressTracking />
            <div className="space-y-4 flex text-start flex-col">
              <div> Title :  Paint & Escape UI Design Project</div>
              <div>
                About the company: My name’s Craig, a retired Art Teacher from
                California and the current Founder of Paint & Escape. Paint &
                Escape vacations allow creative individuals, whether beginners
                or experts, hobbyists or professionals, to explore and share art
                with the world. I’ve been running this business for just over 18
                months: going on over 50 art vacations, with just under 300
                fantastically unique individuals. My mission is to awaken a new
                source of inspiration on a trip dedicated entirely to painting.
              </div>
              <div>
                What do you need?:  I’d like to make the UI on my website easier
                to use and work with. As I want to eventually increase the
                amount of travels Paint & Escape provides, and number of guests,
                I’ll need a smooth, operable UI to do this. The current UI is
                blocky, and doesn’t best suit the minimalist, flowing vision
                that the Paint & Escape brand encompasses.
              </div>
              <div className="w-fit space-y-3 mt-7">
              <Button3 value="Updates"/>
              <Button3 value="Add Files"/>
              </div>
            </div>
            
          </div>
        </div>
        <div className="w-[50%] px-4 space-y-20 flex flex-col items-center justify-between pb-10 bg-[#CFE3FF] rounded-[10px]">
             <div
      className="py-3 flex items-center rounded-[5px] justify-center text-white"
      style={{
        background: "conic-gradient(from 0deg at 49.56% 50%, #0348A6 0deg, #011B40 360deg)",
      }}
    >
      <div className="flex gap-18 px-9 text-[12px] font-semibold">
        <div className="hover:underline">
          Chat
        </div>
        <div className="hover:underline">
          Files
        </div>
      </div>
      
    </div>
    {/* Custom Chat */}
    <div>Chats</div>
    <MikeSearch/>
        </div>
      </div>
    </div>
  );
};

export default ClientProjectInfo;
