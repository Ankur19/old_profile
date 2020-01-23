import React from "react";
import "./Menu.css";

const maxIntemsPerRow = 3;
function Menu(props){

    function menuActivateHandler(){
        if(props.menuState===0){
            [...document.getElementsByClassName('menu-items-div')].forEach(elem=>elem.style.display = "flex");
            document.getElementsByClassName('menu-img')[0].src = process.env.PUBLIC_URL + "/close.png";
            document.getElementsByClassName('menu-main-div')[0].style.backgroundColor = '#EBECF0';
            props.setMenuState(1);
        }
        else{
            [...document.getElementsByClassName('menu-items-div')].forEach(elem=>elem.style.display = "none");
            document.getElementsByClassName('menu-img')[0].src = process.env.PUBLIC_URL + "/menu.png";
            document.getElementsByClassName('menu-main-div')[0].style.backgroundColor = '#FFFFFF';
            props.setMenuState(0);
        }
    }

    let menuItems = [];
    if(props.menuItems !==undefined){
        props.menuItems.forEach((item, index)=>{
            if(index%maxIntemsPerRow===0){
                menuItems.push([<div key={index} className="menu-menuitem-div"><p className="menu-menuitem-p">{item}</p></div>])
            }
            else{
                menuItems[menuItems.length-1].push(<div key={index} className="menu-menuitem-div"><p className="menu-menuitem-p">{item}</p></div>);
            }
        });
    }
    //Also add the social network icons
    menuItems.push([]);
    menuItems[menuItems.length-1].push(<div key={props.menuItems.length+1} className="menu-menuitem-div"><img className="menu-menuitem-img" src={process.env.PUBLIC_URL + "/github.png"} alt="github"></img></div>);
    menuItems[menuItems.length-1].push(<div key={props.menuItems.length+2} className="menu-menuitem-div"><img className="menu-menuitem-img" src={process.env.PUBLIC_URL + "/linkedin.png"} alt="linkedin"></img></div>)
    
    
    let menuRows = [];
    menuItems.forEach((itemArray, index)=>{
        //Add additional class for social images row
        if(index===menuItems.length-1){
            menuRows.push(<div key = {index} className="menu-items-div menu-items-img-div">{itemArray}</div>);
        }
        else{
            menuRows.push(<div key = {index} className="menu-items-div">{itemArray}</div>);
        }
    })




    return <div className="menu-main-div">
            <div className="menu-img-div" onClick={menuActivateHandler}>
                <img className="menu-img" src={process.env.PUBLIC_URL + "/menu.png"} alt="menu"></img>
            </div>
            {menuRows}
        </div>
}

export default Menu;