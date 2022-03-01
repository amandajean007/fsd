
import React from 'react';
import "./Navbar.css"

function NavBar({ currentPage, handlePageChange}) {
    return (
        <div className="nav">
            <ul className="nav-bar">
                <li className="nav-item">
                    <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === "Home" ? 'nav-link active' : 'nav-link'}>
                        Frozen Smoke
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === "Projects" ? 'nav-link active' : 'nav-link'}>
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>
                        Contact Me
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default NavBar;