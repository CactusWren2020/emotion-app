//a chart that shows daily records of prioritizing enjoyment

import React from "react";

const PrioritizingEnjoymentSheet = ({ enjoys }) => {
    return (
        <>
            <div className="card">
                <h2>Times you prioritized enjoyment</h2>
                    <ul>
                        {enjoys.map(item => (
                            <li key={item.date + "enjoys"}
                            >
                                {item.date}, Nos: {item.numEnjoys}
                            </li>
                        ))}
                    </ul>
            </div>
        </>
    );
}


export default PrioritizingEnjoymentSheet;