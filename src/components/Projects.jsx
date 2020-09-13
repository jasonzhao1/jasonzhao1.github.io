import React from "react";

const specifics = {
    japanese: {
        id: 1,
        content: [
            "The user types corresponding romaji in the input field to remove the moving japanese characters",
            "More characters drop fown at faster speed as the level increases",
            "The player can choose what specific types of characters they want to practice"
        ]
    },
        
    trivia: {
        id: 2,
        content: [
            "Players can choose questions according to difficulty or get all random questions",
            'Players can either answer the questions or learn new knowledge by clicking "show answer"'
        ]
    },
    toDo: {
        id:3,
        content:[
            "Users can add multiple lists for different events",
            "They can also easily manage/create new lists",
            "Data is stored inside MongoDB"
        ]
    }
};


function Li(props) {
    return (
        <ul>
            {props.content.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
    )
}

function SingleProject(props) {
    return (
        <div className="skill-row proj">
            <img className="a left_img_alt" src={props.source} alt={props.altt} />
            <div className="b size_change">
                <h3 className=" skeels project_block">{props.title}</h3>
                <a className="web_link" href={props.anchorLink}>{props.anchorText}</a>
                <p className=" text">{props.description}</p>
                <Li id= {props.id} content={props.content} />
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className="project_details">
            <h2>Side Projects</h2>
            <SingleProject
                id={specifics.japanese.id}
                source="images/pygame_load.png"
                alt="japanese_learning"
                title="Japanese Learning Game"
                anchorLink="https://youtu.be/sxeFqqlxSp8"
                anchorText="View Demo"
                description="A game that helps users learn the 50 Japanese Characters (made in Pygame)"
                content={specifics.japanese.content}
            />
            <SingleProject
                id= {specifics.trivia.id}
                source="images/trivia_ingame.jpg"
                alt="trivia-game"
                title="Trivia Game"
                anchorLink="https://limitless-wave-41117.herokuapp.com"
                anchorText="Go to the game"
                description="A Trivia Game that people can play during fragments of time to learn about bizzare knowledge(Uses Jservice API)"
                content={specifics.trivia.content}
            />
            <SingleProject
                id={specifics.toDo.id}
                source="images/toDo.png"
                alt="to-do-list"
                title="To-Do-List"
                anchorLink="https://nameless-gorge-38449.herokuapp.com/"
                anchorText="Visit the List"
                description="A to-do-list for people to manage things in their life"
                content={specifics.toDo.content}
            />

        </div>
    )
}

export default Projects;