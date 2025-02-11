import EBookReader from '../img/e-book-reader.png'
import AfricanUB from '../img/AfricanUrban.png'
import KnowTheQuran from '../img/know-the-Quran.png'
import Forex from "../img/forex-bureau.png"
import FahdrissFarms from "../img/ff.png"

import ProjectProp from "../components/ProjectProp"

const Projects = () => {
  return (
    <div>
      {/* Inner Container */}
      <div className='mt-32'>
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

          <div>
            {/* Section Titles */}
            <div className='flex flex-wrap justify-center gap-3 mt-10 px-4'>
              {/* All */}
              <div className='border-2 p-2 rounded-3xl hover:bg-gray-100 cursor-pointer'>
                <h2 className='text-sm md:text-base'>All</h2>
              </div>

              {/* Websites */}
              <div className='border-2 p-2 rounded-3xl hover:bg-gray-100 cursor-pointer'>
                <h2 className='text-sm md:text-base'>Websites</h2>
              </div>

              {/* Apps */}
              <div className='border-2 p-2 rounded-3xl hover:bg-gray-100 cursor-pointer'>
                <h2 className='text-sm md:text-base'>Apps</h2>
              </div>

              {/* AI */}
              <div className='border-2 p-2 rounded-3xl hover:bg-gray-100 cursor-pointer'>
                <h2 className='text-sm md:text-base'>AI</h2>
              </div>

              {/* Research */}
              <div className='border-2 p-2 rounded-3xl hover:bg-gray-100 cursor-pointer'>
                <h2 className='text-sm md:text-base'>Research</h2>
              </div>
            </div>

            {/* Inner Section */}
            <div className='flex justify-center flex-wrap gap-6 px-4 mt-8'>
              <ProjectProp
                image={EBookReader}
                projectTitle="E-Book Reader"
                langOrFramework1="React"
                langOrFramework2=".NET"
                projectDescription="An audio and digital book reader written in ReactJS and .NET"
                githubLink="https://github.com/jibril04Afaa/ebook-reader"
              />

              <ProjectProp
                image={AfricanUB}
                projectTitle="African Urban Dictionary"
                langOrFramework1="React"
                langOrFramework2=".NET"
                langOrFramework3="PostgreSQL"
                projectDescription="A full stack urban dictionary for African words and phrases built with a React frontend, a .NET backend, and a PostgreSQL database"
                githubLink="https://github.com/jibril04Afaa/african-urban-dict"
              />

              <ProjectProp
                image={KnowTheQuran}
                projectTitle="Know The Qur'an"
                langOrFramework1="HTML"
                langOrFramework2="CSS"
                projectDescription="A static website in HTML and CSS to understand what the Holy Qur'an talks about in detail, separated by categories."
                githubLink="https://github.com/jibril04Afaa/know-the-quran"
              />

              <ProjectProp
                image={Forex}
                width="100px"
                height="100px"
                projectTitle="Forex Bureau Landing Page"
                langOrFramework1="React"
                langOrFramework2="SCSS"
                projectDescription="A forex bureau landing page with a currency converter"
                githubLink="https://github.com/jibril04Afaa/maltima-fb"
              />

              <ProjectProp
                image={FahdrissFarms}
                projectTitle="E-Commerce Web App"
                langOrFramework1="JavaScript"
                langOrFramework3="Node"
                langOrFramework4="Express"
                langOrFramework5="MongoDB"
                projectDescription="A full stack and responsive e-commerce website selling African spices with a MongoDB database built with HTML, SCSS and Vanilla Javascript on the frontend, and Node.js and Express.js on the backend."
                githubLink="https://github.com/jibril04Afaa/fahdriss-farms"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects