import Hero from "./components/Hero"
import About from "./components/About"
import SkillsCard from "./components/SkillsCard"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import ProjectsCard from "./components/ProjectsCard"

import Me from "./img/me.jpg"

// skill images
import htmlImage from "./img/html.png"
import cssImage from "./img/css.png"
import scssImage from "./img/scss.png"
import javascriptImage from "./img/javascript.webp"
import nodeImage from "./img/node.webp"
import postgresImage from "./img/postgres.png"
import csharp from "./img/csharp.png"

import tailwindImage from "./img/tailwind.png"
import reactImage from "./img/react.png"


const App = () => {
  return ( 
    <>
      <div className="bg-green-800">
        <Hero/>
        <About/>

        {/* Skills Cards */}
        <div>
          <h3 className="mt-16 mb-4 px-8 text-xl text-left">My 
            <span className="p-1 text-lime-200">
              Skills
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-2">

          {/* HTML */}
          <SkillsCard
          skillImage = {htmlImage}
          width = "200px"
          skillName = "HTML"
          />

          {/* CSS */}
          <SkillsCard
          skillImage = {cssImage}
          width = "90px"
          skillName = "CSS"
          />

          {/* SSCS/SASS */}
          <SkillsCard
          skillImage = {scssImage}
          width = "250px"
          skillName = "SCSS/SASS"
          />

          {/* Javascript */}
          <SkillsCard
          skillImage = {javascriptImage}
          width = "100px"
          skillName = "JavaScript"
          />

          {/* React */}
          <SkillsCard
          skillImage = {reactImage}
          width = "80px"
          skillName = "ReactJS"
          />

          {/* Tailwind */}
          <SkillsCard
          skillImage = {tailwindImage}
          width = "100px"
          height = "100px"
          skillName = "Tailwind"
          />

          {/* Node */}
          <SkillsCard
          skillImage = {nodeImage}
          width = "100px"
          skillName = "NodeJS"
          />

          {/* C# */}
          <SkillsCard
          skillImage = {csharp}
          width = "100px"
          skillName = "C#"
          />

          {/* Postgres */}
          <SkillsCard
          skillImage = {postgresImage}
          width = "100px"
          skillName = "PostgreSQL"
          />

        </div>


        {/* Project Cards */}
        <div>
          <h3 className="mt-16 px-8 text-xl text-left">My
            <span className="text-lime-200 p-1">Projects</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-2 m-4 ">
          <ProjectsCard
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