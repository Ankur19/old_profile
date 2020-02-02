import React from "react";
import "./LeftSelector.css"
import Option from "../Option/Option";

//<div className="leftselector-selector-div leftselector-selected">Illinois Institute of Technology</div>
//<div className="leftselector-selector-div">Jorhat Engineering College</div>
const education = [["Jorhat Engineering College", "Bachelor's"], ["Illinois Inst. of Technology", "Master's"]]
const courseDescription = ["Bachelor's in Engineering - Civil", "Master's of Science-Computer Science"];
const years = ["2011 - 2015", "2019 - 2021 (Expected)"]
const footer = ["GPA: "];
const grades = ["3.5", "3.7"]
function LeftSelector(props){

    let options = [];
    if(props.curEdu===0){
        options.push(<Option key={0} heading={education[0][0]} detail={education[0][1]} selected={1} clickHandler={()=>{}}></Option>);
        options.push(<Option key={1} heading={education[1][0]} detail={education[1][1]} clickHandler={()=>props.setEdu(1)}></Option>);
    }
    else{
        options.push(<Option key={1} heading={education[1][0]} detail={education[1][1]} selected={1} clickHandler={()=>{}}></Option>);
        options.push(<Option key={0} heading={education[0][0]} detail={education[0][1]} clickHandler={()=>props.setEdu(0)}></Option>);
    }

    return <div id="leftselector-main-div">
        <div className="separator-1"></div>
        <div className="separator-2"></div>
        <div className="separator-3"></div>
        <div className="separator-4"></div>
        <div className="leftselector-options">{options}</div>
        <div className="leftselector-footer">
            <div className="rightdetails-prefooter1">{courseDescription[props.curEdu]}</div>
            <div className="rightdetails-prefooter2">{years[props.curEdu]}</div>
            <div className="rightdetails-footer">{footer[props.curEdu]}<span>{grades[props.curEdu]}</span></div>
        </div>
    </div>
}
export default LeftSelector;