import React from 'react'

const HeroFooter = () => {
  return (
    <div>
      {/* Inner Container */}
      <div>
        <div className='mt-14 flex justify-around'>
          {/* Years of Experience (YOE) */}
          <div className='flex gap-1'>
            {/* Number */}
            <div>
              <p className='font-bold text-4xl'>1+</p>
            </div>
            {/* Text */}
            <div>
              <p className='font-bold text-md'>Years of <br /> Experience</p>
            </div>
          </div>
          
          {/* Projects Completed */}
          <div className='flex gap-1'>
            {/* Number */}
            <div>
              <p className='font-bold text-4xl'>5+</p>
            </div>
            {/* Text */}
            <div>
              <p className='font-bold text-md'>Projects <br />Completed</p>
            </div>
          </div>

          {/* Research Completed */}
          <div className='flex gap-1'>
            {/* Number */}
            <div>
              <p className='font-bold text-4xl' >1+</p>
            </div>
            {/* Text */}
            <div>
              <p className='font-bold text-md'>Research<br /> Completed</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroFooter