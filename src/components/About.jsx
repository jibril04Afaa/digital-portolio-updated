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

  const gradientText = "font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text";

  return (
    <section id="about" className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
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
          <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>About Me</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 mx-auto rounded-full'></div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          variants={itemVariants}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <motion.p 
            variants={itemVariants}
            className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'
          >
            I am currently a 
            <span className={`${gradientText} transition-all duration-300 hover:bg-clip-border hover:border-b-2 hover:border-transparent hover:bg-gradient-to-r hover:from-red-500 hover:via-purple-500 hover:to-blue-500`}>
              Web Developer Intern
            </span>
            {' '}at a startup called Alli Marketplace where I work on the frontend and backend of their 
            website with ReactJS, TailwindCSS, and NodeJS.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'
          >
            At the same time, I am undergoing research in the{' '}
            <span className={`${gradientText} transition-all duration-300 hover:bg-clip-border hover:border-b-2 hover:border-transparent hover:bg-gradient-to-r hover:from-red-500 hover:via-purple-500 hover:to-blue-500`}>
              Penn State College of Engineering
            </span>
            {' '}where I am working with other students to build a mobile application with React Native that uses NLP 
            to process data entries and create insightful data visualizations.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'
          >
            I also serve as a{' '}
            <span className={`${gradientText} transition-all duration-300 hover:bg-clip-border hover:border-b-2 hover:border-transparent hover:bg-gradient-to-r hover:from-red-500 hover:via-purple-500 hover:to-blue-500`}>
              Resident Assistant
            </span>
            {' '}at Penn State, where I help foster a supportive and engaging community for students in university housing.
          </motion.p>

          {/* Writing Section */}
          <motion.div 
            variants={itemVariants}
            className='mt-12 text-center'
          >
            <motion.p 
              variants={itemVariants}
              className='text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8'
            >
              Outside of school, I write short essays and stories on various topics and thoughts.
            </motion.p>

            {/* Writing Button */}
            <motion.div 
              className='flex justify-center'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a 
                href="https://drive.google.com/drive/u/0/folders/1mYUiQxjQcnm2nLvuSBAeuA5ia6TaGEaR"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">See My Writing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About