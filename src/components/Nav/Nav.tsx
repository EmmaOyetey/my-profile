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
        <ul className="nav__item-container">
          <li className="nav__item">
            <a href="#what">Expereince</a>
          </li>
          <li className="nav__item">
            <a href="#who">People</a>
          </li>
          <li className="nav__item">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;