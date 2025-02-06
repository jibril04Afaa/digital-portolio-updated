import React from 'react'

const About = () => {
  return (
    <div className='mt-32 '>
      <div className='border-2 container mx-auto px-6 py-8'>
        {/* Title Container */}
        <div className='flex justify-center items-center'>
          {/* Title */}
          <p className='font-bold text-3xl mb-4'>About Me</p>
        </div>

        {/* Text Container*/}
        <div>
          {/* Inner Text */}
          <div>
            <p className='sm:text-sm tablet:text-2xl'>
              I am currently a 
              <span className='font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text'>
                {' '}Web Developer Intern{' '}
              </span>
              at a startup called Alli Marketplace where I work on the frontend and backend of their 
              website with ReactJS, TailwindCSS, and NodeJS.

              <p></p>

              <br />
              At the same time, I am undergoing research in the 
              <span className='font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text'>
                {' '}Penn State College of Engineering{' '}
              </span>
              where I am working with other students
              to build a mobile application with React Native that using NLP 
              to process data entries to create insightful data visualizations.
              
              <p></p>
              <br />
              
              I also serve as a 
              <span className='font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text'>
                {' '}Resident Assistant{' '}
              </span>
              at Penn State, where I help foster a supportive and engaging community for students in university housing.
            </p>
          </div>

          <br />
          <p></p>

          {/* Writing */}
          <div>
            <div>
              <p className='sm:text-sm tablet:text-2xl'>
                Outside of school, I write short essays and stories, 
                or on miscellaneous topics, or thoughts.
              </p>

            {/* Writing Button */}
            <div className='mt-4 flex justify-center items-center'>
              <a 
                href="https://drive.google.com/drive/u/0/folders/1mYUiQxjQcnm2nLvuSBAeuA5ia6TaGEaR"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 pt-2 pb-2 pr-4 pl-4 rounded-3xl font-bold text-xl hover:bg-gray-100 cursor-pointer"
              >
                See Writing
              </a>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About