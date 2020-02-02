import React, {useEffect} from "react";
import "./RightDetails.css";

const courseWork = [["Project Management", "Design and Analysis of Structures", "Strength of Materials", "Intro to Computer Studies", "Mathematics I/II/III/IV/V"], ["Intro to Algorithms", "Operating Systems", "Science of Programming", "Advanced Database Organization", "Software Project Management"]]
const heading = ["Relevant Coursework", "Project Description"];

function RightDetails(props){
    
    useEffect(()=>{
        document.getElementsByClassName("body-main")[0].style.backgroundImage = 'url("469.jpg")';

        return ()=> document.getElementsByClassName("body-main")[0].style.backgroundImage = 'none';
        
    },[]);
    let unorderedList = [];
    for(let i=0;i<courseWork[0].length;i++){
        unorderedList.push(<li key={i}>{courseWork[0][i]}</li>);
    }
    return <div id="rightdetails-main-div">
        <div className="rightdetails-heading">{heading[0]}</div>
        <div className="rightdetails-list"><ul>{unorderedList}</ul></div>
        <div className="separator-5"></div>
        <div className="separator-6"></div>
    </div>
}
export default RightDetails;