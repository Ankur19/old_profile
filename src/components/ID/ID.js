import React from "react";
import "./ID.css";

function ID(props){
    return <div className="id-main-div">
        <div id="id-main-img"><img src={process.env.PUBLIC_URL + "/mypic1.jpg"} alt="profile"></img></div>
        <div id="id-about-div">
            <p style={{fontSize:"2.7vw", color:"rgba(0, 0, 0, 0.8)", marginBottom:"5px", fontWeight:"600"}}>Who's this guy?</p>
            <div style={{height:"2px", padding:"0", margin:"0", marginLeft:"40%",borderTop:"2px solid rgba(255, 0, 0, 0.7)", width:"6vw", alignSelf:"center"}}></div>
            <p style={{fontSize:"1.5vw", fontWeight:"700", color:"rgba(0, 0, 0, 0.8)", marginTop:"7vh"}}>My name is Ankur</p>
            <p style={{fontSize:"1.2vw", color:"rgba(0, 0, 0, 0.7)", fontWeight:"400", fontFamily:"Helvetica"}}>I am a software developer/engineer based in Chicago, US.</p>
        </div>
    </div>
}

export default ID;