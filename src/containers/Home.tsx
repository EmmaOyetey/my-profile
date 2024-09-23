import React, { useEffect, useState } from "react";
import LandingContent from '../components/LandingContent/LandingContent'; // Adjust the path as needed
import AboutMe from '../components/AboutMe/AboutMe'; // Import the new AboutMe component 
import "./Home.scss";

const Home: React.FC = () => {
    const [showLanding, setShowLanding] = useState(true);
    const [flickerStarted, setFlickerStarted] = useState(false); // Track flicker start
    const [flickerDone, setFlickerDone] = useState(false); // Track flicker completion

    useEffect(() => {
        const flickerStartTimer = setTimeout(() => {
            setFlickerStarted(true); // Start flicker after 3 seconds
        }, 3000);

        const flickerTimer = setTimeout(() => {
            setFlickerDone(true); // End flicker after 6 seconds (3s delay + 3s flicker)
        }, 6000);

        const fadeOutTimer = setTimeout(() => {
            setShowLanding(false); // Fade out after flicker finishes
        }, 9000); // 3s delay + 3s flicker + 3s for fade out

        return () => {
            clearTimeout(flickerStartTimer);
            clearTimeout(flickerTimer);
            clearTimeout(fadeOutTimer);
        };
    }, []);

    return (
        <div className="home">
            {showLanding ? (
                <div className={`landing-container ${flickerDone ? 'fade-out' : flickerStarted ? 'flicker' : ''}`}>
                    <LandingContent />
                </div>
            ) : (
                <AboutMe />
            )}
        </div>
    );
};

export default Home;

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