import React from "react";
import "./Body.css";
import ID from "../ID/ID";
import Summary from "../Summary/Summary";
import LeftSelector from "../LeftSelector/LeftSelector";
import RightDetails from "../RightDetails/RightDetails";

function Body(props){

    let bodyMainClass = "body-main";

    if(props.menuState===1){
        bodyMainClass+=" body-main-menu-on";
    }

    return <div className={bodyMainClass}>
        <div className="body-left">
            {props.menuItem===0?<ID></ID>:<LeftSelector></LeftSelector>}
        </div>
        <div className="body-right">
        {props.menuItem===0?<Summary></Summary>:<RightDetails></RightDetails>}
        </div>
    </div>
}

export default Body;