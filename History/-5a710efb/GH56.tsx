import AboutMe from "../(home)/aboutme";
import Footer from "../(home)/footer";
import HomePage from "../(home)/homePage";
import MySkills from "../(home)/mySkills";
import VideoPlayer from "../(home)/subpages/videoPlayer";

export default async  function IndexPage(){
      return (
        <div className="min-h-full pb-5 flex justify-center flex-col items-center">
          <HomePage />
          <VideoPlayer />
          <MySkills />
          <AboutMe />
          <Footer/>
        </div>
      )
}