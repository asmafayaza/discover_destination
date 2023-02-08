import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <nav id="navbar" className="nav">
                <div className="nav-wrapper">
                    <div className="logo">
                        <img
                            className="img"
                            src={require("../../Assets/discover.png")}
                            height={100}
                            width={100}
                            alt="Web"
                        />
                    </div>
                    <ul id="menu">
                        <li className="list">
                            <a className="link" href="#home">
                                Terms
                            </a>
                        </li>
                        <li className="list">
                            <a className="link" href="#services">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="list">
                            <a className="link" href="#about">
                                Cookie Settings
                            </a>
                        </li>
                        <li className="list">
                            <a className="link" href="#contact">
                                Site Map
                            </a>
                        </li>
                        <li className="list">
                            <a className="link" href="#contact">
                                Accessibility Statement
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul id="menu">
                <li className="list">
                    <a className="link" href="#home">
                        Terms
                    </a>
                </li>
                <li className="list">
                    <a className="link" href="#services">
                        Privacy Policy
                    </a>
                </li>
                <li className="list">
                    <a className="link" href="#about">
                        Cookie Settings
                    </a>
                </li>
                <li className="list">
                    <a className="link" href="#contact">
                        Site Map
                    </a>
                </li>
                <li className="list">
                    <a className="link" href="#contact">
                        Accessibility Statement
                    </a>
                </li>
            </ul>
        </div>
    );
}
