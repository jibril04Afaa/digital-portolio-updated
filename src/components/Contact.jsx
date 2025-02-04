import React from 'react'

const Contact = () => {
  return (
    <div className='mt-32'>
      <div>
        <div>

          {/* Contact */}
          <div className='flex justify-center items-center mt-4'>
            <h2 className='text-3xl font-bold'>Contact</h2>
          </div>

          {/* Contact Body */}
          <div className='flex flex-col sm:items-center gap-12 px-4 mt-8'>
            {/* Send message */}
            <div className='border-2 rounded-xl p-8 w-full sm:max-w-md'>
              <h2 className='text-2xl font-bold mb-4'>Send a Message</h2>
              <p className='mb-6'>Enter your details to send me an email here!</p>
              <form action="submit" className='space-y-4'>
                {/* Name */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor="name">Name</label>
                  <input type="text" required className='border-2 rounded-md p-2 w-full'/>
                </div>

                {/* Email */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor="email">Email</label>
                  <input type="email" required className='border-2 rounded-md p-2 w-full'/>
                </div>

                {/* Phone */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor="phone">Phone No.</label>
                  <input type="tel" required className='border-2 rounded-md p-2 w-full'/>
                </div>

                {/* Message */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor="message">Message</label>
                  <textarea required className='border-2 rounded-md p-2 w-full h-32'></textarea>
                </div>
                
                {/* Submit */}
                <div className='flex justify-center mt-6'>
                  <button className='rounded-xl px-6 py-2 border-2 hover:bg-gray-100 transition-colors'>Submit</button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className='w-full sm:max-w-xl'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6040.7077071928115!2d-77.86248868909183!3d40.79821733221467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea6247f5d0291%3A0xad3e8e9b56e48269!2sThe%20Pennsylvania%20State%20University!5e0!3m2!1sen!2sus!4v1738035405052!5m2!1sen!2sus" 
                width="100%" 
                height="450"  
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                className='rounded-xl'
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