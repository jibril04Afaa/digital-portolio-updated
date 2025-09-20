import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const gradientText = "font-bold bg-gradient-to-r from-[#00f6ff] via-[#9d4edd] to-[#00f6ff] text-transparent bg-clip-text font-mono";

  return (
    <section id="about" className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a0a0a]'>
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4 py-8"
      >
        {/* Title Container */}
        <motion.div 
          variants={itemVariants}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold text-white mb-4 font-mono tracking-wider'>[ABOUT_SYSTEM]</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-[#00f6ff] via-[#9d4edd] to-[#00f6ff] mx-auto rounded-full'></div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          variants={itemVariants}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <motion.p 
            variants={itemVariants}
            className='text-lg leading-relaxed text-gray-300'
          >
            <span className="text-[#00f6ff] font-mono">[STATUS]</span> Currently a 
            <span className={`${gradientText} transition-all duration-300 hover:bg-clip-border hover:border-b-2 hover:border-transparent hover:bg-gradient-to-r hover:from-[#00f6ff] hover:via-[#9d4edd] hover:to-[#00f6ff]`}>
              Senior Computer Science Student
            </span>
            {' '}at Penn State University, pursuing embedded AI and autonomous systems. 
            <br className="hidden tablet:block" />
            <span className="text-[#9d4edd] font-mono">[FOCUS]</span> Hardware optimization and artificial intelligence convergence.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className='text-lg leading-relaxed text-gray-300'
          >
            <span className="text-[#00f6ff] font-mono">[CAPSTONE_PROJECT]</span> Developing a{' '}
            <span className={`${gradientText} transition-all duration-300 hover:bg-clip-border hover:border-b-2 hover:border-transparent hover:bg-gradient-to-r hover:from-[#00f6ff] hover:via-[#9d4edd] hover:to-[#00f6ff]`}>
              modular embedded video pipeline
            </span>
            {' '}on Raspberry Pi and Jetson Orin platforms.
            <br className="hidden tablet:block" />
            <span className="text-[#9d4edd] font-mono">[TECH_STACK]</span> C++, Python, libjpeg-turbo, AI-based super-resolution for real-time processing.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className='text-lg leading-relaxed text-gray-300'
          >
            <span className="text-[#00f6ff] font-mono">[TEAM_ROLE]</span> Active member of the{' '}
            <span className={`${gradientText} transition-all duration-300 hover:bg-clip-border hover:border-b-2 hover:border-transparent hover:bg-gradient-to-r hover:from-[#00f6ff] hover:via-[#9d4edd] hover:to-[#00f6ff]`}>
              Penn State Autonomous Vehicle Team
            </span>
            {' '}working on perception systems.
            <br className="hidden tablet:block" />
            <span className="text-[#9d4edd] font-mono">[TECHNOLOGIES]</span> ROS2, Jetson hardware, YOLOv8, CUDA, TensorRT, real-time OS optimization.
          </motion.p>

          {/* Writing Section */}
          <motion.div 
            variants={itemVariants}
            className='mt-12 text-center'
          >
            <motion.p 
              variants={itemVariants}
              className='text-lg leading-relaxed text-gray-300 mb-8'
            >
              <span className="text-[#00f6ff] font-mono">[PASSION]</span> Passionate about autonomous systems and edge AI deployment challenges.
              <br className="hidden tablet:block" />
              <span className="text-[#9d4edd] font-mono">[RESEARCH]</span> Exploring computer vision and embedded systems innovations.
            </motion.p>

            {/* Writing Button */}
            <motion.div 
              className='flex justify-center'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a 
                href="https://github.com/jibril04Afaa"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden px-8 py-4 rounded-lg bg-gradient-to-r from-[#00f6ff] via-[#9d4edd] to-[#00f6ff] text-[#0a0a0a] font-mono font-bold text-lg shadow-lg hover:shadow-[0_0_25px_rgba(0,246,255,0.5)] transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(0, 246, 255, 0.5)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">[VIEW_PROJECTS]</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#9d4edd] via-[#00f6ff] to-[#9d4edd] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About