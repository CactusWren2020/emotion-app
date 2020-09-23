//a chart that shows daily records of overriding an unhealthy eating habit

import React from "react";

const EatingSheet = ({ eats }) => {
    return (
        <>
        <div className="card">
            <h2>How Many Times You Overrode Unhealthy Eating Habit</h2>
            <ul>
                {eats.map(item => (
                    <li key={item.date + "eats"}
                    >
                        {item.date}, Nos: {item.numEats}
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}


export default EatingSheet;