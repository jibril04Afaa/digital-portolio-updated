const ProjectProp = (props) => {
  return (
    <div className='mt-8 mx-4'>
      {/* Container */}
      <div className='border-2 p-4 rounded-3xl w-full max-w-sm h-[500px] flex flex-col'>
        {/* Project Image */}
        <div className="flex justify-center items-center h-40">
          <img 
            src={props.image} 
            alt={props.projectTitle} 
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Project Name */}
        <div className="mt-2">
          <h2 className='text-lg text-center font-bold'>{props.projectTitle}</h2>
        </div>

        {/* Project Tech Stack */}
        <div className="mt-2">
          <ul className='flex flex-wrap gap-1 justify-center'>
            {[
              props.langOrFramework1,
              props.langOrFramework2,
              props.langOrFramework3,
              props.langOrFramework4,
              props.langOrFramework5,
              props.langOrFramework6,
              props.langOrFramework7,
              props.langOrFramework8
            ].filter(Boolean).map((tech, index) => (
              <li key={index} className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">{tech}</li>
            ))}
          </ul>
        </div>

        {/* Project Desc */}
        <div className="mt-2 flex-grow overflow-y-auto">
          <p className="text-sm text-gray-600 text-center">{props.projectDescription}</p>
        </div>

        {/* View Project */}
        <div className='mt-3 flex justify-center'>
          <button className='border-2 px-4 py-1.5 rounded-full hover:bg-gray-100 transition-colors'>
            View Project
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectProp