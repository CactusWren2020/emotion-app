import React from 'react';
import { Link } from 'react-router-dom';

const HowToUse = () => {
    return (
        <div className="about">
            
                <div className="card">
                    <h2>How to Use Emotion App</h2>
                    <p>
                        Emotion App has two main functions--forms and sheets. Forms are where you record the results of your exercises and activities. Sheets keep records so you can spot trends and look for signs of improvement. 
                    </p>
                    <h3>Forms</h3>
                     <p>
                        Forms come in several different types. Enter the date, the time of day, and answer the questions to the best of your ability. Click Submit to save the data. Then, click Next to go on to the next Form.
                     </p>
                     <h3>Sheets</h3>
                     <p>
                        Sheets are simply records of data you entered in the forms. You can quickly review them by clicking Next to get to the next one.
                     </p>
                     <h3>Commit to a better you</h3>
                     <p>
                        If you want to improve, you need to put in the work. Commit to using Emotion App every day for a month. If you see positive changes, then commit to a year. Who knows how far you can go when you commit to taking care of yourself?
                     </p>
                     <Link to="/feelings" className="card-link">Get Started with Your First Form</Link>
                </div>
           
        </div>
    );
}

export default HowToUse;