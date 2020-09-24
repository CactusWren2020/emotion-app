import React from "react";
import { Link } from 'react-router-dom';

const SelfSoothingSheet = ({ soothes }) => {
    return (
        <>
            <div className="card">
                <h2>Things that help soothe you</h2>
                    <ul>
                        {soothes.map( item => {
                            return <li key={`soothe ${item.date}`}>{item.date}, {item.soothe} </li>
                        })}    
                    </ul>
                <Link to="/feelings-sheet" className="card-link">See your sheets</Link>
            </div>
        </>
    )

}


export default SelfSoothingSheet;