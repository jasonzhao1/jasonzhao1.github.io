import React from "react";

function SingleSkill(props) {
    return (
        <div>
            <div className="skill-row phone_fill">
                <img className={props.imagePosition} src={props.source} alt="" />
                <h3 className="skeels">{props.hthree}</h3>
                <p className="text">{props.description}</p>
            </div>
            <br />
        </div>

    );
}

function Skills() {
    return (
        <div id="skills" className="skills">
            <h2>My Skills</h2>
            <SingleSkill imagePosition="left_img" source="images/csshtmljs.jpeg" hthree="Front End Development" description="React, HTML/CSS/Javascript" />
            <SingleSkill imagePosition="right_img" source="images/nodeJS.png" hthree="Back End" description="Node.js, EJS, MongoDB, MySQL" />
            <SingleSkill imagePosition="left_img" source="images/python.jpeg" hthree="Python" description="Python, Pygame" />
            <SingleSkill imagePosition="right_img" source="images/java.jpg" hthree="Java" description="Object-Oriented Java; Experience with JFrame" />
            <SingleSkill imagePosition="left_img" source="images/c.jpeg" hthree="C" description="Imperative C; Learning C++ in the current term"/>
        </div>
    )
}

export default Skills;