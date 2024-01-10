import React from "react";
import '../Navbar/Navbar.css';
import logo from '../../asserts/images/logo.jpg';

const Navbar = () =>{
    return (
        <div className="Navbar">
            <img className='logo' src={logo} alt="logo"></img>
            <span className="libText">
                <span style={{color:'yellow'}}>Elegance</span>Viewer
            </span>
        </div>
    );
}

export default Navbar;