
const Skills = (props) => {
  return (
    <>
      <div 
      className="border-2 border-solid rounded-xl m-2 flex flex-col justify-center items-center p-4"
      >
        <img src={props.skillImage}
         alt="Image of skill" 
         width={props.width} 
         height={props.height} 
         />

        {/* Skill Name */}
         <div>
          <h3>{props.skillName}</h3>
         </div>

      </div>
    </>
  )
}

export default Skills