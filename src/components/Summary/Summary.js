import React from "react";
import "./Summary.css";

let summaryContent = <p><span className="big-italics">I love <br></br>coding <span className="red-text">&</span> <br></br>solving problems</span><br></br> <span className="title-text">I am a programmer</span> <br></br>Usually work with Javascript for front-end, either standalone or with frameworks like Reactjs. Comfortable using Bootstrap and jQuery in tandem with HTML/CSS for creating pretty UI.<br></br><br></br>Love using Javascript for the back-end as well (Node.js, Express.js, Electron.js). I have 1 year experience working as a Microservices Java Developer using Spring MVC and 2 years of experience working as a Software Tester - Automation tools. Have also used PHP at times. Strongly motivated to learn, implement new technologies and build software. I have found that building softwares that have a social impact excites me. <br></br><br></br>Oh, I also play the guitar and sometimes use my own software to find and play new chords.</p>;

function Summary(props){
    return <div className='summary-main-div'>
        <div className = "summary-goto-projects" onClick={()=>props.setMenuItem(3)}><p>Check<br></br>my<br></br>Projects</p><img src={process.env.PUBLIC_URL + "/11.png"}alt="goto-projects"></img></div>
        <div className="summary-content">{summaryContent}</div>
    </div>
}
export default Summary;