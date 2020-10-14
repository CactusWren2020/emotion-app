//a chart that shows daily records of rest/relaxation

import React from "react";
import { Link } from 'react-router-dom';

const RestAndRelaxationSheet = ({ rest }) => {
    return (
        <>
            <div className="card">
            <h2>Did you rest/relax today?</h2>
            {rest.length === 0 && <p><i>no records yet</i></p>}
            <ul>
                {rest.map(item => (
                    <li key={item.date + "rest"}
                    >
                        {item.date && ", Rests:"} {item.rest}
                    </li>
                ))}
            </ul>
            <Link to="/self-discipline-sheet" className="card-link">Next</Link>
            </div>
        </>
    );
}


export default RestAndRelaxationSheet;