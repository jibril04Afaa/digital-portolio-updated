import { FaEnvelope } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const Contact = () => {
  return (
    <>
        <div className="bg-green-800 p-6 mt-3 mb-6">
            {/* Title */}
            <h3 className="text-left my-4 text-xl">Contact 
                <span className="text-lime-200 p-1">ME</span>
            </h3>

            {/* Email */}
            <div className="border-2 p-4 rounded-xl flex flex-col items-left mb-6">
                <FaEnvelope className=""/>
                <h3>Email</h3>
                <h3>jibrilBA04@gmail.com</h3>
            </div>

            {/* Location */}
            <div className="border-2 p-4 rounded-xl flex flex-col items-left mb-6">
                <FaLocationDot className=""/>
                <h3>Address</h3>
                <h3>State College, PA</h3>
            </div>

            {/* Phone */}
            <div className="border-2 p-4 rounded-xl flex flex-col items-left mb-6">
                <FaPhone/>
                <h3>Phone</h3>
                <h3>+1 (412) 478-9202</h3>
            </div>

            {/* LinkedIn */}
            <div className="border-2 p-4 rounded-xl flex flex-col items-left mb-6">
                <FaLinkedin className=""/>
                <h3>LinkedIn</h3>
                <h3>jibrilafaa</h3>
            </div>

            {/* GitHub */}
            <div className="border-2 p-4 rounded-xl flex flex-col items-left mb-6">
                <FaGithub/>
                <h3>GitHub</h3>
                <h3>jibril04Afaa</h3>
            </div>
        </div>
    </>

  )
}

export default Contact