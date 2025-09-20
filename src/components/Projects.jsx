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

  const projectFilters = ['All', 'Embedded AI', 'Autonomous Systems', 'Computer Vision', 'Systems Design'];

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a0a0a]">
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
            <h2 className="text-4xl font-bold text-white mb-4 font-mono tracking-wider">[PROJECT_MATRIX]</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00f6ff] to-[#9d4edd] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              <span className="text-[#00f6ff] font-mono">[STATUS]</span> Recent embedded AI and autonomous systems projects.
              <br className="hidden tablet:block" />
              <span className="text-[#9d4edd] font-mono">[FOCUS]</span> Real-time performance, edge optimization, and hardware-AI convergence.
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
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-mono ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#00f6ff] to-[#9d4edd] text-[#0a0a0a] shadow-lg hover:shadow-[0_0_15px_rgba(0,246,255,0.5)]'
                    : 'bg-[#121212] border-2 border-[#00f6ff]/30 text-gray-300 hover:border-[#00f6ff]/60 hover:bg-[#00f6ff]/10'
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
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 246, 255, 0.2), 0 10px 10px -5px rgba(157, 78, 221, 0.1)' }}
                className="relative overflow-hidden rounded-2xl bg-[#121212] border border-[#00f6ff]/20 hover:border-[#00f6ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,246,255,0.2)]"
              >
                <ProjectProp
                  image={EBookReader}
                  projectTitle="Edge-Optimized Image Scaling"
                  langOrFramework1="C++"
                  langOrFramework2="Python"
                  langOrFramework3="Raspberry Pi"
                  langOrFramework4="libjpeg-turbo"
                  projectDescription="Modular embedded video pipeline with AI-based super-resolution on Raspberry Pi and Jetson Orin platforms"
                  githubLink="https://github.com/jibril04Afaa/edge-image-scaling"
                  demoLink="#"
                />
              </motion.div>

              {/* Project 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 246, 255, 0.2), 0 10px 10px -5px rgba(157, 78, 221, 0.1)' }}
                className="relative overflow-hidden rounded-2xl bg-[#121212] border border-[#00f6ff]/20 hover:border-[#00f6ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,246,255,0.2)]"
              >
                <ProjectProp
                  image={AfricanUB}
                  projectTitle="Autonomous Vehicle Team – Perception"
                  langOrFramework1="ROS2"
                  langOrFramework2="Jetson Nano"
                  langOrFramework3="YOLOv8"
                  projectDescription="Real-time object detection and tracking system for autonomous vehicles using ROS2, Jetson hardware, and YOLOv8"
                  githubLink="https://github.com/jibril04Afaa/autonomous-perception"
                  demoLink="#"
                />
              </motion.div>

              {/* Project 3 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 246, 255, 0.2), 0 10px 10px -5px rgba(157, 78, 221, 0.1)' }}
                className="relative overflow-hidden rounded-2xl bg-[#121212] border border-[#00f6ff]/20 hover:border-[#00f6ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,246,255,0.2)]"
              >
                <ProjectProp
                  image={KnowTheQuran}
                  projectTitle="GPU-Accelerated Computer Vision"
                  langOrFramework1="CUDA"
                  langOrFramework2="OpenCV"
                  langOrFramework3="TensorRT"
                  projectDescription="Real-time computer vision pipeline optimized for GPU acceleration using CUDA, OpenCV, and TensorRT for edge deployment"
                  githubLink="https://github.com/jibril04Afaa/gpu-cv-pipeline"
                  demoLink="#"
                />
              </motion.div>

              {/* Project 4 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 246, 255, 0.2), 0 10px 10px -5px rgba(157, 78, 221, 0.1)' }}
                className="relative overflow-hidden rounded-2xl bg-[#121212] border border-[#00f6ff]/20 hover:border-[#00f6ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,246,255,0.2)]"
              >
                <ProjectProp
                  image={Forex}
                  projectTitle="E-Book Reader (Systems Design Foundation)"
                  langOrFramework1="React"
                  langOrFramework2=".NET"
                  langOrFramework3="PostgreSQL"
                  projectDescription="Full-stack application demonstrating systems design principles with React frontend, .NET backend, and PostgreSQL database"
                  githubLink="https://github.com/jibril04Afaa/ebook-reader"
                  demoLink="#"
                />
              </motion.div>

              {/* Project 5 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 246, 255, 0.2), 0 10px 10px -5px rgba(157, 78, 221, 0.1)' }}
                className="relative overflow-hidden rounded-2xl bg-[#121212] border border-[#00f6ff]/20 hover:border-[#00f6ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,246,255,0.2)]"
              >
                <ProjectProp
                  image={FahdrissFarms}
                  projectTitle="African Urban Dictionary (Systems Design Foundation)"
                  langOrFramework1="React"
                  langOrFramework2=".NET"
                  langOrFramework3="PostgreSQL"
                  projectDescription="Full-stack urban dictionary demonstrating scalable architecture with React frontend, .NET backend, and PostgreSQL database"
                  githubLink="https://github.com/jibril04Afaa/african-urban-dict"
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