import "./Nav.scss";
import React from 'react';
import myImage from "../../assets/images/me-cut-up4.png";

const Nav: React.FC = () => {
    return (
      <nav className="nav">
        <h1 className="nav__name">Emma Oyetey</h1>
        <div className="nav__image-container">
          <img className="nav__image" src={myImage} alt="Image of Emma" />
        </div>
        <div className="nav__item-container">
            <a className="nav__item" href="#what">Experience</a>
            <a className="nav__item" href="#who">People</a>
            <a className="nav__item" href="contact">Digital</a>
            <a className="nav__item" href="contact">Contact</a>
        </div>
      </nav>
    );
  };
  
  export default Nav;