import { useState, useEffect } from "react";
import './NavBar.css';
import '../../App.css';
import navIcon1 from "../../img/nav-icon1.svg";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';
import Github from '../../img/nav-icon2.svg'




export const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.addEventListener("scroll", onScroll);
    }, [])


    return (

        <div className="nav" >

            <div id="navbarSupportedContent" className={scrolled ? 'scrolled' : ''}>

                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/fullstackastbrq/"><img src={navIcon1} alt="linkedin" /></a>
                    <a href="https://github.com/Astbrqeg"><img src={Github} alt="linkedin" /></a>

                </div>

                <nav>
                    <ul className="navbar-nav-mr-auto">
                        <li className="nav-item">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                </nav>
                <HashLink to='contact'>
                    <button className="vvd"><span>Let’s Connect</span></button>
                </HashLink>

            </div>

        </div>
    )
}