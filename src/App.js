import Hero from "./components/Hero"
import About from "./components/About"
import SkillsCard from "./components/SkillsCard"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import ProjectsCard from "./components/ProjectsCard"

import Me from "./img/me.jpg"

// skill images
import reactImage from "./img/react-image.webp"
import tailwindImage from "./img/tailwind.png"

const App = () => {
  return ( 
    <>
      <div className="bg-green-800">
        <Hero/>
        <About/>

        {/* Skills Cards */}
        <div>
          <h3 className="my-4 px-8 text-xl text-left">Skills</h3>
        </div>

        <div>
          <SkillsCard
          projectImage = {reactImage}
          />

          <SkillsCard
          projectImage = {tailwindImage}
          />

        </div>


        {/* Project Cards */}
        <div>
          <h3 className="my-4 px-8 text-xl text-left">Projects</h3>
        </div>
        
        <div className="grid grid-cols-2 m-4 ">
          <ProjectsCard
          projectImage = {Me}
          projectName = "Bantama Enteprise"
          />

          <ProjectsCard
          projectName = "African Urban Dictionary"
          />

          <ProjectsCard
          projectName = "Art Exploration Tinder"
          />

        </div>


        <Contact/>

        <Footer/>
      </div>
    </>
  )
}

export default App