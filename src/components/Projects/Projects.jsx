import "./Projects.css";
import '../../App.css';
import etoile from "../../img/etoilesc.png";
import caps from "../../img/capslooksc.png";


// const Projects = () => {
//     return (
//         <div className="Projects">
//             <h1 className="prh1">Projects</h1>
//             <div className="card">
//                 <div className="card1">
//                     <img className="phetoile" src={etoile} alt="project" />
//                     <h2 className="namep">Etoile</h2>
//                     <button className="vc"><a href="https://github.com/Astbrqeg/Etoile_" className="vc">View Code</a></button>
//                 </div>
//                 <div className="card2">
//                     <img className="phcaps" src={caps} alt="project" />
//                     <h2 className="namep">Caps Look</h2>
//                     <button className="vc"><a href="https://github.com/Astbrqeg/Caps-Look" className="vc">View Code</a></button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Projects;
import React, { useState } from 'react';

function ProjectCard({ imageSrc, projectName, paragraph, codeLink }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="projectImage" src={imageSrc} alt="project" />
            {isHovered && (
                <div className="projectOverlay">
                    <p className="paragraph">{paragraph}</p>
                    <div className="buttonContainer">
                        <button className="viewCode">
                            <a href={codeLink} className="viewCodeLink">View Code</a>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Projects() {
    return (
        <div className="Projects">
            <h1 className="prh1">Projects</h1>
            <div className="projectCards">
                <ProjectCard
                    imageSrc={etoile}
                    paragraph="Etoile: Shop seamlessly for women's care products. Create an account for personalized recommendations, easy checkout, and dedicated support. Elevate your self-care with quality products.          "
                    codeLink="https://github.com/Astbrqeg/Etoile_"
                />
                <ProjectCard
                    imageSrc={caps}
                    paragraph="Caps Look: Streamline project management, track progress, manage worker schedules, and boost productivity. The ultimate tool for efficient project planning and resource utilization."
                    codeLink="https://github.com/Astbrqeg/Caps-Look"
                />
            </div>
        </div>
    );
}



//Etoile: Shop seamlessly for women's care products. Create an account for personalized recommendations, easy checkout, and dedicated support. Elevate your self-care with quality products.

//Caps Look: Streamline project management, track progress, manage worker schedules, and boost productivity. The ultimate tool for efficient project planning and resource utilization.