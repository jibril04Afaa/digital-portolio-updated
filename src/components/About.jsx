
import Me from "../img/me.jpg"

const About = () => {
  return (
    <>
      <div className=
      "flex sm:flex-col p-6 gap-6 bg-green-400 my-8 tablet:flex-row mt-24"
      >

        {/* Image or Animation */}
        <div className="flex justify-center">
          <img src={Me} 
          alt="A picture of me" 
          width="200px"
          height="100px"
          />
        </div>
        
        {/* About text */}
        <div className="">
          <h2 className="my-2 sm:text-xl tablet:text-3xl">About
            <span className="text-lime-200 p-1 sm:text-xl tablet:text-3xl">
              Me
            </span>
          </h2>

          <p className="sm:text-lg tablet:text-2xl">
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