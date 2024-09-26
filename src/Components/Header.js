import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
    const { theme, toggle } = useContext(ThemeContext);
    const [humbrgr, setHmbrgr] = useState(false);
    
    const show = () => {
        setHmbrgr(!humbrgr);
    };

    return (
        <>
            <div className={`flex flex-col sticky top-0`}>
                <div className={`flex justify-between items-center mt-0 font-semibold px-4 py-1 
                                 lg:rounded-lg shadow-lg ${theme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
                    
                    {/* Hamburger icon for small screens */}
                    <div className="lg:hidden">
                        <button onClick={show} className="p-2" aria-label="Toggle Menu">
                            ☰
                        </button>
                    </div>

                    {/* Logo centered on small screens and left-aligned on large screens */}
                    <div className="text-center lg:text-left">
                        <img className="rounded-full w-8" src="logo.png" alt="Logo" />
                    </div>

                    {/* Navigation links for large screens */}
                    <div className="hidden lg:flex lg:items-center">
                        <ul className="flex justify-evenly mt-0">
                            <li className="mx-5"><Link to="/">Home</Link></li>
                            <li className="mx-5"><Link to="/expertise">Skill & Expertise</Link></li>
                            <li className="mx-5"><Link to="/projects">Projects</Link></li>
                            <li className="mx-5"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Toggle button always on the right */}
                    <div>
                        <button onClick={toggle} className="p-2 rounded" aria-label="Toggle Theme">
                            <FaMoon />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - only show when humbrgr is true */}
                {humbrgr && (
                    <div className={`lg:hidden ${theme ? 'bg-[#0e0e1a] text-white h-screen w-32' : 'bg-gray-200 text-black h-screen w-32'}`}>
                        <ul className="flex flex-col items-start px-4">
                            <li className="py-2"><Link to="/">Home</Link></li>
                            <li className="py-2"><Link to="/expertise">Skill & Expertise</Link></li>
                            <li className="py-2"><Link to="/projects">Projects</Link></li>
                            <li className="py-2"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Header;
