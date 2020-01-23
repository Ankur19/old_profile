import React from "react";
import "./ID.css";

function ID(props){
    return <div className="id-main-div">
        <div id="id-main-img"><img src={process.env.PUBLIC_URL + "/mypic1.jpg"} alt="profile"></img></div>
        <div id="id-name-div">Ankur Saikia</div>
        <div id="id-about-div">
            <p>Illinois Institute of Technology - M.S. Computer Science</p><p>2021</p>
            <p>Jorhat Engineering College - B.E. Civil Engineering</p><p>2015</p>
        </div>
    </div>
}

export default ID;