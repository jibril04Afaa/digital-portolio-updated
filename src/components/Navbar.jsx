import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import ErrorPage from "../components/ErrorRoute"

// icons imported from https://react-icons.github.io/react-icons/
import { FaMoon } from "react-icons/fa"


const Navbar = () => {
  return (
    <>
      <Router>
        <div className="flex sm:hidden tablet: justify-between items-center p-4">
          
          {/* Logo */}
          <div>
            <p>JB</p>
          </div>

          {/* Navigation Items */}
          <nav className="flex sm:hidden tablet: gap-10 p-3 rounded-3xl cursor-pointer">
            <Link to="/" className="">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Light/dark mode button */}
          <div>
            <FaMoon
            className=" rounded-full p-1 text-4xl"/>
          </div>


        </div>


        <div>
            <Routes>
              <Route path="/" element={<Hero/>}/> 
              <Route path="/about" element={<About/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<Contact/>}/> 
              <Route path="*" element={<ErrorPage/>}/> {/* Error Route */}
            </Routes>
          </div>
        
      </Router>

    </>

  )
}

export default Navbar