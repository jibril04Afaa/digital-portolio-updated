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
            I'm currently a <span className={gradientText}>senior Computer Science student</span> at Penn State University, 
            specializing in Software Engineering and Artificial Intelligence. I'm passionate about building efficient, 
            scalable applications that solve real-world problems.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'
          >
            As a <span className={gradientText}>Software Engineer Intern</span> at{' '}
            <a 
              href="https://alli.market" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              Alli Marketplace
            </a>, I work on the backend infrastructure using TypeScript and Node.js. 
            My contributions include developing RESTful APIs, optimizing database queries, and implementing 
            authentication systems to enhance platform security and performance.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'
          >
            I'm also conducting research at the{' '}
            <span className={gradientText}>Penn State College of Engineering</span>, where I'm leading 
            the development of a mobile health application using React Native. This project involves implementing 
            real-time health monitoring, data visualization, and secure user authentication to improve 
            patient care through technology.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'
          >
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or mentoring fellow students in computer science. I'm always excited about opportunities to collaborate 
            on innovative projects that make a positive impact.
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