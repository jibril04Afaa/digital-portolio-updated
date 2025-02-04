const ProjectProp = (props) => {
  return (
    <div className='mt-8 mx-4'>
      {/* Container */}
      <div className='border-2 p-6 rounded-3xl w-96 h-[500px] flex flex-col'>
        {/* Project Image */}
        <div className="flex justify-center items-center h-48">
          <img 
            src={props.image} 
            alt={props.projectTitle} 
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Project Name */}
        <div className="mt-4">
          <h2 className='text-xl text-center font-bold'>{props.projectTitle}</h2>
        </div>

        {/* Project Tech Stack */}
        <div className="mt-4">
          <ul className='flex flex-wrap gap-2 justify-center'>
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
              <li key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{tech}</li>
            ))}
          </ul>
        </div>

        {/* Project Desc */}
        <div className="mt-4 flex-grow">
          <p className="text-sm text-gray-600 text-center">{props.projectDescription}</p>
        </div>

        {/* View Project */}
        <div className='mt-4 flex justify-center'>
          <button className='border-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors'>
            View Project
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectProp