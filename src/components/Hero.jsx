import MeBrown from "../img/me-brown-shirt.jpg"
import HeroFooter from "../components/HeroFooter"

import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"


const Hero = () => {
  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
    </div>

    <div className="container mx-auto px-6 py-8 ">
      <div className="flex sm:flex-col-reverse tablet:flex-row justify-between items-center mt-8">
        
        <div className="flex flex-col gap-8 sm:w-full tablet:w-1/2">
          <div className="sm:text-center tablet:text-left">
            <p className="font-bold sm:text-xl tablet:text-2xl">I am Jibril</p>
            <h1 className="font-bold text-4xl sm:text-2xl tablet:text-3xl">
              Software Engineer, Writer +  
              Computer Science Student
            </h1>
          </div>

          <div className="sm:text-center tablet:text-left">
            <p className="sm:text-sm tablet:text-2xl">
                I am a curious and determined computer science
                embracing authenticity in all aspects of life. An explorer
                through reading and driven by a passion for self-improvement,
                I have leadership and tech experience, and
                strive to balance discipline with creativity to reach my goals.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:justify-center tablet:justify-start">
            <div>
              <button className="border-2 pt-2 pb-2 pr-4 pl-4 rounded-3xl font-bold text-xl">Download Resume</button>
            </div>

            <div className="flex gap-1">
              <div>
                <CiLinkedin className="text-3xl cursor-pointer"/>
              </div>

              <div>
                <FaGithub className="text-3xl cursor-pointer"/>
              </div>
            </div>
          </div>
        
        </div>

        <div className="sm:flex justify-center items-center pb-8 w-full tablet:w-1/2 tablet:flex tablet:justify-end">
          <div className="sm:w-44 tablet:w-auto max-w-md relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              <img 
                src={MeBrown} 
                alt="Jibril profile" 
                className="rounded-3xl w-[300px] sm:w-[250px]"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div>
      <HeroFooter/>
    </div>
    </>

  )
}

export default Hero