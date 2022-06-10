import React from 'react';
import './Navbar.css' 
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Tuan Tran</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: "none"}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experence</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className="button n-button">Contact with us</button>
            </div>
        </div>
    );
};

export default Navbar;
