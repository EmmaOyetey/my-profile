import "./Nav.scss";
import React from 'react';
import myImage from "../../assets/images/me-cut-up4.png";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const location = useLocation();
  const isDigitalPage = location.pathname === "/digital";

    return (
      <nav className={`nav ${isDigitalPage ? "no-animation" : ""}`}> 
        <h2 className="nav__name">Emma Oyetey</h2>
        <div className="nav__image-container">
          <img className="nav__image" src={myImage} alt="Image of Emma" />
        </div>
        <div className="nav__item-container">
            <a className="nav__item" href="#what">Experience</a>
            <a className="nav__item" href="#who">People</a>
            <Link className="nav__item" to="/digital">Digital</Link>
            <a className="nav__item" href="contact">Connect</a>
        </div>
      </nav>
    );
  };
  
  export default Nav;