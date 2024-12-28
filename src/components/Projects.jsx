import React from 'react'

const Projects = () => {
  return (
    <div>
      {/* Inner Container */}
      <div className='border-2 mt-32'>
        <div>
          {/* Title */}
          <div className='flex justify-center items-center mt-4'>
            <h2 className='text-3xl font-bold'>My Recent Projects</h2>
          </div>

          {/* Text about projects */}
          <div>
            <p></p>
          </div>

          {/* Sections */}
          <div className='flex justify-around mt-10'>
            {/* All */}
            <div className='border-2 p-2 rounded-3xl'>
              <h2>All</h2>
            </div>

            

            {/* Websites */}
            <div className='border-2 p-2 rounded-3xl'>
              <h2>Websites</h2>
            </div>

            {/* Apps */}
            <div className='border-2 p-2 rounded-3xl'>
              <h2>Apps</h2>
            </div>

            {/* AI */}
            <div className='border-2 p-2 rounded-3xl'>
              <h2>AI</h2>
            </div>

            {/* Research */}
            <div className='border-2 p-2 rounded-3xl'>
              <h2>Research</h2>
            </div>
          </div>

          {/* Projects catalog */}
          <div className='flex'>
            {/* First Project */}
            <div></div>

            {/* Second Project */}
            <div></div>

            {/* Third Project */}
            <div></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects