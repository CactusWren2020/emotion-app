//a chart that shows the daily records

import React from "react";
import { Link } from 'react-router-dom';

const SelfDisciplineSheet = ({ disciplines }) => {
    return (
        <>
            <div className="card">
                <h2>Self-Discipline Record</h2>
                    <ul>
                        {disciplines.map(record => (
                            <li key={record.date + record.time}>
                                {`${record.date}, ${record.time}, ${record.discipline}`}    
                            </li>
                        ))}
                    </ul>
                <Link to="/self-soothing-sheet" className="card-link">Next</Link>
            </div>
        </>
    )
}

export default SelfDisciplineSheet;