import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import MeBrown from "../img/me-brown-shirt.jpg";
import HeroFooter from "./HeroFooter";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
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
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.2
      } 
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const gradientVariants = {
    initial: {
      backgroundPosition: '0% 50%',
    },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };
  return (
    <>
    <div className="container mx-auto px-6 py-8 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-gradient-to-r from-fuchsia-400 via-blue-400 to-purple-500 opacity-20 blur-[100px]"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
      />
      
      <div className="flex sm:flex-col-reverse tablet:flex-row justify-between items-center mt-8" ref={ref}>
        <motion.div 
          className="flex flex-col gap-8 sm:w-full tablet:w-1/2"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
        
          <motion.div className="sm:text-center tablet:text-left pl-4 sm:pl-6 md:pl-8 lg:pl-12" variants={item}>
            <motion.p 
              className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm Jibril
            </motion.p>
            <motion.h1 
              className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-2 sm:mt-3 md:mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Software Engineer
              <span className="block sm:inline-block mt-2 sm:mt-0">
                & Computer Science Student
              </span>
            </motion.h1>
          </motion.div>

          <motion.div 
            className="sm:text-center tablet:text-left pl-4 sm:pl-6 md:pl-8 lg:pl-12 mt-4 sm:mt-6"
            variants={item}
          >
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl">
              I build exceptional digital experiences with modern technologies. Currently working as a SWE Intern at Alli Marketplace, specializing in backend development with TypeScript and Node.js.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
              <motion.a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
                <FaArrowDown className="inline" />
              </motion.a>
              <div className="flex gap-4 mt-2 sm:mt-0">
                <motion.a
                  href="https://www.linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CiLinkedin />
                </motion.a>
                <motion.a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
          </motion.div>
        
        </motion.div>

        <motion.div 
          className="mt-12 sm:mt-16 md:mt-0 flex justify-center tablet:justify-end w-full tablet:w-1/2"
          variants={item}
        >
          <motion.div
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <img 
              src={MeBrown} 
              alt="Jibril" 
              className="h-full w-full object-cover object-top rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.div>
        
      </div>
    </div>

    <div>
      <HeroFooter/>
    </div>
    </>
  )
}

export default Hero