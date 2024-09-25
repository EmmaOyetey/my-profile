import React from "react";
import "../Page.scss";
//import projects from "../../data/Digital";
//import DigitalProjectCard from "../../components/DigitalProjectCard/DigitalProjectCard";
import Nav from "../../components/Nav/Nav";
import Content from "../../containers/Content/DigitalContent";

const Digital: React.FC = () => {
  return (
    <>
    <Nav />
    <div className="profile">
        <h1>just writing test content here</h1>
    <Content />
    </div>
    <footer className="footer">
                <div className="footer__content">
                    {/* Footer content, links, or text */}
                    © 2024 Emma's Digital Page
                </div>
            </footer>
    </>
  );
};

export default Digital;

// import "./Digital.scss";
// import projects from "../../data/Digital";
// import DigitalProjectCard from "../../components/DigitalProjectCard/DigitalProjectCard";

// const Digital: React.FC = () => {
//   return (
//     <div className="digital">
//       <div className="digital__projects-container">
//         {projects.map((project, index) => (
//           <div className="digital__project-card" key={index}>
//             <DigitalProjectCard project={project} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Digital;
