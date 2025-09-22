import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ProjectProp from "../components/ProjectProp";
import placeholderImage from '../img/know-the-Quran.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a0a0a]">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mt-16 md:mt-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono tracking-wider">[PROJECT_MATRIX]</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00f6ff] to-[#9d4edd] mx-auto rounded-full" />
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              <span className="text-[#00f6ff] font-mono">[STATUS]</span> Recent embedded AI and autonomous systems projects.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-8">
            <AnimatePresence>
              <motion.div variants={itemVariants} className="relative overflow-hidden rounded-2xl bg-[#121212] border border-[#00f6ff]/20">
                <ProjectProp
                  image={placeholderImage}
                  projectTitle="ROS Health Monitor"
                  langOrFramework1="ROS2"
                  langOrFramework2="Python"
                  langOrFramework3="Prometheus"
                  projectDescription={`Monitoring system components (sensors: LIDAR, cameras, GPS), control nodes, localization, perception; detecting failures (unresponsive nodes, high CPU, stale topics, incorrect sensor values, 0 GPS points); raising alerts and corrective actions (emergency stop, reinitialize subsystems); uses ROS diagnostics.`}
                  githubLink="https://github.com/jibril04Afaa/ros-health-monitor"
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