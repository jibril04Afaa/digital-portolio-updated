
import { FaGithub } from "react-icons/fa"
import { MdOutlineArrowOutward } from "react-icons/md"

const ProjectsCard = (props) => {
  return (
    <div className="p-2">

      {/* Project Image */}
      <div>
        <img src={props.projectImage}
        alt="" 
        width="150px"
        height="200px"
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
          <h3 className="sm:text-lg tablet:text-xl">Project Link</h3>
          {/* Github Icon links to project*/}
          <FaGithub/>
        </div>
        

      </div>

    </div>
  )
}

export default ProjectsCard