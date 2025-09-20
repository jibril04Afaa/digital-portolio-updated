import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiCode, FiExternalLink as FiLink } from 'react-icons/fi';

const ProjectProp = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`project-${props.id || props.projectTitle}`);
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [props.id, props.projectTitle]);

  // Extract tech stack from props
  const techStack = [
    props.langOrFramework1,
    props.langOrFramework2,
    props.langOrFramework3,
    props.langOrFramework4,
    props.langOrFramework5,
    props.langOrFramework6,
    props.langOrFramework7,
    props.langOrFramework8
  ].filter(Boolean);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const imageHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      id={`project-${props.id || props.projectTitle}`}
      className="h-full flex flex-col group"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      aria-label={`Project: ${props.projectTitle}`}
    >
      <div className='h-full flex flex-col p-6 bg-[#121212] rounded-2xl shadow-sm hover:shadow-[0_0_20px_rgba(0,246,255,0.2)] transition-all duration-300 border border-[#00f6ff]/20 hover:border-[#00f6ff]/50'>
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-xl mb-6 aspect-video">
          <motion.div 
            className="relative h-full w-full overflow-hidden rounded-lg"
            variants={imageHoverVariants}
            initial="initial"
            whileHover="hover"
          >
            <img 
              src={props.image} 
              alt={`Screenshot of ${props.projectTitle}`} 
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6"
                  variants={overlayVariants}
                  initial="initial"
                  animate="hover"
                  exit="initial"
                >
                  <div className="flex gap-3">
                    {props.githubLink && (
                      <motion.a 
                        href={props.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-800 p-2 rounded-full hover:bg-white transition-colors"
                        aria-label={`View ${props.projectTitle} on GitHub`}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                    )}
                    {props.demoLink && props.demoLink !== '#' && (
                      <motion.a 
                        href={props.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 text-blue-600 p-2 rounded-full hover:bg-white transition-colors"
                        aria-label={`View ${props.projectTitle} live demo`}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="flex-1 flex flex-col">
          {/* Project Name */}
          <h2 className='text-xl font-bold text-white mb-2 group-hover:text-[#00f6ff] transition-colors font-mono'>
            {props.projectTitle}
          </h2>

          {/* Project Description */}
          <div className="mb-4 flex-grow">
            <p className="text-gray-300 text-sm leading-relaxed">
              {props.projectDescription}
            </p>
          </div>

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <div className="mb-4">
              <ul className='flex flex-wrap gap-2'>
                {techStack.map((tech, index) => (
                  <motion.li 
                    key={index} 
                    className="bg-gradient-to-r from-[#00f6ff]/20 to-[#9d4edd]/20 text-[#00f6ff] border border-[#00f6ff]/30 px-3 py-1 rounded-lg text-xs font-medium font-mono hover:border-[#00f6ff]/60 transition-colors"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className='mt-auto pt-4 border-t border-[#00f6ff]/20 flex gap-3'>
            {props.githubLink && (
              <motion.a
                href={props.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0a0a0a] hover:bg-[#00f6ff] hover:text-[#0a0a0a] text-[#00f6ff] text-sm font-medium rounded-lg transition-colors border border-[#00f6ff]/30 hover:border-[#00f6ff] font-mono"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label={`View source code for ${props.projectTitle}`}
              >
                <FiCode className="w-4 h-4" />
                <span>Code</span>
              </motion.a>
            )}
            
            <motion.a
              href={props.demoLink || '#'}
              target={props.demoLink && props.demoLink !== '#' ? "_blank" : undefined}
              rel={props.demoLink && props.demoLink !== '#' ? "noopener noreferrer" : undefined}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors font-mono ${
                props.demoLink === '#' || !props.demoLink
                  ? 'bg-[#121212] text-gray-500 cursor-not-allowed border border-gray-600' 
                  : 'bg-gradient-to-r from-[#9d4edd] to-[#00f6ff] text-[#0a0a0a] hover:from-[#9d4edd]/80 hover:to-[#00f6ff]/80 shadow-md hover:shadow-[0_0_15px_rgba(157,78,221,0.5)]'
              }`}
              variants={buttonVariants}
              whileHover={props.demoLink === '#' ? {} : "hover"}
              whileTap={props.demoLink === '#' ? {} : "tap"}
              aria-disabled={props.demoLink === '#' || !props.demoLink}
              aria-label={props.demoLink === '#' || !props.demoLink 
                ? 'Demo coming soon' 
                : `View live demo of ${props.projectTitle}`}
            >
              <FiLink className="w-4 h-4" />
              <span>{props.demoLink === '#' || !props.demoLink ? 'Coming Soon' : 'Live Demo'}</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectProp;
