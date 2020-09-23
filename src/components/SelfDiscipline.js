//a form to get records of self-discipline

import React from "react";
 

class SelfDiscipline extends React.Component {
    render() {
        return (
            <>
                <form className="card">  
                    <h2>Record three instances of exercising self-discipline</h2>
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
                        <textarea name="disciplineEntry"
                                 onChange={(e) => this.props.updateDiscipline(e.target.value)}>
                        </textarea>
                        <label htmlFor="disciplineEntry">Record when you've exercised self-discipline</label>
                    </p>
                    <button type="submit"
                            onClick={this.props.addDiscipline}>Submit</button>
                
                            </form>
                   
            </>
            );
    }
}

export default SelfDiscipline;
