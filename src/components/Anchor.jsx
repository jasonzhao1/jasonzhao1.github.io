import React from "react"


function Anchor(props) {
    return (
        <div className="anchors">
            <a className="menu" href="#about">About Me</a>
            <a className="menu" href="#to_skill">Skills</a>
            <a className="menu" href="#projects">Projects</a>
            <a className="menu" href="#contact">Contact Me</a>
        </div>
    );

}

export default Anchor;