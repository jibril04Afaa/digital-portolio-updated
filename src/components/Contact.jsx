import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiMapPin, FiPhone, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('Message sent successfully!');
      setIsSubmitting(false);
      e.target.reset(); // Reset form
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#0a0a0a]'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mt-16 md:mt-24"
      >
        {/* Contact Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className='text-4xl font-bold text-white mb-4 font-mono tracking-wider'>[CONTACT_SYSTEM]</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f6ff] to-[#9d4edd] mx-auto rounded-full mb-4"></div>
          <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
            <span className="text-[#00f6ff] font-mono">[COLLABORATION]</span> Interested in embedded AI, autonomous systems, or computer vision projects?
            <br className="hidden tablet:block" />
            <span className="text-[#9d4edd] font-mono">[CONNECT]</span> Connect with researchers and professionals in GPU computing, edge AI, and autonomous systems.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12'>
          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className='relative overflow-hidden rounded-2xl p-8 bg-[#121212] border border-[#00f6ff]/20 shadow-lg hover:shadow-[0_0_25px_rgba(0,246,255,0.2)] transition-all duration-300'
          >
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f6ff] to-[#9d4edd]'></div>
            <h2 className='text-2xl font-bold mb-6 text-white flex items-center gap-2 font-mono'>
              <FiMessageSquare className="text-[#00f6ff]" />
              [SEND_MESSAGE]
            </h2>
            
            <AnimatePresence>
              {submitStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className='p-4 mb-6 rounded-lg bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800'
                >
                  {submitStatus}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <motion.div 
                variants={itemVariants}
                className='flex flex-col gap-2'
              >
                <label htmlFor="name" className='text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2'>
                  <FiUser className="text-purple-500" />
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  required 
                  className='border-2 dark:border-gray-700 rounded-lg p-3 w-full dark:bg-gray-700/50 dark:text-white 
                    focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className='flex flex-col gap-2'
              >
                <label htmlFor="email" className='text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2'>
                  <FiMail className="text-purple-500" />
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  required 
                  className='border-2 dark:border-gray-700 rounded-lg p-3 w-full dark:bg-gray-700/50 dark:text-white
                    focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className='flex flex-col gap-2'
              >
                <label htmlFor="phone" className='text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2'>
                  <FiPhone className="text-purple-500" />
                  Phone (Optional)
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  className='border-2 dark:border-gray-700 rounded-lg p-3 w-full dark:bg-gray-700/50 dark:text-white
                    focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200'
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className='flex flex-col gap-2'
              >
                <label htmlFor="message" className='text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2'>
                  <FiMessageSquare className="text-purple-500" />
                  Your Message
                </label>
                <textarea 
                  id="message"
                  required 
                  rows="5"
                  className='border-2 dark:border-gray-700 rounded-lg p-3 w-full dark:bg-gray-700/50 dark:text-white
                    focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none'
                ></textarea>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className='flex justify-center mt-8'
              >
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03, boxShadow: '0 4px 12px rgba(168, 85, 247, 0.2)' }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative overflow-hidden rounded-xl px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800
                    transition-all duration-300 transform ${isSubmitting ? 'opacity-80' : 'opacity-100'}
                    flex items-center justify-center gap-2 min-w-[150px]`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <div className='space-y-8'>
            <motion.div 
              variants={itemVariants}
              className='bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <h3 className='text-2xl font-bold mb-6 dark:text-white'>Contact Information</h3>
              
              <div className='space-y-6'>
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='flex items-start gap-4 group'
                >
                  <div className='p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors'>
                    <FiMail className='text-xl' />
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-500 dark:text-gray-400'>Email</h4>
                    <a 
                      href="mailto:jibril04afaa@gmail.com" 
                      className='text-purple-600 dark:text-purple-400 hover:underline'
                    >
                      jibril04afaa@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className='flex items-start gap-4 group'
                >
                  <div className='p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors'>
                    <FiMapPin className='text-xl' />
                  </div>
                  <div>
                    <h4 className='font-medium text-gray-500 dark:text-gray-400'>Location</h4>
                    <p className='text-gray-700 dark:text-gray-300'>State College, PA, USA</p>
                  </div>
                </motion.div>
              </div>

              <div className='mt-8 pt-6 border-t border-gray-200 dark:border-gray-700'>
                <h4 className='text-lg font-semibold mb-4 dark:text-white'>Connect with me</h4>
                <div className='flex gap-4'>
                  {[
                    { name: 'GitHub', url: 'https://github.com/jibril04Afaa', icon: 'github' },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jibrilafaa/', icon: 'linkedin' },
                    { name: 'Twitter', url: 'https://twitter.com/jibril04afaa', icon: 'twitter' }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
                      aria-label={social.name}
                    >
                      <i className={`fab fa-${social.icon} text-xl`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div 
              variants={itemVariants}
              className='overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-lg'
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6040.7077071928115!2d-77.86248868909183!3d40.79821733221467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea6247f5d0291%3A0xad3e8e9b56e48269!2sThe%20Pennsylvania%20State%20University!5e0!3m2!1sen!2sus!4v1738035405052!5m2!1sen!2sus" 
                width="100%" 
                height="300"
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Penn State University Location"
                className='block w-full h-full'
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact