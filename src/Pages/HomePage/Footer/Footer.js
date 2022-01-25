import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
               <footer>
                    <ul className='social-icon'>
                        <li><NavLink to="/"><FaFacebook></FaFacebook></NavLink></li>
                        <li><NavLink to="/"><FaTwitter></FaTwitter></NavLink></li>
                        <li><NavLink to="/"><FaLinkedinIn></FaLinkedinIn></NavLink></li>
                        <li><NavLink to="/"><FaInstagram></FaInstagram></NavLink></li>
                    </ul>
                    <ul className='menu'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/features">Our Features</NavLink></li>
                        <li><NavLink to="/contact">Contact </NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/">Blog</NavLink></li>
                    </ul>
                    <p>copyright@sohelrana | All Right Reserved</p>
               </footer>
        </div>
    );
};

export default Footer;