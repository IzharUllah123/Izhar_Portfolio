import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiFiverr } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="flex flex-col mt-12 justify-center items-center 
       shadow-inner shadow-gray-400/30 hover:shadow-2xl transition-shadow duration-300
      ">
        <h1 className="text-lg font-semibold mt-3">Contact Me</h1>
           
        <div className="w-[80%] mx-16 my-6 text-pretty text-center  justify-center">
          You're welcome to reach out to me at any time. I make it a priority to reply quickly, but please allow for
           some delays due to time zone differences. Rest assured, I'll get back to you as soon as I can.
            
            </div>
        {/* Use flex-row by default and flex-col for small screens */}
        <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col lg:gap-x-20 md:gap-x-8 sm:gap-x-4 xs:gap-y-3 mt-4 mb-4">
         
       
         <div className="flex gap-8">
           
           
            <div>
            <a
             href={`https://wa.me/${+923039403936}`} 
            target="_blank"
            className="flex gap-1 items-center text-lg hover:text-gray-600">
              
              Whatsapp: <FaWhatsapp />
            </a>
          </div>

          <div className="">
            <a
            href="mailto:ixharkhan9@gmail.com"
            target="_blank"
            className="flex gap-1 items-center text-lg hover:text-gray-600">
              Email: <MdEmail />
            </a>
          </div>

          </div>
        <div className="flex gap-8">
        
          <div>
          <a
            href="https://www.linkedin.com/in/izhar-ullah/"
            target="_blank"
               className="hover:text-gray-600  text-lg  flex gap-1 items-center"
      
           >
             LinkedIn: <FaLinkedin />
          </a>
          </div>

          <div>
            <a
            href="https://www.fiverr.com/izhar_ullah_seo "
          target="_blank"
          className="hover:text-gray-600  text-lg  flex gap-1 items-center"
          >
             Fiverr:<SiFiverr />
            </a>
                       
          </div>
          
          </div>
          
        </div>

        <p className="mb-4 mt-2 text-pretty text-sm">&copy; Built & Designed by Izhar.</p>
      </div>
    </>
  );
}

export default Contact;
