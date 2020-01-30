import React from "react";
import "./Option.css";

function Option(props){
    let mainClass = "option-main-div"; 
    if(props.selected===1){
        mainClass+=" option-selected";
    }
    return <div className={mainClass}>
            <div className="option-heading"><p>{props.heading}</p></div>
            <div className="option-detail">{props.detail}</div>
        </div>
}

export default Option;