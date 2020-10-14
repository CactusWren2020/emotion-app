//a chart that shows daily records of "no"

import React from "react";
import { Link } from 'react-router-dom';

const SayingNoSheet = ({ nos }) => {
    return (
        <>
            <div className="card">
            <h2>How many times you said no today</h2>
            {nos.length === 0 && <p><i>no records yet</i></p>}
            <ul>
                {nos.map(item => (
                    <li key={item.date + "no"}
                    >
                        {item.date}, Nos: {item.numNos}
                    </li>
                ))}
            </ul>
            <Link to="/asking-for-help-sheet" className="card-link">Next</Link>
            </div>
        </>
    );
}


export default SayingNoSheet;