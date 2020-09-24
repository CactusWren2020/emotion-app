//a form to collect the records

import React from "react";
import { Link } from "react-router-dom";

class RecordFeelings extends React.Component {
    render() {
        return (
            <>
                <form className="card">  
                    <h2>Record Your Feelings</h2>
                    <p>
                        <input type="date" 
                                name="date"
                                
                                onChange={(e) => this.props.updateDate(e.target.value)}
                        />
                        <label htmlFor="date">Date</label>
                    </p>
                    <p>
                        <select name="timeOfDay" onChange={(e) => this.props.updateTime(e.target.selectedIndex)}>
                            <option value="?" disabled selected>Select One</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                        </select>

                        <label htmlFor="timeOfDay">Time of Day</label>
                    </p>
                    <p>
                        <textarea name="feelingsEntry"
                                 onChange={(e) => this.props.updateRecord(e.target.value)}>
                        </textarea>
                        <label htmlFor="feelingsEntry">Record Your Feelings</label>
                    </p>
                    <button type="submit"
                            onClick={this.props.addRecord}>Submit</button>
                    <Link to="/likes-and-dislikes" className="card-link">Next</Link>                
                            </form>
                   
            </>
            );
    }
}

export default RecordFeelings;
