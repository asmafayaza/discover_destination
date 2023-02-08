import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div className="Title">
            <nav id="navbar">
                <div className="nav-wrapper">
                    <div className="logo">
                        <img
                            src={require("../../Assets/discover.png")}
                            height={100}
                            width={100}
                            alt="Web"
                        />
                    </div>

                    <ul id="menu">
                        <li className="list">
                            <a className="link" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="list">
                            <a className="link" href="#services">
                                Hotels
                            </a>
                        </li>
                        <li className="list">
                            <a className="link" href="#about">
                                About
                            </a>
                        </li>
                        <li className="list">
                            <a className="link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="menuIcon">
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>

            <div className="overlay-menu">
                <ul id="menu">
                    <li className="list">
                        <a className="link" href="#home">
                            Home
                        </a>
                    </li>
                    <li className="list">
                        <a className="link" href="#services">
                            Hotels
                        </a>
                    </li>
                    <li className="list">
                        <a className="link" href="#about">
                            About
                        </a>
                    </li>
                    <li className="list">
                        <a className="link" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
