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
    <div className="container mx-auto px-6 py-8 relative overflow-hidden bg-[#0a0a0a]">
      {/* Circuit/Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f6ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f6ff08_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00f6ff05_0%,transparent_50%)]"></div>
      {/* Animated AI Core */}
      <motion.div 
        className="fixed left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-gradient-to-r from-[#00f6ff] via-[#9d4edd] to-[#00f6ff] opacity-10 blur-[120px]"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
      />
      
      {/* Floating Circuit Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-2 h-2 bg-[#00f6ff] rounded-full"
        animate={{ 
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-32 right-16 w-1 h-1 bg-[#9d4edd] rounded-full"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-[#00f6ff] rounded-full"
        animate={{ 
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
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
              className="font-mono text-[#00f6ff] sm:text-lg tablet:text-xl tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              &gt; INITIALIZING_SYSTEM...
            </motion.p>
            <motion.h1 
              className="font-bold text-5xl sm:text-3xl tablet:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#00f6ff] via-[#9d4edd] to-[#00f6ff] font-mono tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              EMBEDDED AI &<br />
              AUTONOMOUS SYSTEMS<br />
              <span className="text-2xl sm:text-xl tablet:text-2xl text-[#00f6ff]">ENGINEER_IN_TRAINING</span>
            </motion.h1>
          </motion.div>

          <motion.div 
            className="sm:text-center tablet:text-left"
            variants={item}
          >
            <p className="sm:text-sm tablet:text-xl text-gray-300 leading-relaxed">
              <span className="text-[#00f6ff] font-mono">[PIPELINE_STATUS]</span> Building real-time perception pipelines, 
              edge-optimized AI, and GPU-accelerated systems. 
              <br className="hidden tablet:block" />
              <span className="text-[#9d4edd] font-mono">[FOCUS]</span> Autonomous systems, computer vision, 
              and pushing the boundaries of hardware-intelligence convergence.
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
                className="group relative inline-flex items-center overflow-hidden rounded-lg border-2 border-[#00f6ff] px-8 py-4 text-lg font-mono font-bold text-[#00f6ff] shadow-lg transition-all duration-300 hover:bg-[#00f6ff] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(0,246,255,0.5)]"
              >
                <span className="absolute right-0 flex h-12 w-12 translate-x-full transform items-center justify-center bg-[#00f6ff] text-[#0a0a0a] duration-300 group-hover:-translate-x-2">
                  <FaArrowRight className="h-5 w-5" />
                </span>
                <span className="transform transition-all duration-300 group-hover:-translate-x-3">
                  [DOWNLOAD_RESUME]
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
                  className="text-4xl text-gray-400 hover:text-[#00f6ff] transition-colors hover:drop-shadow-[0_0_10px_rgba(0,246,255,0.5)]"
                >
                  <CiLinkedin className="text-5xl"/>
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
                  className="text-4xl text-gray-400 hover:text-[#9d4edd] transition-colors hover:drop-shadow-[0_0_10px_rgba(157,78,221,0.5)]"
                >
                  <FaGithub className="text-5xl"/>
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
              {/* Animated AI Core Border */}
              <motion.div 
                className="absolute -inset-1 rounded-3xl blur-sm"
                animate={{
                  background: [
                    'linear-gradient(45deg, #00f6ff, #9d4edd, #00f6ff, #9d4edd)',
                    'linear-gradient(45deg, #9d4edd, #00f6ff, #9d4edd, #00f6ff)',
                    'linear-gradient(45deg, #00f6ff, #9d4edd, #00f6ff, #9d4edd)',
                  ],
                  backgroundSize: '300% 300%',
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              {/* Image Container */}
              <div className="relative bg-[#121212] rounded-3xl overflow-hidden border border-[#00f6ff]/20">
                <motion.img 
                  src={MeBrown} 
                  alt="Profile picture"
                  className="rounded-3xl w-[300px] sm:w-[250px] shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00f6ff]/10 to-transparent rounded-3xl"></div>
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