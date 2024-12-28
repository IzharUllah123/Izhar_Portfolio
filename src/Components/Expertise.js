import { FaReact, FaHtml5, FaCss3, FaNode, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";

function Expertise() {
  return (
    <div className="flex flex-col items-center w-full px-6 py-10 bg-gray-50">
      {/* Header Section */}
      <div className="text-center max-w-4xl">
        <h1 className="font-bold text-3xl text-gray-800">Skill & Expertise</h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          I have over a year of experience in front-end development, working
          with HTML, CSS, Tailwind CSS, and React.js. In addition, I have six
          months of experience in backend development using Node.js (Express.js)
          and MongoDB, and another six months in machine learning, allowing me
          to build and integrate full-stack applications effectively.
        </p>
      </div>

      {/* Core Competencies Section */}
      <h2 className="font-semibold text-2xl text-gray-700 mt-12">Core Competencies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full max-w-6xl">
        {/* Frontend Development */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">Frontend Development</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-5xl text-orange-500" />
              <span className="mt-2 text-gray-600">HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3 className="text-5xl text-blue-500" />
              <span className="mt-2 text-gray-600">CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <RiTailwindCssFill className="text-5xl text-teal-500" />
              <span className="mt-2 text-gray-600">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-5xl text-blue-400" />
              <span className="mt-2 text-gray-600">React.js</span>
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">Backend Development</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <FaNode className="text-5xl text-green-500" />
              <span className="mt-2 text-gray-600">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <DiMongodb className="text-5xl text-green-700" />
              <span className="mt-2 text-gray-600">MongoDB</span>
            </div>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">Machine Learning</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <FaPython className="text-5xl text-yellow-500" />
              <span className="mt-2 text-gray-600">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPandas className="text-5xl text-blue-400" />
              <span className="mt-2 text-gray-600">Pandas</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNumpy className="text-5xl text-gray-600" />
              <span className="mt-2 text-gray-600">NumPy</span>
            </div>
            <div className="flex flex-col items-center">
              <SiScikitlearn className="text-5xl text-orange-500" />
              <span className="mt-2 text-gray-600">Scikit-Learn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
