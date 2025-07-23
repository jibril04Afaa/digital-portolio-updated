import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FaJava } from "react-icons/fa"; // Java
import { FaReact } from "react-icons/fa"; // React
import { TbBrandCSharp } from "react-icons/tb"; // C#
import { FaPython } from "react-icons/fa"; // Python
import { AiOutlineDotNet } from "react-icons/ai"; // .NET
import { RiJavascriptFill } from "react-icons/ri"; // JavaScript
import { FaNode } from "react-icons/fa"; // Node.js
import { BiLogoPostgresql } from "react-icons/bi"; // PostgreSQL
import { FaSass } from "react-icons/fa"; // SASS/SCSS
import { RiTailwindCssFill } from "react-icons/ri"; // Tailwind CSS
import { FaLinux } from "react-icons/fa"; // Linux
import { SiTypescript } from "react-icons/si"; // TypeScript
import { SiExpress } from "react-icons/si"; // Express.js


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
    { icon: <TbBrandCSharp size={40} />, name: 'C#', level: 75, category: 'languages' },
    { icon: <FaJava size={40} />, name: 'Java', level: 60, category: 'languages' },
    { icon: <FaPython size={40} />, name: 'Python', level: 80, category: 'languages' },
    { icon: <RiJavascriptFill size={40} />, name: 'JavaScript', level: 70, category: 'languages' },
    { icon: <SiTypescript size={40} />, name: 'TypeScript', level: 65, category: 'languages' },
    { icon: <FaReact size={40} />, name: 'React', level: 75, category: 'frameworks' },
    { icon: <AiOutlineDotNet size={40} />, name: '.NET', level: 70, category: 'frameworks' },
    { icon: <FaNode size={40} />, name: 'Node.js', level: 65, category: 'frameworks' },
    { icon: <SiExpress size={30} />, name: 'Express', level: 60, category: 'frameworks' },
    { icon: <RiTailwindCssFill size={40} />, name: 'TailwindCSS', level: 80, category: 'styling' },
    { icon: <FaSass size={40} />, name: 'SASS/SCSS', level: 75, category: 'styling' },
    { icon: <BiLogoPostgresql size={40} />, name: 'PostgreSQL', level: 70, category: 'databases' },
    { icon: <FaLinux size={40} />, name: 'Linux', level: 65, category: 'tools' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
    
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'styling', name: 'Styling' },
    { id: 'databases', name: 'Databases' },
    { id: 'tools', name: 'Tools' },
  ];
  return (
    <div className="mt-32 relative" id="skills">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <motion.div 
          className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-gradient-to-r from-fuchsia-400 via-blue-400 to-purple-500 opacity-20 blur-[100px]"
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
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Skills
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
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
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md h-full flex flex-col items-center justify-center text-center cursor-default"
                  variants={item}
                >
                  <div className="text-4xl mb-3 text-blue-500 dark:text-blue-400">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  
                  {/* Animated Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-3">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      variants={progressBar(skill.level)}
                      initial="hidden"
                      animate="show"
                    />
                  </div>
                  
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {skill.level}%
                  </span>
                </motion.div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
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
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              And more...
            </h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {['Git', 'Docker', 'AWS', 'REST APIs', 'GraphQL', 'MongoDB', 'Firebase', 'Figma', 'Agile/Scrum', 'Jira'].map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
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
