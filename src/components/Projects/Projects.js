import React, {useState, useEffect} from "react";
import "./Projects.css";

const numProjects = 4;
const chordsAppLink = "https://drive.google.com/file/d/1R1VeVZvBptdGaj1dBfnSOsHeF-zubfkR/view?usp=sharing";
const chordsMakerGit = "https://github.com/Ankur19/chords-app";
const atripSite = "https://atrip.tech";
const pathFinderSite = "https://ankur19.github.io/path_finder";
const pathFinderGit = "https://github.com/Ankur19/path_finder";
const electronicVendorGit = "https://github.com/Ankur19/b_buy_electronic_vendor_website";

const projects = [<p><span className="projects-heading">Chords Maker</span><br></br><span className="projects-desc">A windows app to help guitarists easily build chords in any scale and tuning instead of spending hours trying to manually find a good sound.</span><br></br><span className="projects-footer">C++, JavaScript, React.js, Electron.js</span><br></br></p>, 
<p><span className="projects-heading">A TRIP A DAY</span><br></br><span className="projects-desc">An outing planner web-app that provides data about popular places nearby, their distance, rating and time to travel.</span><br></br><span className="projects-footer">JavaScript, React.js, Google Maps API</span><br></br></p>,
<p><span className="projects-heading">PATH FINDER</span><br></br><span className="projects-desc">An algorithm visualizer to visualize how common path finding algorithms calculate the shortest path from source to destination.</span><br></br><span className="projects-footer">JavaScript, jQuery, Bootstrap, HTML, CSS</span><br></br></p>,
<p><span className="projects-heading">ELECTRONIC VENDOR</span><br></br><span className="projects-desc">A vendor website to sell electronic products with all the functionality of a modern webstore like sub-category wise filtering and search.</span><br></br><span className="projects-footer">PHP, JavaScript, Oracle SQL, jQuery, Bootstrap</span><br></br></p>];

const projResources = [<div style={{display:"flex",flexDirection:"row"}}><a className="projects-download"href={chordsAppLink} target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/downloading-file.png"} alt="download"></img>Download</a><a className="projects-github" href={chordsMakerGit} target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/github-logo.png"} alt="github"></img>Source</a></div>,
<div style={{display:"flex",flexDirection:"row"}}><a className="projects-download"href={atripSite} target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/www.png"} alt="download"></img>Visit Page</a></div>,
<div style={{display:"flex",flexDirection:"row"}}><a className="projects-download"href={pathFinderSite} target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/www.png"} alt="download"></img>Visit</a><a className="projects-github" href={pathFinderGit} target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/github-logo.png"} alt="github"></img>Source</a></div>,
<div style={{display:"flex",flexDirection:"row"}}><a className="projects-github" href={electronicVendorGit} target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + "/github-logo.png"} alt="github"></img>Source</a></div>]

function getNavs(count, curProject, setProject){
    let navs = [];
    for(let i=0;i<count;i++){
        if(i===curProject){
            navs.push(<div key={i} className="projects-nav-circle"><div className="projects-nav-selected"></div></div>);
        }
        else{
            navs.push(<div key={i} className="projects-nav-circle" onClick={()=>setProject(i)}></div>);
        }
    }
    return navs;
}



function Projects(props){

    const [curProject, setProject] = useState(0);

    useEffect(()=>{
        let changeProject = setInterval(()=>{
            if(curProject===numProjects-1){
                setProject(0);
            }
            else{
                setProject(curProject+1);
            }
        }, 12000);

        return ()=> clearInterval(changeProject);
    })
    let projectsMainClass = "projects-main-div";
    let layer1Class = "projects-layer1";
    let textClass = "project-text";
    if(curProject===2){
        projectsMainClass+=" backg-p1";
        layer1Class+=" proj-layer1-1";
        textClass+=" proj-text-1";
    }
    else if(curProject===1){
        projectsMainClass+=" backg-p2";
        layer1Class+=" proj-layer1-2";
        textClass+=" proj-text-2";
    }
    else if(curProject===3){
        projectsMainClass+=" backg-p3";
        layer1Class+=" proj-layer1-3";
        textClass+=" proj-text-3";
    }

    return <div className={projectsMainClass}>
        <div className="projects-nav-main">{getNavs(numProjects, curProject, setProject)}</div>
        <div className={layer1Class}></div>
        <div className={textClass}>
            {projects[curProject]}
            {projResources[curProject]}
        </div>
    </div>
}

export default Projects;