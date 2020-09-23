import React from "react";

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
            </div>
        </>
    )

}


export default SelfSoothingSheet;