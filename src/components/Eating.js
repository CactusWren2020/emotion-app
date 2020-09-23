import React from "react";

const Eating = ({ updateDate, updateEats, addEats }) => {
    return (
        <>
        <form className="card">
            <h2>Override Unhealthy Eating Habit</h2>
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
                        onChange={(e) => updateEats(e.target.value)}></input>   
                <label htmlFor="nos">How many times did you override an unhealthy eating habit today?</label>
            </p>
            <button type="submit"
                    onClick={addEats}
            >Submit</button>
            </form> 
        </>

    )
}

export default Eating;