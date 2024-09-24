import React from "react";
import "./Content.scss";
import AboutMe from "../AboutMe/AboutMe";

const Content: React.FC = () => {
  return (
    <>
        <div className="content">
            <AboutMe />
        </div>
        
        <div className="content">
            <AboutMe />
        </div>
    </>
  );
};

export default Content;