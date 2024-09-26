function Skills(){
    return(<>
   
    
    <div className="flex flex-wrap justify-center mt-8 w-full">
            <div className="flex flex-col items-center shadow-2xl p-2 text-sm w-full xs:mb-6 xs:shadow-lg xs:w-[75%]  md:w-1/3 lg:w-1/4 mx-4 mb-4">
              <img
                className="h-16 w-16 mx-auto "
                src="front-end.png"
                alt="Web Design"
              />
              
               <h3 className="font-semibold font-serif mt-2 ">Front End Dev</h3>
                <div className="flex mt-3 text-center">
                  HTML, CSS, Tailwind CSS, React.js
               
              </div>
            </div>
           
           
            <div className="flex flex-col items-center shadow-2xl p-2 text-sm w-full xs:mb-6 xs:shadow-lg xs:w-[75%] md:w-1/3 lg:w-1/4 mx-4">
  <img className="h-16 w-16" src="backend.png" />
  <h3 className="font-serif font-semibold mt-2">Back end Dev</h3>
  <div className="mt-3 text-center">Node.js, Express.js, MongoDB</div>
</div>

<div className="flex flex-col items-center shadow-2xl p-2 text-sm w-full xs:mb-6 xs:shadow-lg xs:w-[75%] md:w-1/3 lg:w-1/4 mx-4">
  <img className="h-16 w-16" src="machine-learning.png" />
  <h3 className="font-serif font-semibold mt-2">Machine Learning Dev</h3>
  <div className="mt-3 text-center">Python, Pandas, Numpy, Scikit-Learn</div>
</div>

          </div>

          
    
    </>)
}

export default Skills;