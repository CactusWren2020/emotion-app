//a chart that shows the daily records

import React from "react";

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
            </div>
        </>
    )
}

export default SelfDisciplineSheet;