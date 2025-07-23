import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import EBookReader from '../img/e-book-reader.png';
import AfricanUB from '../img/AfricanUrban.png';
import KnowTheQuran from '../img/know-the-Quran.png';
import Forex from "../img/forex-bureau.png";
import FahdrissFarms from "../img/ff.png";

import ProjectProp from "../components/ProjectProp";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projectFilters = ['All', 'Websites', 'Apps', 'AI', 'Research'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 md:mt-24"
        >
          {/* Title */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Recent Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects. Each one was built with a focus on clean code, great user experience, and modern technologies.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {projectFilters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter === 'All' ? 'All' : filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-400 dark:hover:border-purple-400'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-8"
          >
            <AnimatePresence>
              {/* Project 1 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <ProjectProp
                  image={EBookReader}
                  projectTitle="E-Book Reader"
                  langOrFramework1="React"
                  langOrFramework2=".NET"
                  projectDescription="An audio and digital book reader written in ReactJS and .NET"
                  githubLink="https://github.com/jibril04Afaa/ebook-reader"
                  demoLink="#"
                />
              </motion.div>

              {/* Project 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <ProjectProp
                  image={AfricanUB}
                  projectTitle="African Urban Dictionary"
                  langOrFramework1="React"
                  langOrFramework2=".NET"
                  langOrFramework3="PostgreSQL"
                  projectDescription="A full stack urban dictionary for African words and phrases built with a React frontend, a .NET backend, and a PostgreSQL database"
                  githubLink="https://github.com/jibril04Afaa/african-urban-dict"
                  demoLink="#"
                />
              </motion.div>

              {/* Project 3 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <ProjectProp
                  image={KnowTheQuran}
                  projectTitle="Know The Qur'an"
                  langOrFramework1="HTML"
                  langOrFramework2="CSS"
                  projectDescription="A static website in HTML and CSS to understand what the Holy Qur'an talks about in detail, separated by categories."
                  githubLink="https://github.com/jibril04Afaa/know-the-quran"
                  demoLink="#"
                />
              </motion.div>

              {/* Project 4 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <ProjectProp
                  image={Forex}
                  projectTitle="Forex Bureau Landing Page"
                  langOrFramework1="React"
                  langOrFramework2="SCSS"
                  projectDescription="A forex bureau landing page with a currency converter"
                  githubLink="https://github.com/jibril04Afaa/maltima-fb"
                  demoLink="#"
                />
              </motion.div>

              {/* Project 5 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <ProjectProp
                  image={FahdrissFarms}
                  projectTitle="E-Commerce Web App"
                  langOrFramework1="JavaScript"
                  langOrFramework2="HTML"
                  langOrFramework3="Node"
                  langOrFramework4="Express"
                  langOrFramework5="MongoDB"
                  projectDescription="An e-commerce web app for Fahdriss Farms"
                  githubLink="https://github.com/jibril04Afaa/fahdriss-farms"
                  demoLink="#"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;