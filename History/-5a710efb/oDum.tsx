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