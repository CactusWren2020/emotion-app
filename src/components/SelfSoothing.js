import React from "react";
import { Link, Redirect } from 'react-router-dom';

const SelfSoothing = ({ updateDate, updateSoothe, addSoothe, redirect }) => {
    if (redirect) {
        return <Redirect to={redirect}/>
    }
    return (
        <>
            <form className="card">
                <h2>What works to soothe you?</h2>
                <p>
                    <input type="date" 
                        name="date"
                        onChange={(e) => updateDate(e.target.value)}
                    ></input>
                    <label htmlFor="date">Date</label>
                </p>
                <p>
                    <textarea name="text"
                            onChange={(e) => updateSoothe(e.target.value)}></textarea>
                    <label htmlFor="text">Things that help soothe you</label>
                </p>
                <button type="submit"
                        onClick={addSoothe}>Submit</button>
                <Link to="/forms" className="card-link">Next</Link>
            </form>
        </>
    )
}

export default SelfSoothing;