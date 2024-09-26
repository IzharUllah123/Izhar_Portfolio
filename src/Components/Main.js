import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Expertise from "./Expertise";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Servics from "./Servics";

const MainLayout = () => (
    <div className="flex flex-col">
        <Hero />
        <Expertise />
        <Projects />
        <Servics />
        <Contact />
    </div>
);

const Main = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/expertise" element={<Expertise />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default Main;
