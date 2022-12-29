import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar  navbar-expand-lg bg-dark  mb-4">
        <div className="container d-flex justify-content-between">
            <div className="logo">
                <a className="navbar-brand text-white" href="#">
                Navbar
            </a>
            </div>
            <div className="menu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-white">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Contact</a>
              </li>
            </ul>
            </div>
          
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <div className="d-flex" role="search">
            
            </div>
          </div> */}
        </div>
      </nav>
    );
  }
}

export default Header;
