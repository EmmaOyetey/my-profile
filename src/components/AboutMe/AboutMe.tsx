import React from "react";
import "./AboutMe.scss"; // Optional: Add styles specific to AboutMe

const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
            <p className ="about-me__content">Here is some written content about me.</p>
            <p className = "about-me__blurb">please let me be able to see more blurb here!!!</p>
        </div>
    );
};

export default AboutMe;