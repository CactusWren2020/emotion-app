//a chart that shows daily records of asking for help

import React from "react";
import { Link } from 'react-router-dom';

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
                <Link to="/prioritizing-enjoyment-sheet" className="card-link">Next</Link>
            </div>
        </>
    );
}


export default AskingForHelpSheet;