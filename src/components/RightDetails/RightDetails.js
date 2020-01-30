import React from "react";
import "./RightDetails.css";

const courseWork = [["Project Management", "Design and Analysis of Structures", "Strength of Materials", "Intro to Computer Studies", "Mathematics I/II/III/IV/V"], ["Intro to Algorithms", "Operating Systems", "Science of Programming", "Advanced Database Organization", "Software Project Management"]]
const heading = ["Relevant Coursework: ", "Project Description: "];
const courseDescription = ["Bachelor's in Engineering - Civil", "Master's of Science - Computer Science"];
const years = ["2011 - 2015", "2019 - 2021 (Expected)"]
const footer = ["GPA: "];
const grades = ["3.5", "3.7"]
function RightDetails(props){

    let unorderedList = [];
    for(let i=0;i<courseWork[0].length;i++){
        unorderedList.push(<li key={i}>{courseWork[0][i]}</li>);
    }
    return <div id="rightdetails-main-div">
        <div className="rightdetails-heading">{heading[0]}</div>
        <div className="rightdetails-list"><ul>{unorderedList}</ul></div>
        <div className="rightdetails-prefooter1">{courseDescription[0]}</div>
        <div className="rightdetails-prefooter2">{years[0]}</div>
        <div className="rightdetails-footer">{footer[0]}<span>{grades[0]}</span></div>
        <div className="separator-5"></div>
        <div className="separator-6"></div>
    </div>
}
export default RightDetails;