import { FaReact, FaHtml5 ,FaCss3, FaNode, FaMagento, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiPandas,SiNumpy,SiScikitlearn } from "react-icons/si";


function Expertise(){
    return(<>
    <div className="flex w-full flex-col">
        <div className="flex flex-col w-[70%] mx-auto">
              <h1 className="font-semibold mx-auto mt-8">Skill & Experties</h1>
              <p className="mt-6">I have over a year of experience in front-end development, working with HTML, CSS,
             Tailwind CSS, and React.js. In addition, I have six months of experience in backend 
             development using Node.js (Express.js) and MongoDB, and another 
             six months in machine learning, allowing me to build and integrate 
             full-stack applications effectively.
             </p>
           
         </div>

         <div>
          
           <div className="flex mt-6 font-semibold">
                <h2 className="mx-auto">Core Competencies</h2>

           </div>


    <div className="flex flex-wrap justify-center mt-3 w-full">
            <div className="flex flex-col items-center  p-2 text-sm w-full xs:mb-6  xs:w-[75%]  md:w-1/3 lg:w-1/4 mx-4 mb-4">
             
              <div className="flex flex-col p-3 w-full">
               <h3 className="font-semibold mx-auto text-gray-500">Front End Development</h3>

                <div className="flex mt-3 text-center mx-auto">
                    <div className="flex flex-col mx-3">
                        <div className="mx-auto text-5xl mb-1">< FaHtml5 /></div>
                         <span> HTML</span>
                    </div>

                    <div className="flex flex-col mx-3">
                        <div className="mx-auto text-5xl mb-1">  <FaCss3 /></div>
                         <span>    CSS</span>
                    </div>

                    <div className="flex flex-col mx-3">
                        <div className="mx-auto text-5xl mb-1"> <RiTailwindCssFill /> </div>
                         <span> Tailwind CSS</span>
                    </div>
                 
                    <div className="flex flex-col mx-3">
                        <div className="mx-auto text-5xl mb-1"> <FaReact /> </div>
                         <span>  React.js </span>
                    </div>                             
                </div>
                
              </div>
            </div>
           
           
            <div className="flex flex-col items-center p-2 text-sm w-full xs:mb-6  xs:w-[75%]  md:w-1/3 lg:w-1/4 mx-4 mb-4">
             
            <div className="flex flex-col p-3 w-full ">
              <h3 className="font-semibold mx-auto text-gray-500">Back End Development</h3>
              <div className="mt-3 flex text-center mx-auto">
                
              <div className="flex flex-col mx-3">
                        <div className="mx-auto text-5xl mb-1"> <FaNode /> </div>
                         <span>   Node.js (Express.js) </span>
                    </div>
                

                    <div className="flex flex-col mx-3">
                        <div className="mx-auto text-5xl mb-1"> <DiMongodb /> </div>
                         <span>   MongoDB </span>
                    </div>
                
                
              
              </div>
            </div>
           </div>

         
            <div className="flex flex-col items-center p-2 text-sm w-full xs:w-[75%]  md:w-1/3 lg:w-1/4 mx-4 mb-4">
            <div className="flex flex-col p-3 w-full ">
              <h3 className="font-semibold mx-auto text-gray-500">Machine Learning Dev</h3>
              <div className="mt-3 flex text-center mx-auto">


              <div className="flex flex-col mx-3">
                        <div className="mx-auto text-5xl mb-1"> <FaPython /> </div>
                         <span>      Python </span>
                    </div>

                    <div className="flex flex-col mx-3">
                        <div className="mx-auto text-5xl mb-1"> <SiPandas /> </div>
                         <span>      Pandas </span>
                    </div>

                    <div className="flex flex-col mx-3">
                        <div className="mx-auto text-5xl mb-1">   <SiNumpy /> </div>
                         <span>        Numpy </span>
                    </div>

                    <div className="flex flex-col mx-3">
                        <div className="mx-auto text-5xl mb-1"> <SiScikitlearn /> </div>
                         <span>      Scikit-Learn </span>
                    </div>


                  
             
              </div>
              </div>
            </div>
          </div>
         </div>
    </div>
    
    </>)
}
export default Expertise;