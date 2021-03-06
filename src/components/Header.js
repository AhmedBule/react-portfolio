import React from 'react';
import {Link} from "react-router-dom";
function Header() {
    return (<div>
        <nav className="navbar navbar-expand-lg ">
            <Link className="navbar-brand" to="/Aboutme">Ahmed Bule</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Aboutme">AboutMe</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>)

}
export default Header;
