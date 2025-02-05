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
      {/* Hide navbar below tablet (650px) */}
      <div className="hidden tablet:block">
        <div className="flex justify-between items-center p-4">
          
          {/* Logo */}
          <div>
            <p>JB</p>
          </div>

          {/* Navigation Items */}
          <nav className="flex gap-10 p-3 rounded-3xl cursor-pointer">
            <Link to="/" className="">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Light/dark mode button */}
          <div>
            <FaMoon className="rounded-full p-1 text-4xl"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar