import React from 'react'

const HeroFooter = () => {
  return (
    <div>
      {/* Inner Container */}
      <div>
        <div className='sm:mt-2 text-xl grid grid-cols-2 p-4 items-center gap-3 tablet:flex tablet:justify-around tablet:mt-14 text-2xl'>
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