import React from "react";

class RestAndRelaxation extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedOption: "yes"
        }
    }
    render () {
        return (
            <>
            <form className="card">
                <h2>Tracks days on which you engaged in rest/relaxation</h2>
                <p>
                    <input type="date"
                            name="date"
                            onChange={(e) => this.props.updateDate(e.target.value)} 
                    ></input>
                    <label htmlFor="date">Date</label>
                    </p>
                 
                <div>
                    <input type="radio"
                           onChange={(e) => this.props.updateRest(e.target.value)} 
                           
                          name="radioButtons"
                          value="yes"/>
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" 
                           onChange={(e) => this.props.updateRest(e.target.value)}
                           name="radioButtons"
                           value="no"
                           />
                    <label htmlFor="no">No</label>
                </div>
    
                                 <button type="submit"
                        onClick={this.props.addRest}
                >Submit</button>
                </form> 
            </>
        )
    }
}

export default RestAndRelaxation;