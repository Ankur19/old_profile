import React from "react";
import "./Menu.css";

const maxIntemsPerRow = 3;
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    menuActivateHandler = ()=>{
        if(this.props.menuState===0){
            document.getElementsByClassName('App-header')[0].style.height = "auto";
            [...document.getElementsByClassName('menu-items-div')].forEach(elem=>elem.style.display = "flex");
            document.getElementsByClassName('menu-img')[0].src = process.env.PUBLIC_URL + "/close.png";
            //document.getElementsByClassName('menu-main-div')[0].style.backgroundColor = '#EBECF0';
            document.getElementsByClassName('menu-main-div')[0].style.backgroundImage = "linear-gradient(rgb(177, 192, 226), white)";
            if(this.props.menuItem===3){
                document.getElementsByClassName('project-text')[0].style.position="relative";
            }
            this.props.setMenuState(1);
        }
        else{
            document.getElementsByClassName('App-header')[0].style.height = "10vh";
            [...document.getElementsByClassName('menu-items-div')].forEach(elem=>elem.style.display = "none");
            document.getElementsByClassName('menu-img')[0].src = process.env.PUBLIC_URL + "/menu.png";
            document.getElementsByClassName('menu-main-div')[0].style.backgroundImage = "none";
            document.getElementsByClassName('menu-main-div')[0].style.backgroundColor = '#FFFFFF';
            if(this.props.menuItem===3){
                document.getElementsByClassName('project-text')[0].style.position="fixed";
            }
            this.props.setMenuState(0);
        }
    }

    render(){
        let menuItems = [];
        if(this.props.menuItems !==undefined){
            this.props.menuItems.forEach((item, index)=>{
                if(index%maxIntemsPerRow===0){
                    menuItems.push([<div key={index} className="menu-menuitem-div" onClick={()=>{this.props.setMenuItem(index);this.menuActivateHandler();}}><p className="menu-menuitem-p">{item}</p></div>])
                }
                else{
                    menuItems[menuItems.length-1].push(<div key={index} className="menu-menuitem-div" onClick={()=>{this.props.setMenuItem(index);this.menuActivateHandler();}}><p className="menu-menuitem-p">{item}</p></div>);
                }
            });
        }
        //Also add the social network icons
        menuItems.push([]);
        menuItems[menuItems.length-1].push(<div key={this.props.menuItems.length+1} className="menu-menuitem-div"><img className="menu-menuitem-img" src={process.env.PUBLIC_URL + "/github.png"} alt="github"></img></div>);
        menuItems[menuItems.length-1].push(<div key={this.props.menuItems.length+2} className="menu-menuitem-div"><img className="menu-menuitem-img" src={process.env.PUBLIC_URL + "/linkedin.png"} alt="linkedin"></img></div>)
        
        
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
            <div className="menu-top-div">
                <div className="menu-main-name">ankur<span>saikia</span></div>
                <div className="menu-img-div" onClick={this.menuActivateHandler}>
                    <img className="menu-img" src={process.env.PUBLIC_URL + "/menu.png"} alt="menu"></img>
                </div>
            </div>
            {menuRows}
        </div>}
}

export default Menu;