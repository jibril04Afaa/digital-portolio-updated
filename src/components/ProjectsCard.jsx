
import { FaGithub } from "react-icons/fa"
import { MdOutlineArrowOutward } from "react-icons/md"

const ProjectsCard = (props) => {
  return (
    <div className="p-2">

      {/* Project Image */}
      <div className="">
        <img src={props.projectImage}
        alt="" 
        width="150px"
        height="200px"
        className="md:max-w-sm lg:max-w-md tablet:w-60 laptop:w-64 large-laptop:w-80"

        />
      </div>

      {/* Project Name */}
      <div className="sm: pt-2">
        <h3 className="sm:text-lg tablet:text-xl">{props.projectName}</h3>
      </div>

      {/* Card bottom */}
      <div>
        {/* View demo Container*/}
        <div className="flex items-center">
          <h3 className="sm:text-lg tablet:text-xl">View Demo</h3>
          <MdOutlineArrowOutward/>
        </div>
        

        {/* Project Link Container */}
        <div className="flex items-center">
          
          <a href={props.projectLink} target="_blank">
            <h3 className="sm:text-lg tablet:text-xl">Project Link</h3>
          </a>

          {/* Github Icon links to project*/}
          <a href={props.projectLink} target="_blank">
            <FaGithub/>
          </a>
          
        </div>

      </div>

    </div>
  )
}

export default ProjectsCard