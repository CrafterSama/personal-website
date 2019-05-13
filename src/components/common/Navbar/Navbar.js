import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-menu fixed-top bg-dark">
                <div className="navbar-menu-collapse">
                    <ul className="navbar-menu-items">
                        <a className="navbar-logo navbar-item cs-logo animated delay-600ms fadeInUp" href="/">CS</a>
                        <li className="navbar-item animated delay-800ms fadeInUp">
                            <a className="navbar-link disabled" href="#about-me">About</a>
                        </li>
                        <li className="navbar-item animated delay-1s fadeInUp">
                            <a className="navbar-link disabled" href="#work-experience">Experience</a>
                        </li>
                        <li className="navbar-item animated delay-1dot2s fadeInUp">
                            <a className="navbar-link disabled" href="#skills">Skills</a>
                        </li>
                        {/* <li className="navbar-item">
                            <a className="navbar-link disabled" href="{#}">Works</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link disabled" href="{#}">Education</a>
                        </li> */}
                        <li className="navbar-item animated delay-1dot4s fadeInUp">
                            <a className="navbar-link disabled" href="#contact-me">Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;