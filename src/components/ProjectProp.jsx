

const ProjectProp = (props) => {
  return (
    <div className='mt-8'>
      <div>
        <div>
          {/* Container */}
          <div className='border-2 p-2 rounded-3xl w-80'>
            {/* Project Image */}
            <div className="flex justify-center items-center">
              <img src={props.image} alt="" width={props.width} height={props.height}/>
            </div>

            {/* Project Name */}
            <div className="flex justify-center items-center pt-2">
              <h2 className='text-center font-bold'>{props.projectTitle}</h2>
            </div>

            {/* Project Tech Stack */}
            <div className="p-2">
              <ul className='flex justify-around p-2'>
                <li>{props.langOrFramework1}</li>
                <li>{props.langOrFramework2}</li>
                <li>{props.langOrFramework3}</li>
                <li>{props.langOrFramework4}</li>
                <li>{props.langOrFramework5}</li>
                <li>{props.langOrFramework6}</li>
                <li>{props.langOrFramework7}</li>
                <li>{props.langOrFramework8}</li>
              </ul>
            </div>

            {/* Project Desc */}
            <div className="flex justify-center items-center">
              <p>{props.projectDescription}</p>
            </div>

            {/* View Project */}
            <div className='flex justify-center items-center pt-4'>
              <button className='border-2 p-1 rounded-3xl'>View Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectProp