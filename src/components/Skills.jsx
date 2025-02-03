import { FaJava } from "react-icons/fa"; // Java
import { FaReact } from "react-icons/fa"; // React
import { TbBrandCSharp } from "react-icons/tb"; // C#
import { FaPython } from "react-icons/fa"; // Python
import { AiOutlineDotNet } from "react-icons/ai"; // .NET
import { RiJavascriptFill } from "react-icons/ri"; // JavaScript
import { FaNode } from "react-icons/fa"; // Node.js
import { BiLogoPostgresql } from "react-icons/bi"; // PostgreSQL
import { FaSass } from "react-icons/fa"; // SASS/SCSS
import { RiTailwindCssFill } from "react-icons/ri"; // Tailwind CSS
import { FaLinux } from "react-icons/fa"; // Linux
import { SiTypescript } from "react-icons/si"; // TypeScript
import { SiExpress } from "react-icons/si"; // Express.js


const Skills = () => {
  return (
    <>

    <div className="mt-32 ">
      
      {/* Inner Container */}
      <div>
        <div>
          {/* Title */}
          <div className="flex justify-center items-center mt-4">
            <p className="text-3xl font-bold">My Skills</p>
          </div>

          {/* Text about skills */}
          <div>
            <p></p>
          </div>

          {/* Skills Sections */}
          <div className="mt-10">
            {/* Languages */}
            <div></div>

            {/* Frameworks */}
            <div></div>

            {/* Tools and Misc. */}
            <div></div>
          </div>

          {/* Skills catalog(ue) */}
          <div className="sm:grid grid-cols-2 text-sm tablet:flex flex-wrap gap-4 tablet:justify-center border-2">
            {/* C# */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <TbBrandCSharp size={40} />
              <p>75%</p>
              <p>C#</p>
            </div>

            {/* Java */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <FaJava size={40} />
              <p>60%</p>
              <p>Java</p>
            </div>

            {/* Python */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <FaPython size={40} />
              <p>80%</p>
              <p>Python</p>
            </div>

            {/* JavaScript */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <RiJavascriptFill size={40} />
              <p>70%</p>
              <p>JavaScript</p>
            </div>

            {/* TypeScript */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <SiTypescript size={40} />
              <p>50%</p>
              <p>TypeScript</p>
            </div>

            {/* TailwindCSS */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <RiTailwindCssFill size={40} />
              <p>80%</p>
              <p>TailwindCSS</p>
            </div>

            {/* SASS/SCSS */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <FaSass size={40} />
              <p>70%</p>
              <p>SASS/SCSS</p>
            </div>

            {/* Linux */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <FaLinux size={40} />
              <p>75%</p>
              <p>Linux</p>
            </div>

            {/* .NET */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <AiOutlineDotNet size={40} />
              <p>70%</p>
              <p>.NET</p>
            </div>

            {/* ReactJS */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <FaReact size={40} />
              <p>75%</p>
              <p>ReactJS</p>
            </div>

            {/* React-Native */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <FaReact size={40} /> {/* Using React icon */}
              <p>60%</p>
              <p>React-Native</p>
            </div>

            {/* NodeJS */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <FaNode size={40} />
              <p>60%</p>
              <p>NodeJS</p>
            </div>

            {/* Express */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <SiExpress size={40} />
              <p>60%</p>
              <p>ExpressJS</p>
            </div>

            {/* PostgreSQL */}
            <div className="border-4 rounded-xl flex flex-col items-center gap-2 w-28 p-2 bg-lightPurple">
              <BiLogoPostgresql size={40} />
              <p>60%</p>
              <p>PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Skills;
