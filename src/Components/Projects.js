import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import MyWork from "./MyWork";

function Projects() {
  const [data, setData] = useState(MyWork);

  const handleFilter = (category) => {
    if (category === "All") {
      setData(MyWork); // Reset to the original data
    } else {
      const filterData = MyWork.filter((item) => item.category === category); // Use MyWork instead of data
      setData(filterData);
    }
  };

  return (
    <>
      <div className="flex w-[95%] flex-col mt-3 mx-auto">
        
        <h1 className="mx-auto font-semibold mb-8">My Work</h1>
        <div className="flex mx-auto">
          <ul className="flex lg:space-x-24 md:space-x-20 sm:space-x-8 xs:space-x-6 hover:cursor-pointer">
            <li onClick={() => handleFilter("All")}>All</li>
            <li onClick={() => handleFilter("React")}>React</li>
            <li onClick={() => handleFilter("Full Stack")}>Full Stack</li>
            <li onClick={() => handleFilter("ML")}>ML</li>
          </ul>
        </div>
       


        <div className="flex flex-wrap justify-center mt-8 mx-auto w-[95%]">
           {data.map((item) => (
           
           <div key={item.id} className="flex flex-col items-center w-[290px] h-[330px] rounded-md
           
           shadow-lg shadow-gray-400/30 hover:shadow-2xl transition-shadow duration-300 m-3">
          
          <div className="aspect-w-16 aspect-h-9 w-full mb-3">
  <img src={item.image} className="object-cover" alt={item.name} />
</div>


           <h3 className="m-0 font-semibold text-sm">{item.technology}</h3>
           <p className="text-justify p-2">{item.description}</p>
           <div className="flex justify-between mt-3 ">
           <button className="bg-gray-900 text-gray-200 rounded-lg p-1 border border-gray-900
                      text-sm
                       hover:bg-slate-200  hover:text-gray-900
                         mx-3" onClick={() => window.open(item.live, "_blank")}>Live Demo</button>
           <button className="bg-gray-200 text-gray-900 mx-3 rounded-lg px-2 border border-gray-300
                        hover:bg-gray-900 hover:text-gray-200"
                        
                        onClick={()=>window.open(item.git,"_blank")}
                        > <FaGithub /></button>
           </div>
        </div>
  ))}
</div>

      </div>
    </>
  );
}

export default Projects;
