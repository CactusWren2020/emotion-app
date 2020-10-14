//a chart that shows daily records of overriding an unhealthy eating habit

import React from "react";
import { Link } from 'react-router-dom';

const EatingSheet = ({ eats }) => {
    return (
        <>
        <div className="card">
            <h2>How Many Times You Overrode Unhealthy Eating Habit</h2>
            {eats.length === 0 && <p><i>no records yet</i></p>}
            <ul>
                {eats.map(item => (
                    <li key={item.date + "eats"}
                    >
                        {item.date}, Nos: {item.numEats}
                    </li>
                ))}
            </ul>
            <Link to="/exercise-sheet" className="card-link">Next</Link>
            </div>
        </>
    );
}


export default EatingSheet;