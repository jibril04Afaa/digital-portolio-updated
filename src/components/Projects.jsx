import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import EBookReader from '../img/e-book-reader.png';
import AfricanUB from '../img/AfricanUrban.png';
import HealthApp from '../img/research-mobile-app.jpg';
import ProjectProp from "./ProjectProp";

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-8 justify-center"
          >
            <AnimatePresence>
              {/* Project 1 - E-Book Reader */}
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

              {/* Project 2 - African Urban Dictionary */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <ProjectProp
                  image={AfricanUB}
                  projectTitle="African Urban Dictionary"
                  langOrFramework1="React"
                  langOrFramework2="Springboot"
                  langOrFramework3="PostgreSQL"
                  projectDescription="A full stack urban dictionary for African words and phrases built with a React frontend, a Springboot backend, and a PostgreSQL database"
                  githubLink="https://github.com/jibril04Afaa/african-urban-dict"
                  demoLink="#"
                />
              </motion.div>

              {/* Project 3 - Health Mobile App */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <ProjectProp
                  image={HealthApp}
                  projectTitle="Health Mobile App"
                  langOrFramework1="React Native"
                  langOrFramework2="Node.js"
                  projectDescription="A mobile application for health tracking and monitoring, built with React Native and Node.js"
                  githubLink="#"
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