import MyImage from "../img/me.jpg"


const Hero = () => {
  return (
    <>
    {/* Logo  */}
    {/* <div>
      <h1>Jibril</h1>
    </div> */}

    {/* Hero Image Container TODO: Include watery animation border */}

    <div className="flex justify-center">
      <img src={MyImage}
      alt="A picture of me"
      width="150px"
      height="250px"
      className="rounded-es-2xl my-4"
      />
    </div>

    {/* Hero Text Container */}
    <div className="text-white p-8">
        <div className="sm: flex flex-col my-8">
            <p>Hello, my name is</p>
            <h2 className="text-lime-200 font-bold">JIBRIL BAABA AFAA</h2>
            <p>I am a 

              <span className="text-lime-200 font-bold p-1">
                Computer Science student
              </span>
              
              & 
              <span className="text-lime-200 font-bold p-1">
                Software Engineer
              </span>
              
              </p>
        </div>


        <div className="sm:flex-col w-64 my-4 md:flex-row justify-between lg:flex-row">
            <button className="rounded-3xl px-4 py-2 my-2 bg-lime-200 text-green-800 font-bold border-none">Download Resume</button>
            <button className="border-solid border-2 rounded-3xl px-4 py-2 my-2 ">View Hobbies</button>
        </div>
    </div>

    </>
  )
}

export default Hero