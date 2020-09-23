//a chart that shows daily records of asking for help

import React from "react";

const AskingForHelpSheet = ({ asks }) => {
    return (
        <>
            <div className="card">
                <h2>How Many Times You Asked for Help</h2>
                    <ul>
                        {asks.map(item => (
                            <li key={item.date + "ask"}
                            >
                                {item.date}, Nos: {item.numAsks}
                            </li>
                        ))}
                    </ul>
            </div>
        </>
    );
}


export default AskingForHelpSheet;