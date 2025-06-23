import { useState } from "react";

function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav id="navmenu" className={`navmenu ${isOpen ? 'navmenu-active' : ''}`}>
            <ul className="navmenu-list d-flex justify-content-center align-items-center" onClick={toggleMenu}>
                <li><a href="#hero" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={toggleMenu}></i>
        </nav>
    );
}


export default NavMenu