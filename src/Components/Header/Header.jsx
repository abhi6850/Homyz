import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'


export default function Header() {
    const [menuOpned, setMenuOpened]= useState(false);
    const getMenuStyles = (menuOpned)=> {
        if(document.documentElement.clientWidth <=800) {
            return {right: !menuOpned && "-100%"}
        }
    }
    return (
        <section className="h-wrapper">
            <div className="h-container flexCenter paddings innerWidth">
                <img src="./logo.png" alt="Logo" witdh={100} />
                
                <div className="h-menu flexCenter" style={getMenuStyles(menuOpned)}>
                    <a href="#residency-section" className="forScale">Residencies</a>
                    <a href="#value-section" className="forScale">Our Value</a>
                    <a href="#contact-section" className="forScale">Contact Us</a>
                    <a href="#getstarted-section" className="forScale">Get Started</a>
                    <button className="button"><a href="/">Contact</a></button>
                </div>
                
                <div className="menu-icon" onClick={()=> setMenuOpened((prev)=>!prev)}>
                    <BiMenuAltRight size={30} />
                </div>

            </div>

        </section>
    )
}
