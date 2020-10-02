import React from 'react';
import {  Link } from 'react-router-dom';

const Forms = ({ checkedForms }) => {

    
        return (
            <>
                <div className="forms">
                    <div className="card">
                        {(checkedForms.indexOf("feelings") !== -1) && 
                            <Link to="/feelings" className="card-link">Feelings</Link>
                        }
                        {(checkedForms.indexOf("likes and dislikes") !== -1) && 
                            <Link to="/likes-and-dislikes" className="card-link">Likes and Dislikes</Link>
                        }
                        {(checkedForms.indexOf("saying no") !== -1) && 
                            <Link to="/saying-no" className="card-link">Saying No</Link>
                        }
                        {(checkedForms.indexOf("asking for help") !== -1) && 
                            <Link to="/asking-for-help" className="card-link">Asking for Help</Link>
                        }
                        {(checkedForms.indexOf("prioritizing enjoyment") !== -1) && 
                            <Link to="/prioritizing-enjoyment" className="card-link">Prioritizing Enjoyment</Link>
                        }
                        {(checkedForms.indexOf("eating healthy") !== -1) && 
                            <Link to="/eating" className="card-link">Eating Healthy</Link>
                        }
                        {(checkedForms.indexOf("exercise") !== -1) && 
                            <Link to="/exercise" className="card-link">Exercise</Link>
                        }
                        {(checkedForms.indexOf("rest and relxation") !== -1) && 
                            <Link to="/rest" className="card-link">Rest and Relaxation</Link>
                        }
                        {(checkedForms.indexOf("self-discipline") !== -1) && 
                            <Link to="/self-discipline" className="card-link">Self Discipline</Link>
                        }
                        {(checkedForms.indexOf("self-soothing") !== -1) && 
                            <Link to="self-soothing" className="card-link">Self Soothing</Link>
                        }
                    </div>
                </div>
            </>
        );
    }
 

export default Forms;