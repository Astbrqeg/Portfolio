import "./Banner.css";
import '../../App.css';
import headerimg from "../../img/header-img.svg";

export const Banner = () =>{

    return(
        <div className="banner" id="home">
            <div className="paragraph">
               <h1>Hi,<br/>I'm Astbrq
               <br/>
               <p className="major">Full Stack Developer</p>
               </h1>

               <h2>Frontend Developer / Backend Developer</h2>

            </div>
                <div className="imghead">
                  <img src={headerimg} alt="Header Img"/>
                </div>
        </div>
    )
}
