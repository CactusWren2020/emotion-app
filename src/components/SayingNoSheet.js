//a chart that shows daily records of "no"

import React from "react";

const SayingNoSheet = ({ nos }) => {
    return (
        <>
            <div className="card">
            <h2>How many times you said no today</h2>
            <ul>
                {nos.map(item => (
                    <li key={item.date + "no"}
                    >
                        {item.date}, Nos: {item.numNos}
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}


export default SayingNoSheet;