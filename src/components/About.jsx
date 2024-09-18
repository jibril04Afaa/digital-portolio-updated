
import Me from "../img/me.jpg"

const About = () => {
  return (
    <>
      <div className=
      "flex sm:flex-col p-6 gap-6 bg-green-400 my-8 tablet:flex-row mt-24">

        {/* Image or Animation */}
        <div className="flex justify-center">
          <img src={Me} 
          alt="A picture of me" 
          width="200px"
          height="100px"
          className="rounded-es-2xl my-4 md:max-w-sm lg:max-w-md tablet:w-60 laptop:w-64 large-laptop:w-80"
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
            As international junior studying Computer Science at 
            Penn State University, my interests lie in full-stack 
            development of web and mobile apps, Artificial Intelligence,
            and reading on a wide range of topics.
            
          </p>
        </div>

      </div>
    </>

  )
}

export default About