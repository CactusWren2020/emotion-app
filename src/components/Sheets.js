import React from 'react';
import { BrowseRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Sheets = () => {

    
        return (
            <>
                <div className="sheet">
                    
                        <div className="card">
                            <Link to="/feelings-sheet" className="card-link">Feelings Sheet</Link>
                            <Link to="/likes-and-dislikes-sheet" className="card-link">Likes and Dislikes Sheet</Link>
                            <Link to="/saying-no-sheet" className="card-link">Saying No Sheet</Link>
                            <Link to="/asking-for-help-sheet" className="card-link">Asking for Help Sheet</Link>
                            <Link to="/prioritizing-enjoyment-sheet" className="card-link">Prioritizing Enjoyment Sheet</Link>
                            <Link to="/eating-sheet" className="card-link">Eating Healthy Sheet</Link> 
                            <Link to="/exercise-sheet" className="card-link">Exercise Sheet</Link>
                            <Link to="/rest-sheet" className="card-link">Rest and Relaxation Sheet</Link>
                            <Link to="/self-discipline-sheet" className="card-link">Self Discipline Sheet</Link>
                            <Link to="/self-soothing-sheet" className="card-link">Self Soothing Sheet</Link>
                  
                    </div>
                </div>
            </>
        );
    }
 

export default Sheets;