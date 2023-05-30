import "./Projects.css";
import '../../App.css';
import etoile from "../../img/etoilesc.png";
import caps from "../../img/capslooksc.png";


const Projects = () => {
    return (
        <div className="Projects">
            <h1 className="prh1">Projects</h1>
            <div className="card">
                <div className="card1">
                    <img className="phetoile" src={etoile} alt="project" />
                    <h2 className="namep">Etoile</h2>
                    <button className="vc"><a href="https://github.com/Astbrqeg/Etoile_" className="vc">View Code</a></button>
                </div>
                <div className="card2">
                    <img className="phcaps" src={caps} alt="project" />
                    <h2 className="namep">Caps Look</h2>
                    <button className="vc"><a href="https://github.com/Astbrqeg/Caps-Look" className="vc">View Code</a></button>
                </div>

            </div>
        </div>
    )
}

export default Projects;