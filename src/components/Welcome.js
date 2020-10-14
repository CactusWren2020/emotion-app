import React from 'react';
import { useState, useEffect } from 'react';
import face from '../resources/face-3189805_1920.jpg';

const Welcome = () =>{

    const [showWelcome, setShowWelcome] = useState(true);
    const [showStart, setShowStart] = useState(false);
    const [didNotShowTitle, setDidNotShowTitle] = useState(true);

    useEffect(() => {
        if (didNotShowTitle) {
        setTimeout(() => {
            setShowWelcome(false);
            setShowStart(true);
            setDidNotShowTitle(false);
           }, 2500);
        } else {
            setTimeout(() =>{
                setShowWelcome(false);
                setShowStart(false);
            }, 2500)
        }
    });

    return (        
        <div className="card">
            <div className="welcome-header">
                {showWelcome && <h2>Welcome to Emotion App</h2>}
                {showStart && <h2>Start your journey with the About tab</h2>}
            </div>
            <img src={face} alt="face" className="welcome"/>
        </div>
    );
}

export { Welcome };
