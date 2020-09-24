//a chart that shows daily records of exercise

import React from "react";
import { Link } from 'react-router-dom';

const ExerciseSheet = ({ exercise }) => {
    return (
        <>
            <div className="card">
                <h2>Days You Exercised</h2>
                    <ul>
                        {exercise.map(item => (
                            <li key={item.date + "exercise"}
                            >
                                {item.date}, Exercise? {item.exercise}
                            </li>
                        ))}
                    </ul>
                <Link to="/rest-sheet" className="card-link">Next</Link>
            </div>
        </>
    );
}


export default ExerciseSheet;