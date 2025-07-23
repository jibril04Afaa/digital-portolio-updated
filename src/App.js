import { BrowserRouter as Router, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaMoon, FaArrowUp } from "react-icons/fa"
import { BsSun } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { AnimatePresence, motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

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
  }, [window.location.pathname]);

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
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
          {/* Floating Scroll to Top Button */}
          {showScrollToTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
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
              background: #f1f1f1;
            }
            
            ::-webkit-scrollbar-thumb {
              background: #888;
              border-radius: 5px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
            
            .dark ::-webkit-scrollbar-track {
              background: #1f2937;
            }
            
            .dark ::-webkit-scrollbar-thumb {
              background: #4b5563;
            }
            
            .dark ::-webkit-scrollbar-thumb:hover {
              background: #6b7280;
            }
          `}</style>
        <div className="relative z-0">
          {/* Navbar container */}
          <div className="sticky top-0 z-50">
            {/* Gradient border container */}
            <div className="relative">
              {/* Gradient background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm"></div>
              {/* Content container */}
              <div className="relative bg-white dark:bg-gray-900 backdrop-blur-sm px-4 py-2">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                  
                  {/* Logo */}
                  <div>
                    <button onClick={() => scrollToSection('hero')} className="text-xl font-bold dark:text-white">JB</button>
                  </div>

                  {/* Navigation Items - Hidden below tablet, visible on tablet and above */}
                  <nav className="hidden tablet:flex items-center gap-10 px-6 py-3 rounded-full bg-white dark:bg-gray-800 border-2 dark:border-gray-700 cursor-pointer">
                    <button onClick={() => scrollToSection('hero')} className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">Home</button>
                    <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">About</button>
                    <button onClick={() => scrollToSection('skills')} className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">Skills</button>
                    <button onClick={() => scrollToSection('projects')} className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">Projects</button>
                    <button onClick={() => scrollToSection('xp-education')} className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">XP + educ</button>
                    <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 dark:text-white dark:hover:text-gray-300">Contact</button>
                  </nav>

                  {/* Burger menu button - Visible below tablet, hidden on tablet and above */}
                  <button 
                    className="tablet:hidden text-2xl p-2 dark:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                  </button>

                  {/* Light/dark mode button */}
                  <button 
                    onClick={toggleDarkMode}
                    className="hidden tablet:block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {isDarkMode ? 
                      <BsSun className="text-2xl text-white" /> : 
                      <FaMoon className="text-2xl" />
                    }
                  </button>
                </div>

                {/* Mobile menu - Slides down when burger is clicked */}
                <div 
                  className={`tablet:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "top-full opacity-100" : "-top-[400px] opacity-0"
                  }`}
                >
                  <div className="flex flex-col items-center gap-4 p-6">
                    <button onClick={() => scrollToSection('hero')} className="w-full py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 rounded-lg">Home</button>
                    <button onClick={() => scrollToSection('about')} className="w-full py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 rounded-lg">About</button>
                    <button onClick={() => scrollToSection('skills')} className="w-full py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 rounded-lg">Skills</button>
                    <button onClick={() => scrollToSection('projects')} className="w-full py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 rounded-lg">Projects</button>
                    <button onClick={() => scrollToSection('xp-education')} className="w-full py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 rounded-lg">XP + educ</button>
                    <button onClick={() => scrollToSection('contact')} className="w-full py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 rounded-lg">Contact</button>
                    
                    {/* Light/dark mode button for mobile */}
                    <button 
                      onClick={toggleDarkMode}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {isDarkMode ? 
                        <BsSun className="text-2xl text-white" /> : 
                        <FaMoon className="text-2xl" />
                      }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content sections with scroll-triggered animations */}
          <main className="dark:text-white">
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