//a chart that shows the daily records

import React from "react";

const FeelingsSheet = ({ records }) => {
    return (
        <>
            <ul>
                {records.map(record => (
                    <li key={record.date + record.time}>
                        {`${record.date}, ${record.time}, ${record.record}`}    
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FeelingsSheet;