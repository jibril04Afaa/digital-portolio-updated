
import Me from "../img/me.jpg"

const About = () => {
  return (
    <>
      <div className="bg-green-400 my-8 p-8">

        {/* Image or Animation */}
        <div className="flex justify-center">
          <img src={Me} 
          alt="A picture of me" 
          width="200px"
          height="100px"
          />
        </div>
        
        {/* About text */}
        <div className="my-4">
          <h2 className="text-xl my-2">About
            <span className="text-lime-200 p-1">
              Me
            </span>
          </h2>

          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Accusantium quaerat pariatur nesciunt ut laborum et sed 
            suscipit illo, sunt porro cumque voluptate error obcaecati 
            asperiores rerum recusandae, tempora fugit molestiae.
          </p>
        </div>

      </div>
    </>

  )
}

export default About