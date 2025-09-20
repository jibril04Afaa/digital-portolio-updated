import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FaPython } from "react-icons/fa"; // Python
import { RiJavascriptFill } from "react-icons/ri"; // JavaScript
import { FaLinux } from "react-icons/fa"; // Linux
import { SiTypescript } from "react-icons/si"; // TypeScript
import { SiCplusplus } from "react-icons/si"; // C++
import { SiC } from "react-icons/si"; // C
import { SiRos } from "react-icons/si"; // ROS2
import { SiNvidia } from "react-icons/si"; // CUDA & TensorRT
import { SiPytorch } from "react-icons/si"; // PyTorch
import { SiRaspberrypi } from "react-icons/si"; // Raspberry Pi
import { FaMicrochip } from "react-icons/fa"; // Microchip/Embedded
import { FaRobot } from "react-icons/fa"; // Robot


import { useState } from 'react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    },
    hover: {
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        y: { type: 'spring', stiffness: 300, damping: 10 },
        boxShadow: { duration: 0.3 }
      }
    }
  };

  const progressBar = (percentage) => ({
    hidden: { width: 0 },
    show: {
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.5
      }
    }
  });

  const skills = [
    { icon: <SiCplusplus size={40} />, name: 'C++', level: 85, category: 'languages' },
    { icon: <FaPython size={40} />, name: 'Python', level: 90, category: 'languages' },
    { icon: <SiC size={40} />, name: 'C', level: 75, category: 'languages' },
    { icon: <RiJavascriptFill size={40} />, name: 'JavaScript', level: 70, category: 'languages' },
    { icon: <SiTypescript size={40} />, name: 'TypeScript', level: 65, category: 'languages' },
    { icon: <SiRos size={40} />, name: 'ROS2', level: 80, category: 'frameworks' },
    { icon: <SiNvidia size={40} />, name: 'CUDA', level: 60, category: 'frameworks' },
    { icon: <SiPytorch size={40} />, name: 'PyTorch', level: 75, category: 'frameworks' },
    { icon: <SiNvidia size={40} />, name: 'TensorRT', level: 55, category: 'frameworks' },
    { icon: <FaMicrochip size={40} />, name: 'Jetson', level: 70, category: 'hardware' },
    { icon: <SiRaspberrypi size={40} />, name: 'Raspberry Pi', level: 80, category: 'hardware' },
    { icon: <FaRobot size={40} />, name: 'Computer Vision', level: 75, category: 'concepts' },
    { icon: <FaLinux size={40} />, name: 'Linux', level: 85, category: 'tools' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
    
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'languages', name: 'Programming' },
    { id: 'frameworks', name: 'AI/ML Tools' },
    { id: 'hardware', name: 'Hardware' },
    { id: 'concepts', name: 'Concepts' },
    { id: 'tools', name: 'Tools' },
  ];
  return (
    <div className="mt-32 relative" id="skills">
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#0a0a0a] bg-[linear-gradient(to_right,#00f6ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f6ff08_1px,transparent_1px)] bg-[size:20px_20px]">
        <motion.div 
          className="fixed left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-gradient-to-r from-[#00f6ff] via-[#9d4edd] to-[#00f6ff] opacity-10 blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="mt-16 md:mt-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Title */}
          <div className="flex flex-col items-center mb-12">
            <motion.h2 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00f6ff] to-[#9d4edd] mb-4 font-mono tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              [SKILLS_MATRIX]
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#00f6ff] to-[#9d4edd] rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-mono ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#00f6ff] to-[#9d4edd] text-[#0a0a0a] shadow-lg hover:shadow-[0_0_15px_rgba(0,246,255,0.5)]'
                    : 'bg-[#121212] text-gray-300 hover:bg-[#00f6ff]/10 hover:text-[#00f6ff] border border-[#00f6ff]/30'
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={item}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="relative group"
                variants={item}
                whileHover="hover"
              >
                <motion.div 
                  className="bg-[#121212] rounded-2xl p-6 shadow-md h-full flex flex-col items-center justify-center text-center cursor-default border border-[#00f6ff]/20 hover:border-[#00f6ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,246,255,0.2)]"
                  variants={item}
                >
                  <div className="text-4xl mb-3 text-[#00f6ff] hover:text-[#9d4edd] transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2 font-mono">
                    {skill.name}
                  </h3>
                  
                  {/* Animated Progress Bar */}
                  <div className="w-full bg-[#0a0a0a] rounded-full h-2.5 mt-3 border border-[#00f6ff]/30">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#00f6ff] to-[#9d4edd] rounded-full"
                      variants={progressBar(skill.level)}
                      initial="hidden"
                      animate="show"
                    />
                  </div>
                  
                  <span className="text-xs text-[#00f6ff] mt-2 font-mono">
                    {skill.level}%
                  </span>
                </motion.div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00f6ff]/10 to-[#9d4edd]/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Additional Skills */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 font-mono">
              [ADDITIONAL_MODULES]
            </h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {['Git', 'CMake', 'OpenCV', 'YOLOv8', 'Real-Time Systems', 'Parallel Computing', 'Embedded AI', 'Edge Computing', 'GPU Programming', 'Machine Learning'].map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1.5 bg-[#121212] text-[#00f6ff] text-sm rounded-lg border border-[#00f6ff]/30 hover:border-[#00f6ff]/60 hover:bg-[#00f6ff]/10 transition-all duration-300 font-mono"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
