import React, {useState} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import Body from "./components/Body/Body";
const menuItems = ["ABOUT", "EDUCATION", "EXPERIENCE", "PROJECTS", "HOBBIES"];
function App() {

  const[menuState, setMenuState] = useState(0);
  let overlappingBoxes = [];
  if(menuState===1){
    overlappingBoxes.push(<div key={1} id="overlapping-box-2"></div>);
    overlappingBoxes.push(<div key={2} id="overlapping-box-1"></div>);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Menu menuItems={menuItems} menuState={menuState} setMenuState={setMenuState}></Menu>
      </header>
      <main>
        {overlappingBoxes.length>0 ? <div id="overlapping-boxes-div">{overlappingBoxes}</div> : null}
        <Body menuState={menuState}></Body>
      </main>
    </div>
  );
}

export default App;
