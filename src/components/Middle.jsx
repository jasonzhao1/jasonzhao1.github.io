import React from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
function Middle() {
    return (
        <div className="middle-div">
            <About />
            <hr id="to_skill" />
            <Skills />
            <hr id="projects" />
            <Projects />
            <hr id="contact" />
            <Contact />
        </div>
    );
}

export default Middle;