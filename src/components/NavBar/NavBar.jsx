import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './NavBar.css';
import '../../App.css';
import navIcon1 from "../../img/nav-icon1.svg";
import { HashLink } from 'react-router-hash-link';



export const NavBar = () => {

    const [activeLink, setActiveLink] = useState("home");
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

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (

        <div className="nav" >


            <div id="navbarSupportedContent" className={scrolled ? 'scrolled' : ''}>

                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/fullstackastbrq/"><img src={navIcon1} alt="" /></a>
                </div>
                <nav>
                    <ul className="navbar-nav-mr-auto">
                        <li className="nav-item">
                            <a className='nav-link' onClick={() => onUpdateActiveLink('home')} href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' onClick={() => onUpdateActiveLink('kills')} href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' onClick={() => onUpdateActiveLink('projects')} href="#">Projects</a>
                        </li>
                    </ul>

                </nav>

                <HashLink to='#connect'>
                    <button className="vvd"><span>Let’s Connect</span></button>
                </HashLink>

            </div>

        </div>
    )
}