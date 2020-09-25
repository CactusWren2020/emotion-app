import React from "react";
import { Link, Redirect } from 'react-router-dom';

const AskingForHelp = ({ updateDate, updateAsks, addAsks, redirect }) => {
    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (
        <>
        <form className="card">
            <h2>Asking for Help</h2>
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
                        onChange={(e) => updateAsks(e.target.value)}></input>   
                <label htmlFor="nos">How many times did you ask for help today?</label>
            </p>
            <button type="submit"
                    onClick={addAsks}
            >Submit</button>
            <Link to="/prioritizing-enjoyment" className="card-link">Next</Link>
            </form> 
        </>

    )
}

export default AskingForHelp;