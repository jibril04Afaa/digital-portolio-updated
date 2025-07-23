import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import MeBrown from "../img/me-brown-shirt.jpg";
import HeroFooter from "./HeroFooter";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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
        
          <motion.div className="sm:text-center tablet:text-left" variants={item}>
            <motion.p 
              className="font-bold sm:text-xl tablet:text-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              I am Jibril
            </motion.p>
            <motion.h1 
              className="font-bold text-4xl sm:text-2xl tablet:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Software Engineer, Writer +  
              <br />Computer Science Student
            </motion.h1>
          </motion.div>

          <motion.div 
            className="sm:text-center tablet:text-left"
            variants={item}
          >
            <p className="sm:text-sm tablet:text-2xl">
              I am a curious and determined computer science student
              embracing authenticity in all aspects of life. An explorer
              through reading and driven by a passion for self-improvement,
              I have leadership and tech experience, and
              strive to balance discipline with creativity to reach my goals.
            </p>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4 sm:justify-center tablet:justify-start"
            variants={item}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/Jibril-Afaa.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-blue-500 px-6 py-3 text-lg font-medium text-blue-500 shadow-lg transition-all duration-300 hover:bg-blue-500 hover:text-white"
              >
                <span className="absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-center bg-blue-500 text-white duration-300 group-hover:-translate-x-2">
                  <FaArrowRight className="h-5 w-5" />
                </span>
                <span className="transform transition-all duration-300 group-hover:-translate-x-3">
                  Download Resume
                </span>
              </a>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              variants={container}
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
              >
                <a 
                  href="https://www.linkedin.com/in/jibrilafaa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <CiLinkedin className="text-4xl"/>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={item}
              >
                <a 
                  href="https://github.com/jibril04Afaa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <FaGithub className="text-4xl"/>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        
        </motion.div>

        <motion.div 
          className="sm:flex justify-center items-center pb-8 w-full tablet:w-1/2 tablet:flex tablet:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="relative mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Image container */}
            <motion.div 
              className="relative"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {/* Animated gradient border */}
              <motion.div 
                className="absolute -inset-0.5 rounded-3xl blur-sm"
                animate={{
                  background: [
                    'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                    'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #ec4899, #3b82f6, #8b5cf6, #ec4899)',
                    'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                  ],
                  backgroundSize: '300% 300%',
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              {/* Image */}
              <div className="relative bg-white rounded-3xl overflow-hidden">
                <motion.img 
                  src={MeBrown} 
                  alt="Profile picture"
                  className="rounded-3xl w-[300px] sm:w-[250px] shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
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