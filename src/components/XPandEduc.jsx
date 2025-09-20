import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuGraduationCap, LuArrowUpRight } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";

const XPandEduc = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const experienceData = [
    {
      id: 1,
      title: 'Autonomous Vehicle Team Member',
      company: 'Penn State Autonomous Vehicle Team',
      timeline: 'Jan 2024 - Present',
      location: 'State College, PA',
      description: 'Working on perception systems for autonomous vehicles using ROS2, Jetson hardware, and YOLOv8 for real-time object detection and tracking.',
      skills: ['ROS2', 'Jetson', 'YOLOv8', 'Computer Vision', 'Real-time Systems']
    },
    {
      id: 2,
      title: 'Capstone Project Lead',
      company: 'Penn State University',
      timeline: 'Aug 2024 - Present',
      location: 'State College, PA',
      description: 'Leading development of modular embedded video pipeline with AI-based super-resolution on Raspberry Pi and Jetson Orin platforms.',
      skills: ['C++', 'Python', 'libjpeg-turbo', 'Embedded Systems', 'AI/ML']
    },
    {
      id: 3,
      title: 'Software Engineer Intern',
      company: 'Axon Information Systems',
      timeline: 'May 2024 - August 2024',
      location: 'Accra, Ghana',
      description: 'Developed and maintained enterprise software solutions, gaining foundational experience in systems design.',
      skills: ['JavaScript', 'React', 'Python', 'Django', 'Systems Design']
    },
    {
      id: 4,
      title: 'Resident Assistant',
      company: 'Penn State University',
      timeline: 'May 2024 - August 2024',
      location: 'State College, PA',
      description: 'Supported residential students and organized community events, developing leadership and communication skills.',
      skills: ['Leadership', 'Event Planning', 'Community Building']
    }
  ];

  const educationData = [
    {
      id: 1,
      degree: 'B.S Computer Science',
      institution: 'The Pennsylvania State University',
      timeline: 'Expected Graduation - June 2026',
      location: 'State College, PA',
      description: 'Focus on Embedded Systems, Artificial Intelligence, and Autonomous Systems',
      courses: ['Computer Vision', 'Machine Learning', 'Real-Time Systems', 'Parallel Computing', 'Embedded Systems', 'Robotics']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mt-16 md:mt-24"
      >
        {/* Tabs for Mobile */}
        <div className="flex md:hidden justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            {['experience', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab === 'experience' ? 'Experience' : 'Education'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section - Always visible on desktop, toggled on mobile */}
          <motion.div 
            className={`${activeTab === 'experience' ? 'block' : 'hidden'} lg:block`}
            variants={itemVariants}
          >
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <IoBriefcaseOutline className="text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Experience</h2>
              </div>

              <div className="w-full space-y-6">
                <AnimatePresence>
                  {experienceData.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      className="group relative overflow-hidden p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="text-purple-600 dark:text-purple-400 font-medium">{item.company}</p>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                            {item.timeline}
                          </div>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center text-sm text-purple-600 dark:text-purple-400">
                          <span>{item.location}</span>
                          <LuArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* Education Section - Always visible on desktop, toggled on mobile */}
          <motion.div 
            className={`${activeTab === 'education' ? 'block' : 'hidden'} lg:block`}
            variants={itemVariants}
          >
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <LuGraduationCap className="text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Education</h2>
              </div>

              <div className="w-full space-y-6">
                <AnimatePresence>
                  {educationData.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      className="group relative overflow-hidden p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h3>
                            <p className="text-purple-600 dark:text-purple-400 font-medium">{item.institution}</p>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                            {item.timeline}
                          </div>
                        </div>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.courses.map((course, i) => (
                              <span 
                                key={i}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm text-purple-600 dark:text-purple-400">
                          <span>{item.location}</span>
                          <LuArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default XPandEduc;