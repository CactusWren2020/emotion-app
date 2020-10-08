import React from 'react';
import { Link } from 'react-router-dom';

const Sheets = ({ checkedForms }) => {

    
        return (
            <>
                <div className="sheet">
                    
                        <div className="card">
                        {(checkedForms.indexOf("feelings") !== -1)
                            &&
                            <Link to="/feelings-sheet" className="card-link">Feelings Sheet</Link>                    
                            }    
                        {(checkedForms.indexOf("likes and dislikes") !== -1)
                            &&
                            <Link to="/likes-and-dislikes-sheet" className="card-link">Likes and Dislikes Sheet</Link>
                        }
                        {(checkedForms.indexOf("saying no") !== -1)
                            && 
                            <Link to="/saying-no-sheet" className="card-link">Saying No Sheet</Link>
                        }
                        {(checkedForms.indexOf("asking for help") !== -1)
                            &&
                            <Link to="/asking-for-help-sheet" className="card-link">Asking for Help Sheet</Link>
                        }
                        {(checkedForms.indexOf("prioritizing enjoyment") !== -1)
                            &&
                            <Link to="/prioritizing-enjoyment-sheet" className="card-link">Prioritizing Enjoyment Sheet</Link>
                        }                                
                        {(checkedForms.indexOf("eating healthy") !== -1)
                            &&
                            <Link to="/eating-sheet" className="card-link">Eating Healthy Sheet</Link>
                        }
                        {(checkedForms.indexOf("exercise") !== -1)
                            &&
                            <Link to="/exercise-sheet" className="card-link">Exercise Sheet</Link>
                        }
                        {(checkedForms.indexOf("rest and relaxation") !== -1)
                            &&
                            <Link to="/rest-sheet" className="card-link">Rest and Relaxation Sheet</Link>
                        }
                        {(checkedForms.indexOf("self-discipline") !== -1)
                            &&
                            <Link to="/self-discipline-sheet" className="card-link">Self Discipline Sheet</Link>
                        }
                        {(checkedForms.indexOf("self-soothing") !== -1)
                            &&
                            <Link to="/self-soothing-sheet" className="card-link">Self Soothing Sheet</Link> 
                        }    
                            
                            
                            
                  
                    </div>
                </div>
            </>
        );
    }
 

export default Sheets;