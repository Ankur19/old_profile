import React from "react";
import "./Body.css";
import ID from "../ID/ID";
import Summary from "../Summary/Summary";

function Body(props){

    let bodyMainClass = "body-main";

    if(props.menuState===1){
        bodyMainClass+=" body-main-menu-on";
    }

    return <div className={bodyMainClass}>
        <div className="body-left">
            <ID></ID>
        </div>
        <div className="body-right">
            <Summary></Summary>
        </div>
    </div>
}

export default Body;