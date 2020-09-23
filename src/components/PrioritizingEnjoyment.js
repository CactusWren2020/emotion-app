import React from "react";

const PrioritizingEnjoyment = ({ updateDate, updateEnjoys, addEnjoys }) => {
    return (
        <>
        <form className="card">
            <h2>Prioritizing Enjoyment</h2>
            <p>
                <input type="date"
                        name="date"
                        onChange={(e) => updateDate(e.target.value)} 
                ></input>
                <label htmlFor="date">Date</label>
                </p>
            <p>
                <input type="number" 
                        name="asks"
                        onChange={(e) => updateEnjoys(e.target.value)}></input>   
                <label htmlFor="nos">How many times did you prioritize enjoyment today?</label>
            </p>
            <button type="submit"
                    onClick={addEnjoys}
            >Submit</button>
            </form> 
        </>

    )
}

export default PrioritizingEnjoyment;