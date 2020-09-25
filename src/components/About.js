import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="card">
                    <h2>About Emotion App</h2>
                    <p>
                        Do you feel dissatisfied with your life? Lonely? Guilty? Like an outsider? In a word, empty?
                    </p>
                    <p>
                        You may be suffering from a condition called Childhood Emotional Neglect. This empty feeling is caused by not getting enough or the right sort of parental interaction during childhood.
                    </p>
                    <Link to="/quiz" className="card-link">Take a quiz to see if you have Childhood Emotional Neglect</Link>
                    <p>
                        However, the condition can be treated. The basic method is to undergo a series of exercises and changes over time. These activities are designed to improve your emotional awareness and treat other common issues associated with Childhood Emotional Neglect.  
                    </p>
                    <Link to="/how-to-use" className="card-link">Next</Link>

                </div>
            </div>
        </div>
    );
}

export default About;