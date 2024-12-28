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
        <div className="border-2 flex flex-col gap-6 p-2">
          {/* Text */}
          <div>
            <p className="font-bold text-2xl">I am Jibril</p>
            <h1 className="font-bold text-4xl">Software Engineer + <br /> Computer Science Student</h1>
          </div>

          {/* Other text */}
          <div>
            <p>
              Lorem ipsum dolor sit<br />
              amet consectetur adipisicing<br />
              elit. Soluta voluptates veritatis,<br />
              aspernatur enim labore accusamus officiis<br />
              similique iste aperiam tempore! Fugit<br />
              corrupti ipsa ratione voluptate assumenda<br />
              debitis? Eveniet, cupiditate quos.<br />
            </p>
          </div>

          {/* Buttons and social links */}
          <div className="flex items-center gap-2">
            {/* Button */}
            <div>
              <button className="border-2 p-2 rounded-3xl font-bold text-xl">Download Resume</button>
            </div>

            {/* Social links */}
            <div className="flex gap-1">
              {/* LinkedIn */}
              <div>
                <CiLinkedin className="text-3xl"/>
              </div>

              {/* GitHub */}
              <div>
                <FaGithub className="text-3xl"/>
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