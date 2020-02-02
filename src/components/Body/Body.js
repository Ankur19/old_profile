import React from "react";
import "./Body.css";
import ID from "../ID/ID";
import Summary from "../Summary/Summary";
import LeftSelector from "../LeftSelector/LeftSelector";
import RightDetails from "../RightDetails/RightDetails";
import Projects from "../Projects/Projects";

function Body(props){

    let bodyMainClass = "body-main";

    if(props.menuState===1){
        bodyMainClass+=" body-main-menu-on";
    }

    let scenario1 = <div className={bodyMainClass}>
                        <div className="body-left">
                            {props.menuItem===0?<ID></ID>:<LeftSelector></LeftSelector>}
                        </div>
                        <div className="body-right">
                            {props.menuItem===0?<Summary setMenuItem={props.setMenuItem}></Summary>:<RightDetails></RightDetails>}
                        </div>
                    </div>;
    if(props.menuItem ===3){//3 is for projects
        return <div className={bodyMainClass}>
            <Projects></Projects>
        </div>
    }
    return scenario1;
}

export default Body;