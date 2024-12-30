import MeBrown from "../img/me-brown-shirt.jpg"
import HeroFooter from "../components/HeroFooter"

import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"


const Hero = () => {
  return (
    <>
    <div>
      {/* Inner container */}
      <div className="flex justify-around mt-12">
        
        {/* Left side text */}
        <div className="flex flex-col gap-6 p-2">
          {/* Text */}
          <div>
            <p className="font-bold text-2xl">I am Jibril</p>
            <h1 className="font-bold text-4xl">Software Engineer, Writer + <br /> Computer Science Student</h1>
          </div>

          {/* Other text */}
          <div>
            <p>
                I am a curious and determined computer science <br />
                embracing authenticity in all aspects of life. An explorer<br /> 
                through reading and driven by a passion for self-improvement,<br />
                I have leadership and tech experience, and <br />
                strive to balance discipline with creativity to reach my goals.
            </p>
          </div>

          {/* Buttons and social links */}
          <div className="flex items-center gap-2">
            {/* Button */}
            <div>
              <button className="border-2 pt-2 pb-2 pr-4 pl-4 rounded-3xl font-bold text-xl">Download Resume</button>
            </div>

            {/* Social links */}
            <div className="flex gap-1">
              {/* LinkedIn */}
              <div>
                <CiLinkedin className="text-3xl cursor-pointer"/>
              </div>

              {/* GitHub */}
              <div>
                <FaGithub className="text-3xl cursor-pointer"/>
              </div>
            </div>
          </div>
        
        </div>

        {/* Right side image */}
        <div>
          <img src={MeBrown} alt="" width="300px" height="150px" className="rounded-3xl"/>
        </div>
      </div>
    </div>

    {/* Hero Footer */}
    <div>
      <HeroFooter/>
    </div>
    </>

  )
}

export default Hero