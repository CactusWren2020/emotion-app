import React from "react";
import { Link, Redirect } from 'react-router-dom';

const SayingNo = ({ updateDate, updateNos, addNos, redirect }) => {
    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (
        
        <>
        <form className="card">
            <h2>Saying No</h2>
            <p>
                <input type="date"
                        name="date"
                        onChange={(e) => updateDate(e.target.value)} 
                ></input>
                <label htmlFor="date">Date</label>
                </p>
            <p>
                <input type="number" 
                        name="nos"
                        onChange={(e) => updateNos(e.target.value)}></input>   
                <label htmlFor="nos">How many times did you say "no" today?</label>
            </p>
            <button type="submit"
                    onClick={addNos}
            >Submit</button>
            <Link to="/asking-for-help" className="card-link">Next</Link>
            </form> 
        </>

    )
}

export default SayingNo;