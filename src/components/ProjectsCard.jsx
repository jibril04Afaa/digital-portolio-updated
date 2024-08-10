
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
      <div>
        <h3>{props.projectName}</h3>
      </div>

      {/* Card bottom */}
      <div>
        {/* View demo */}
        <h3>View Demo</h3>

        {/* Project Link */}
        <h3>Project Link</h3>
      </div>

    </div>
  )
}

export default ProjectsCard