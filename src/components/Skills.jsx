import csharp from '../img/csharp.png'
import java from '../img/java-logo-png.png'
import python from '../img/python.png'
import dotnet from '../img/dotnet.webp'
import js from '../img/javascript.webp'
import node from '../img/node.webp'
import postgres from '../img/postgres.png'
import reactNative from '../img/react-native.jpg'
import sass from '../img/scss.png'
import react from '../img/react.png'
import tailwind from '../img/tailwind.png'
import linux from '../img/linux.png'
import ts from '../img/ts.png'
import express from '../img/express.jpg'


const Skills = () => {
  return (
    <div>
      {/* Inner Container */}
      <div>
        <div>
          {/* Title */}
          <div className='flex justify-center items-center mt-4'>
            <p className='text-3xl font-bold'>My Skills</p>
          </div>

          {/* Text about skills*/}
          <div>
            <p></p>
          </div>

          {/* Skills Sections  */}
          <div className='mt-10'>
            {/* Languages */}
            <div></div>

            {/* Frameworks */}
            <div></div>

            {/* Tools and Misc. */}
            <div></div>
          </div>

          {/* Skills catalog(ue) */}
          <div className='flex flex-wrap gap-4'>
            {/* C# */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={csharp} alt="" width="40px" height="40px"/>
              </div>
              <div>
                <p>75%</p>
              </div>
              <div>
                <p>C#</p>
              </div>
            </div>

            {/* Java */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={java} alt="" />
              </div>
              <div>
                <p>60%</p>
              </div>
              <div>
                <p>Java</p>
              </div>
            </div>

            {/* Python */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={python} alt="" />
              </div>
              <div>
                <p>80%</p>
              </div>
              <div>
                <p>Python</p>
              </div>
            </div>

            {/* JavaScript */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={js} alt="" />
              </div>
              <div>
                <p>70%</p>
              </div>
              <div>
                <p>JavaScript</p>
              </div>
            </div>

            {/* TypeScript */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={ts} alt="" />
              </div>
              <div>
                <p>65%</p>
              </div>
              <div>
                <p>TypeScript</p>
              </div>
            </div>

            {/* C */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>85%</p>
              </div>
              <div>
                <p>C</p>
              </div>
            </div>

            {/* TailwindCSS */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={tailwind} alt="" />
              </div>
              <div>
                <p>80%</p>
              </div>
              <div>
                <p>TailwindCSS</p>
              </div>
            </div>

            {/* SASS/SCSS */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={sass} alt="" />
              </div>
              <div>
                <p>70%</p>
              </div>
              <div>
                <p>SASS/SCSS</p>
              </div>
            </div>

            {/* Linux */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={linux} alt="" />
              </div>
              <div>
                <p>75%</p>
              </div>
              <div>
                <p>Linux</p>
              </div>
            </div>

            {/* .NET */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={dotnet} alt="" />
              </div>
              <div>
                <p>70%</p>
              </div>
              <div>
                <p>.NET</p>
              </div>
            </div>

            {/* ReactJS */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={react} alt="" />
              </div>
              <div>
                <p>75%</p>
              </div>
              <div>
                <p>ReactJS</p>
              </div>
            </div>

            {/* React-Native */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={reactNative} alt="" />
              </div>
              <div>
                <p>60%</p>
              </div>
              <div>
                <p>React-Native</p>
              </div>
            </div>
              
            {/* NodeJS */}  
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div className=''>
                <img src={node} alt="" />
              </div>
              <div>
                <p>60%</p>
              </div>
              <div>
                <p>NodeJS</p>
              </div>
            </div>

            {/* Express */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={express} alt="" />
              </div>
              <div>
                <p>60%</p>
              </div>
              <div>
                <p>ExpressJS</p>
              </div>
            </div>

            {/* PostgreSQL */}
            <div className='border-2 rounded-xl flex flex-col items-center gap-2 w-28 p-2'>
              <div>
                <img src={postgres} alt="" />
              </div>
              <div>
                <p>60%</p>
              </div>
              <div>
                <p>PostgreSQL</p>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
