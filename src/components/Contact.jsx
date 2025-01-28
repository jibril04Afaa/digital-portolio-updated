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
          <div className='flex sm:flex-col gap-8 pr-4 pl-4 justify-around items-center mt-6'>
            {/* Send message */}
            <div className='border-2 rounded-xl p-8'>
              <h2 className='text-2xl font-bold'>Send a Message</h2>
              <p>Enter your details to send me an email here!</p>
              <form action="submit">
                {/* Name */}
                <div className='flex justify-around'>
                  <label htmlFor="name">Name</label>
                  <input type="text" required className='border-2'/>
                </div>

                {/* Email */}
                <div className='flex justify-around'>
                  <label htmlFor="name">Email</label>
                  <input type="text" required className='border-2'/>
                </div>

                {/* Phone */}
                <div className='flex justify-around'>
                  <label htmlFor="name">Phone No.</label>
                  <input type="text" required className='border-2'/>
                </div>

                {/* Message */}
                <div className='flex justify-around'>
                  <label htmlFor="name">Message</label>
                  <input type="text" required className='border-2'/>
                </div>
                
              </form>

              {/* Submit */}
              <div className='flex justify-around mt-4'>
                <button className='rounded-xl p-1 border-2'>Submit</button>
              </div>
            </div>

            {/* Map */}
            <div>
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6040.7077071928115!2d-77.86248868909183!3d40.79821733221467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea6247f5d0291%3A0xad3e8e9b56e48269!2sThe%20Pennsylvania%20State%20University!5e0!3m2!1sen!2sus!4v1738035405052!5m2!1sen!2sus" 
              width="600" height="450"  allowfullscreen="" 
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              className='sm:w-72'
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