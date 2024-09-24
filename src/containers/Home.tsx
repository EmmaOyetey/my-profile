import React, { useEffect, useState } from "react";
import LandingContent from '../components/LandingContent/LandingContent'; 
import Nav from '../components/Nav/Nav';
import Content from '../components/Content/Content';
import "./Home.scss";

const Home: React.FC = () => {
    const [showLanding, setShowLanding] = useState(true);
    const [flickerStarted, setFlickerStarted] = useState(false); 
    const [flickerDone, setFlickerDone] = useState(false); 

    useEffect(() => {
        const flickerStartTimer = setTimeout(() => {
            setFlickerStarted(true); // Start flicker after 3 seconds
        }, 3000);

        const flickerTimer = setTimeout(() => {
            setFlickerDone(true); // End flicker after 6 seconds (3s delay + 3s flicker)
        }, 6000);

        const fadeOutTimer = setTimeout(() => {
            setShowLanding(false); // Fade out after flicker finishes
        }, 9000);

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
                <>
                    <Nav />
                    <div className="profile">
                        <Content />
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;

