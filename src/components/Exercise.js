import React from "react";
import { Link, Redirect } from 'react-router-dom';

class Exercise extends React.Component {
// constructor (props) {
//     super(props);
//     this.
    state = {
        selectedOption: "yes", 
        redirect: this.props.redirect
    }
// }

componentDidUpdate(prevProps) {
    if (prevProps.redirect !== this.props.redirect) {
        this.setState({redirect : this.props.redirect})
    }
}
render () {
    if (this.props.redirect) {
        return <Redirect to={this.props.redirect} />
    }
    return (
        <>
        <form className="card">
            <h2>Tracks days on which you exercised</h2>
            <p>
                <input type="date"
                        name="date"
                        onChange={(e) => this.props.updateDate(e.target.value)} 
                ></input>
                <label htmlFor="date">Date</label>
                </p>
             
            <div>
                <input type="radio"
                       onChange={(e) => this.props.updateExercise(e.target.value)} 
                       
                      name="radioButtons"
                      value="yes"/>
                <label htmlFor="yes">Yes</label>
                <input type="radio" 
                       onChange={(e) => this.props.updateExercise(e.target.value)}
                       name="radioButtons"
                       value="no"
                       />
                <label htmlFor="no">No</label>
            </div>

                             <button type="submit"
                    onClick={this.props.addExercise}
            >Submit</button>
            <Link to="/rest" className="card-link">Next</Link>
            </form> 
        </>

    )
    
}
}
export default Exercise;