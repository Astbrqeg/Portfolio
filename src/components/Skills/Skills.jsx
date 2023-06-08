import "./Skills.css";
import '../../App.css';
import Slider from "./Slider";


 const Skills = () =>{
    return(
        <div className="Skills" >
            <div className="rectangle" id="skills">
                <h1 className="skh1">Skills</h1>
                <div className="slider">
                    <Slider/>
                </div>
            </div>
        </div>
    )
}

export default Skills;