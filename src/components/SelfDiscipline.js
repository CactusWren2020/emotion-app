//a form to get records of self-discipline

import React, { useState, useRef, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom'; 

const SelfDiscipline = (props) => {
    // state = { redirect: null }
    const [redirect, setRedirect] = useState(null);
    // componentDidUpdate(prevProps) {
    //     if (prevProps.redirect !== this.props.redirect) {
    //         this.setState({ redirect: this.props.redirect})
    //     }
    // }
    
    const refHook = useRef(props);

    useEffect((props, redirect ) => {
        if (refHook.redirect !== redirect) {
            setRedirect(props.redirect);
        }
        }, []);

        if (redirect) {
            return <Redirect to={redirect}/>
        }
        return (
            <>
                <form className="card">  
                    <h2>Record three instances of exercising self-discipline</h2>
                    <p>
                        <input type="date" 
                                name="date"
                                
                                onChange={(e) => props.updateDate(e.target.value)}
                        />
                        <label htmlFor="date">Date</label>
                    </p>
                    <p>
                        <select name="timeOfDay" onChange={(e) => props.updateTime(e.target.selectedIndex)}>
                            <option disabled value="selected">Select One</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                        </select>

                        <label htmlFor="timeOfDay">Time of Day</label>
                    </p>
                    <p>
                        <textarea name="disciplineEntry"
                                 onChange={(e) => props.updateDiscipline(e.target.value)}>
                        </textarea>
                        <label htmlFor="disciplineEntry">Record when you've exercised self-discipline</label>
                    </p>
                    <button type="submit"
                            onClick={props.addDiscipline}>Submit</button>
                    <Link to="/self-soothing" className="card-link">Next</Link>
                            </form>
                   
            </>
            );
    }


export default SelfDiscipline;
