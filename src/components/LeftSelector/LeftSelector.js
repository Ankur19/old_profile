import React from "react";
import "./LeftSelector.css"
import Option from "../Option/Option";

//<div className="leftselector-selector-div leftselector-selected">Illinois Institute of Technology</div>
//<div className="leftselector-selector-div">Jorhat Engineering College</div>
const education = [["Jorhat Engineering College", "Bachelor's"], ["Illinois Inst. of Technology", "Master's"]]

function LeftSelector(props){

    let options = [];
    options.push(<Option key={0} heading={education[0][0]} detail={education[0][1]} selected={1}></Option>);
    options.push(<Option key={1} heading={education[1][0]} detail={education[1][1]} ></Option>);

    return <div id="leftselector-main-div">
        <div className="separator-1"></div>
        <div className="separator-2"></div>
        <div className="separator-3"></div>
        <div className="separator-4"></div>
        <div className="leftselector-options">{options}</div>
    </div>
}
export default LeftSelector;