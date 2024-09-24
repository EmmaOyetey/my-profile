import React from "react";
import "./AboutMe.scss";

const AboutMe: React.FC = () => {
  return (
    <>
    <h1 className = "about__title">About Me</h1>
    <div className="about__content">
            <p className ="about__item">
            People-focused and data-driven; prioritising relationships and empathy while making decisions based on evidence and data.
            </p>
            <p className ="about__item">
            Creative, honest, and determined; valueing opportunities to work within organisations with a strong culture of collaboration and learning  
            </p>
            <p className ="about__item">
            Committed to building trusted relationships; embracing diversity and inclusion 
            </p>
            <p className ="about__item">
            Passionate and expereinced in education, community action, and Human-centred service design
            </p>
        </div>
    </>
  );
};

export default AboutMe;

//import "./AboutMe.scss"; // Optional: Add styles specific to AboutMe

// const AboutMe: React.FC = () => {
//     return (
//         <div className="about-me">
//             <p className ="about-me__content">Here is some written content about me.</p>
//             <p className = "about-me__blurb">please let me be able to see more blurb here!!!</p>
//         </div>
//     );
// };

// export default AboutMe;