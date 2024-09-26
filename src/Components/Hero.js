import { FaGithub, FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import Skills from "./Skills";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="flex mt-8">
        <div className="flex mx-auto flex-col items-center">
          <h1 className="mx-auto font-bold text-2xl">Izhar Ullah</h1>

          <h2
            className={`font-semibold text-gray-500 text-[20px] mt-3 xs:w-[65%] xs:text-center`}
          >
            Web & Machine Learning Developer
          </h2>

          <p
            className="mt-3 lg:w-[70%] lg:text-center md:text-left md:w-[80%] sm:text-left sm:w-[80%] 
                    xs:w-[85%] xs:text-center"
          >
            As a Web & Machine Learning Developer, I bring together the art of
            coding with the science of data to create intuitive, intelligent
            digital experiences. My expertise in Tailwind CSS, React.js, Node.js,
            Express.js, MongoDB, Python including powerful libraries like Pandas,
            Numpy, Scikit-Learn.
          </p>

          <div className="flex mt-6 font-semibold text-sm flex-col">
            <div>
              <a href="12.pdf"
              download={"Recume.pdf"}>
              <button
                className="bg-gray-900 text-gray-200 mx-3 rounded-lg p-2 border border-gray-900
                        hover:bg-slate-200 hover:text-gray-900"
              >
                Download CV
              </button>
              </a>
             <Link to="/contact">
              <button
                className="bg-gray-200 text-gray-900 mx-3 rounded-lg p-2 border border-gray-300
                        hover:bg-gray-900 hover:text-gray-200"
              >
                Contact Now
              </button>
              </Link>
            </div>
            <div className="flex justify-evenly mt-8 text-lg">
            
                 
      <a 
        href="https://github.com/IzharUllah123" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-gray-600"
            >
        <FaGithub  className="mr-2" />
        
      </a>

      <a
      href="https://www.linkedin.com/in/izhar-ullah/"
      target="_blank"
      className="hover:text-gray-600"
      
      >
        <IoLogoLinkedin />

      </a>

      <a
      href="https://www.facebook.com/izhar.ullahizhar.336?mibextid=ZbWKwL"
      target="_blank"
      className="hover:text-gray-600"
      >

      <FaFacebook />
      </a>
              
               
            </div>
          </div>

          

         
        </div>
      </div>


      <Skills />
    </>
  );
}

export default Hero;
