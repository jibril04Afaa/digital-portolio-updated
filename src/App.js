import { BrowserRouter as Router } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaMoon, FaArrowUp } from "react-icons/fa"
import { BsSun } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { AnimatePresence, motion } from "framer-motion"

import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import XPandEduc from "./components/XPandEduc"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage and system preference on initial load
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  // Add scroll to top effect when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Update document class and localStorage when dark mode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Scroll to top button visibility
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        <div className="min-h-screen bg-[#0a0a0a] transition-colors duration-300 overflow-x-hidden">
          {/* Floating Scroll to Top Button */}
          {showScrollToTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-3 bg-[#00f6ff] text-[#0a0a0a] rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(0,246,255,0.5)] transition-all duration-300 font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp />
            </motion.button>
          )
          }
          
          <style jsx global>{`
            html {
              scroll-behavior: smooth;
            }
            
            ::-webkit-scrollbar {
              width: 10px;
            }
            
            ::-webkit-scrollbar-track {
              background: #0a0a0a;
            }
            
            ::-webkit-scrollbar-thumb {
              background: #00f6ff;
              border-radius: 5px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
              background: #9d4edd;
            }
          `}</style>
        <div className="relative z-0">
          {/* Navbar container */}
          <div className="sticky top-0 z-50">
            {/* Gradient border container */}
            <div className="relative">
              {/* Gradient background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00f6ff] via-[#9d4edd] to-[#00f6ff] blur-sm"></div>
              {/* Content container */}
              <div className="relative bg-[#0a0a0a] backdrop-blur-sm px-4 py-2 border border-[#00f6ff]/20">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                  
                  {/* Logo */}
                  <div>
                    <button onClick={() => scrollToSection('hero')} className="text-xl font-bold text-[#00f6ff] font-mono tracking-wider">JB</button>
                  </div>

                  {/* Navigation Items - Hidden below tablet, visible on tablet and above */}
                  <nav className="hidden tablet:flex items-center gap-10 px-6 py-3 rounded-full bg-[#121212] border-2 border-[#00f6ff]/30 cursor-pointer">
                    <button onClick={() => scrollToSection('hero')} className="text-white hover:text-[#00f6ff] transition-colors font-medium">Home</button>
                    <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#00f6ff] transition-colors font-medium">About</button>
                    <button onClick={() => scrollToSection('skills')} className="text-white hover:text-[#00f6ff] transition-colors font-medium">Skills</button>
                    <button onClick={() => scrollToSection('projects')} className="text-white hover:text-[#00f6ff] transition-colors font-medium">Projects</button>
                    <button onClick={() => scrollToSection('xp-education')} className="text-white hover:text-[#00f6ff] transition-colors font-medium">XP + educ</button>
                    <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#00f6ff] transition-colors font-medium">Contact</button>
                  </nav>

                  {/* Burger menu button - Visible below tablet, hidden on tablet and above */}
                  <button 
                    className="tablet:hidden text-2xl p-2 text-white hover:text-[#00f6ff] transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                  </button>

                  {/* Light/dark mode button */}
                  <button 
                    onClick={toggleDarkMode}
                    className="hidden tablet:block p-2 rounded-full hover:bg-[#00f6ff]/10 transition-colors"
                  >
                    {isDarkMode ? 
                      <BsSun className="text-2xl text-[#00f6ff]" /> : 
                      <FaMoon className="text-2xl text-white" />
                    }
                  </button>
                </div>

                {/* Mobile menu - Slides down when burger is clicked */}
                <div 
                  className={`tablet:hidden absolute left-0 right-0 bg-[#121212] border-t border-[#00f6ff]/30 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "top-full opacity-100" : "-top-[400px] opacity-0"
                  }`}
                >
                  <div className="flex flex-col items-center gap-4 p-6">
                    <button onClick={() => scrollToSection('hero')} className="w-full py-2 text-white hover:text-[#00f6ff] hover:bg-[#00f6ff]/10 rounded-lg transition-colors">Home</button>
                    <button onClick={() => scrollToSection('about')} className="w-full py-2 text-white hover:text-[#00f6ff] hover:bg-[#00f6ff]/10 rounded-lg transition-colors">About</button>
                    <button onClick={() => scrollToSection('skills')} className="w-full py-2 text-white hover:text-[#00f6ff] hover:bg-[#00f6ff]/10 rounded-lg transition-colors">Skills</button>
                    <button onClick={() => scrollToSection('projects')} className="w-full py-2 text-white hover:text-[#00f6ff] hover:bg-[#00f6ff]/10 rounded-lg transition-colors">Projects</button>
                    <button onClick={() => scrollToSection('xp-education')} className="w-full py-2 text-white hover:text-[#00f6ff] hover:bg-[#00f6ff]/10 rounded-lg transition-colors">XP + educ</button>
                    <button onClick={() => scrollToSection('contact')} className="w-full py-2 text-white hover:text-[#00f6ff] hover:bg-[#00f6ff]/10 rounded-lg transition-colors">Contact</button>
                    
                    {/* Light/dark mode button for mobile */}
                    <button 
                      onClick={toggleDarkMode}
                      className="p-2 rounded-full hover:bg-[#00f6ff]/10 transition-colors"
                    >
                      {isDarkMode ? 
                        <BsSun className="text-2xl text-[#00f6ff]" /> : 
                        <FaMoon className="text-2xl text-white" />
                      }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content sections with scroll-triggered animations */}
          <main className="text-white">
            <motion.section 
              id="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
            </motion.section>
            
            <motion.section 
              id="about"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <About />
            </motion.section>
            
            <motion.section 
              id="skills"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Skills />
            </motion.section>
            
            <motion.section 
              id="projects"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Projects />
            </motion.section>
            
            <motion.section 
              id="xp-education"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <XPandEduc />
            </motion.section>
            
            <motion.section 
              id="contact"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Contact />
            </motion.section>
          </main>
        </div>
      </div>
      </AnimatePresence>
    </Router>
  )
}

export default App