//a chart that shows daily records of prioritizing enjoyment

import React from "react";
import { Link } from 'react-router-dom';

const PrioritizingEnjoymentSheet = ({ enjoys }) => {
    return (
        <>
            <div className="card">
                <h2>Times you prioritized enjoyment</h2>
                {enjoys.length === 0 && <p><i>no records yet</i></p>}
                    <ul>
                        {enjoys.map(item => (
                            <li key={item.date + "enjoys"}
                            >
                                {item.date}, Nos: {item.numEnjoys}
                            </li>
                        ))}
                    </ul>
                <Link to="/eating-sheet" className="card-link">Next</Link>
            </div>
        </>
    );
}


export default PrioritizingEnjoymentSheet;