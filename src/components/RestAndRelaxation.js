import React from "react";
import { Link, Redirect } from 'react-router-dom';

class RestAndRelaxation extends React.Component {
    // constructor (props) {
    //     super(props);
        // this.
        state = {
            selectedOption: "yes",
            redirect: null
        }
    // }
    componentDidUpdate(prevProps) {
        if (prevProps.redirect !== this.props.redirect) {
            this.setState({redirect : this.props.redirect})
        }
    }
    render () {
        if (this.props.redirect) {
            return <Redirect to={this.props.redirect}/>
        }
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
                    <p>
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
                    </p>
                </div>
    
                                 <button type="submit"
                        onClick={this.props.addRest}
                >Submit</button>
                <Link to="/self-discipline" className="card-link">Next</Link>
                </form> 
            </>
        )
    }
}

export default RestAndRelaxation;