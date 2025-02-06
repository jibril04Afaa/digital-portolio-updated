import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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
    }, 1000);
  };

  return (
    <div className='mt-32'>
      <div>
        <div>
          {/* Contact */}
          <div className='flex justify-center items-center mt-4'>
            <h2 className='text-3xl font-bold dark:text-white'>Contact</h2>
          </div>

          {/* Contact Body */}
          <div className='flex flex-col sm:items-center gap-12 px-4 mt-8 max-w-7xl mx-auto'>
            {/* Send message */}
            <div className='border-2 dark:border-gray-700 rounded-xl p-8 w-full sm:max-w-2xl dark:bg-gray-800'>
              <h2 className='text-2xl font-bold mb-4 dark:text-white'>Send a Message</h2>
              <p className='mb-6 dark:text-gray-300'>Enter your details to send me an email here!</p>
              
              {/* Status Message */}
              {submitStatus && (
                <div className='p-4 mb-4 rounded-lg bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'>
                  {submitStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className='space-y-4'>
                {/* Name */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor="name" className='dark:text-white'>Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required 
                    className='border-2 dark:border-gray-700 rounded-md p-2 w-full dark:bg-gray-700 dark:text-white'
                  />
                </div>

                {/* Email */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor="email" className='dark:text-white'>Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required 
                    className='border-2 dark:border-gray-700 rounded-md p-2 w-full dark:bg-gray-700 dark:text-white'
                  />
                </div>

                {/* Phone */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor="phone" className='dark:text-white'>Phone No.</label>
                  <input 
                    type="tel" 
                    id="phone"
                    required 
                    className='border-2 dark:border-gray-700 rounded-md p-2 w-full dark:bg-gray-700 dark:text-white'
                  />
                </div>

                {/* Message */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor="message" className='dark:text-white'>Message</label>
                  <textarea 
                    id="message"
                    required 
                    className='border-2 dark:border-gray-700 rounded-md p-2 w-full h-32 dark:bg-gray-700 dark:text-white'
                  ></textarea>
                </div>
                
                {/* Submit */}
                <div className='flex justify-center mt-6'>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`rounded-xl px-6 py-2 border-2 dark:border-gray-700 
                      hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                      dark:text-white disabled:opacity-50 disabled:cursor-not-allowed
                      ${isSubmitting ? 'cursor-wait' : 'cursor-pointer'}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className='w-full sm:max-w-2xl'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6040.7077071928115!2d-77.86248868909183!3d40.79821733221467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea6247f5d0291%3A0xad3e8e9b56e48269!2sThe%20Pennsylvania%20State%20University!5e0!3m2!1sen!2sus!4v1738035405052!5m2!1sen!2sus" 
                width="100%" 
                height="450"  
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className='rounded-xl border-2 dark:border-gray-700'
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact