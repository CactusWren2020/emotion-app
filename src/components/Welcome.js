import React from 'react';
import face from '../resources/face-3189805_1920.jpg';
const Welcome = () =>{

    return (        
        <div className="card">
            <h2>Welcome to Emotion App</h2>
            <img src={face} alt="face" className="welcome"/>
        </div>
    );
}

export { Welcome };
