import React from 'react';
import { BrowseRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Forms = () => {

    
        return (
            <>
                <div className="forms">
                    <div className="card">
                        <Link to="/feelings" className="card-link">Feelings</Link>
                        <Link to="/likes-and-dislikes" className="card-link">Likes and Dislikes</Link>
                        <Link to="/saying-no" className="card-link">Saying No</Link>
                        <Link to="/asking-for-help" className="card-link">Asking for Help</Link>
                        <Link to="/prioritizing-enjoyment" className="card-link">Prioritizing Enjoyment</Link>
                        <Link to="/eating" className="card-link">Eating Healthy</Link>
                        <Link to="/exercise" className="card-link">Exercise</Link>
                        <Link to="/rest" className="card-link">Rest and Relaxation</Link>
                        <Link to="/self-discipline" className="card-link">Self Discipline</Link>
                        <Link to="self-soothing" className="card-link">Self Soothing</Link>
                    </div>
                </div>
            </>
        );
    }
 

export default Forms;