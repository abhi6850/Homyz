import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
            <img src="./logo2.png" alt="Logo2" width={120}/>
            <span className="secondaryText">
                Our Vision is to make all people <br/>
                the best place to live for them.
            </span>
        </div>
        <div className="f-right flexColStart">
            <span className="primaryText">Information</span>
            <span className="secondaryText">Silvassa, D&NH</span>
            <div className="f-menu flexCenter">
                <a href="/">Property</a>
                <a href="/">Services</a>
                <a href="/">Product</a>
                <a href="/">About Us</a>
                {/*<span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About Us</span>*/}
            </div>
        </div>
    </div>
  )
}
