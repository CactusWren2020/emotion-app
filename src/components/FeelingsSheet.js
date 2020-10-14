//a chart that shows the daily records

import React from "react";
import { Link } from 'react-router-dom';

const FeelingsSheet = ({ records }) => {
    return (
        <>
            <div className="card">
                <h2>Feelings record</h2>
                    {records.length === 0 && <p><i>no records yet</i></p>}
                    <ul>
                        {records.map(record => (
                            <li key={record.date + record.time}>
                                {`${record.date}, ${record.time}, ${record.record}`}    
                            </li>
                        ))}
                    </ul>
                <Link to="/likes-and-dislikes-sheet" className="card-link">Next</Link>
            </div>
        </>
    )
}

export default FeelingsSheet;