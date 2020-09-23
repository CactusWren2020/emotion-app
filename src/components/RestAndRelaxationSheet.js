//a chart that shows daily records of rest/relaxation

import React from "react";

const RestAndRelaxationSheet = ({ rest }) => {
    return (
        <>
            <div className="card">
            <h2>Did you rest/relax today?</h2>
            <ul>
                {rest.map(item => (
                    <li key={item.date + "rest"}
                    >
                        {item.date}, Rests: {item.rest}
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}


export default RestAndRelaxationSheet;