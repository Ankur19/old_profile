import React from "react";
import "./Summary.css";

let summaryContent = <p>I love coding and solving problems. Forever interested in computers and computer software. <br></br><br></br>Joined IBM as a software tester in 2016 and later moved on to become a software developer. Left IBM to further work on my computer science background and pursue a masters degree in computer science. <br></br><br></br>3 years of extensive experience working on a business critical application for AT&T/IBM. Developed and tested end to end sales workflows for products like AT&T-SDWAN. <br></br>Also have experience working on AGILE projects and projects implementing TDD. Won a IBM Eminence and Excellence award for my contributions to developing a automation testing framework among other things. <br></br><br></br>Strongly motivated to learn, implement new technologies and build software. I have found that building useful software excites me. <br></br><br></br>Oh, I also play the guitar and sometimes use my own software to find and play new chords.</p>;

function Summary(props){
    return <div className='summary-main-div'>
        <div className="summary-title">Summary</div>
        <div className="summary-content">{summaryContent}</div>
    </div>
}
export default Summary;