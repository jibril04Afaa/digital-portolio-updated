import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


// icons imported from https://react-icons.github.io/react-icons/
import { FaMoon } from "react-icons/fa"

import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ErrorPage from "./components/ErrorRoute"
import XPandEduc from "./components/XPandEduc"

const App = () => {
  return (
    <>  
<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
    <Router>
        <div className="border-2 flex justify-between items-center p-4">
          
          {/* Logo */}
          <div>
            <p>JB</p>
          </div>

          {/* Navigation Items */}
          <nav className="flex gap-10 border-2 p-3 rounded-3xl cursor-pointer">
            <Link to="/" className="">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/xp-education">XP + educ</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Light/dark mode button */}
          <div>
            <FaMoon
            className="border-2 rounded-full p-1 text-4xl cursor-pointer"
            />
          </div>

        </div>


        <div>
            <Routes>
              <Route path="/" element={<Hero/>}/> 
              <Route path="/about" element={<About/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<Contact/>}/> 
              <Route path="/xp-education" element={<XPandEduc/>}/> 
              <Route path="*" element={<ErrorPage/>}/> {/* Error Route */}
            </Routes>
        </div>

      </Router>

      <About/>
      <Skills/>
      <Projects/>
      <XPandEduc/>
    </>

  )
}

export default App