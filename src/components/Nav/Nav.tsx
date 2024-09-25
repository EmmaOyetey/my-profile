import "./Nav.scss";
import React from 'react';
import myImage from "../../assets/images/me-cut-up4.png";
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
      <nav className="nav">
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