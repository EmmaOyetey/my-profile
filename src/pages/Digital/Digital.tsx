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
    <Content />
    </div>
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
