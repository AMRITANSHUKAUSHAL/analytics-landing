// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img src="image/Dot.png" alt="Logo" />
                    Untitled UI
                </div>
                <div className="navbar-links">
                    <a href="#Home">Home</a>
                    <a href="#products">Products <i className='fas fa-chevron-down'></i></a>
                    <a href="#resources">Resources <i className='fas fa-chevron-down'></i></a>
                    <a href="#pricing">Pricing</a>
                </div>
            </div>
            <div className="navbar-profile">
                <img src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1hh5oq7T1U1CYugO1M80lU0zpZXMlB7rxRlgf0UumSmgsA9Yire3Vv~f4QnjQNYNAgZ3MtaA7pJ-soLawnoarA6L6m1bEDQGug4Pdh8~IpIufjoh4YX3rG5k8MYFhqwhwD-n1wOvdgKGWcnJTGSZM4p1vqR0-9nGCafdo8lBBb15s2uys5BBs5XeKikCXy8PCHGxsQzNTFj8r~pWS~uhChZbtJpEFJAh2aPWq~NDJ5D9ct4jgmmrOhOFFn1D~xKLK6J~rQRCmaauo4ILuNQHLYfnozbvtgmxzKeHsj4XJ9CHIiOiIGTR1en6ajRLyEq3Wm8-DF5zzmLdi811j2~EA__" alt="Profile" />
            </div>
        </nav>
    );
}

export default Navbar;
