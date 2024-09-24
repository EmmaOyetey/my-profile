import React, { useEffect, useState } from "react";
import LandingContent from "../../components/LandingContent/LandingContent";
import Nav from "../../components/Nav/Nav";
import Content from "../Content/Content";
import "./Home.scss";

const Home: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [flickerStarted, setFlickerStarted] = useState(false);
  const [flickerDone, setFlickerDone] = useState(false);
  const [showNav, setShowNav] = useState(false); 
  const [showContent, setShowContent] = useState(false); 

  useEffect(() => {
    const flickerStartTimer = setTimeout(() => {
      setFlickerStarted(true); 
    }, 3000);

    const flickerTimer = setTimeout(() => {
      setFlickerDone(true); 
    }, 6000);

    const fadeOutTimer = setTimeout(() => {
      setShowLanding(false); 
    }, 9000);

    const navFadeInTimer = setTimeout(() => {
      setShowNav(true); 
    }, 9500);

    const contentFadeInTimer = setTimeout(() => {
      setShowContent(true); 
    }, 10500);

    return () => {
      clearTimeout(flickerStartTimer);
      clearTimeout(flickerTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(navFadeInTimer);
      clearTimeout(contentFadeInTimer);
    };
  }, []);

  return (
    <div className="home">
      {showLanding ? (
        <div
          className={`landing-container ${
            flickerDone ? "fade-out" : flickerStarted ? "flicker" : ""
          }`}
        >
          <LandingContent />
        </div>
      ) : (
        <>
          {showNav && <Nav />} {/* Nav will fade in via CSS */}
          <div className={`profile ${showContent ? "fade-in-content" : ""}`}>
            {showContent && <Content />} {/* Fade in Content */}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
//...........................
// import React, { useEffect, useState } from "react";
// import LandingContent from "../../components/LandingContent/LandingContent";
// import Nav from "../../components/Nav/Nav";
// import Content from "../Content/Content";
// import "./Home.scss";

// const Home: React.FC = () => {
//   const [showLanding, setShowLanding] = useState(true);
//   const [flickerStarted, setFlickerStarted] = useState(false);
//   const [flickerDone, setFlickerDone] = useState(false);

//   useEffect(() => {
//     const flickerStartTimer = setTimeout(() => {
//       setFlickerStarted(true); // Start flicker after 3 seconds
//     }, 3000);

//     const flickerTimer = setTimeout(() => {
//       setFlickerDone(true); // End flicker after 6 seconds (3s delay + 3s flicker)
//     }, 6000);

//     const fadeOutTimer = setTimeout(() => {
//       setShowLanding(false); // Fade out after flicker finishes
//     }, 9000);

//     return () => {
//       clearTimeout(flickerStartTimer);
//       clearTimeout(flickerTimer);
//       clearTimeout(fadeOutTimer);
//     };
//   }, []);

//   return (
//     <div className="home">
//       {showLanding ? (
//         <div
//           className={`landing-container ${
//             flickerDone ? "fade-out" : flickerStarted ? "flicker" : ""
//           }`}
//         >
//           <LandingContent />
//         </div>
//       ) : (
//         <>
//           <Nav />
//           <div className="profile">
//             <Content />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Home;
