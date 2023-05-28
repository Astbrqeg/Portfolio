import "./Banner.css";
import '../../App.css';
import headerimg from "../../img/header-img.svg";

export const Banner = () =>{

    return(
        <div className="banner">
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
{/* <span className={letterClass}>H</span>
               <span className={`${letterClass} _2`}>i,</span>
                <br/>
                <span className={`${letterClass} _3`}>I</span>
                <span className={`${letterClass} _4`}>'m</span>
                 <Anletters
                 letterClass={letterClass}
                 arrLetters={nameArr}
                 idx={5}/>
               <Anletters
               letterClass={letterClass}
               arrLetters={majorArr}
               idx={11}/>
                */}