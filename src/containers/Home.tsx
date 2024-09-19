import "./Home.scss";

const LandingContent: React.FC = () => {
    return (
      <div className = "home">
        <h1 className = "name">Emma Oyetey</h1>
      </div>
    );
  };
  
  export default LandingContent;

// import React, { useEffect, useState } from "react";
// import LandingPage from '../components/LandingContent/LandingContent'; // Adjust the path as needed
// import AboutMe from '../components/AboutMe/AboutMe'; // Import the new AboutMe component
// import "./Home.scss";

// const Home: React.FC = () => {
//     const [showLanding, setShowLanding] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowLanding(false);
//         }, 3000); // 30 seconds

//         return () => clearTimeout(timer); // Cleanup the timer on unmount
//     }, []);

//     return (
//         <div className="home">
//             {showLanding ? (
//                 <LandingPage />
//             ) : (
//                 <AboutMe /> // Replace with the new AboutMe component
//             )}
//         </div>
//     );
// };

// export default Home;  