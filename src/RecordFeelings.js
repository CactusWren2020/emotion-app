//a form to collect the records

import React from "react";

class RecordFeelings extends React.Component {
    constructor(props) {
        super(props);
    }
    
    // state = {
    //     records: [
    //         {
    //             date: "01/01/2020", time: "morning", record: "I felt great!"
    //         },
    //         {
    //             date: "01/01/2020", time: "afternoon", record: "blah"
    //         }
    //     ],
    //     currentDate: "",
    //     currentTime: "",
    //     currentRecord: ""
    // }

    // updateDate = (date) => {
    //     this.setState({ currentDate: date })
    // }
    // updateTime = (option) => {
    //     const times = ["", "morning", "afternoon", "evening"];
    //     this.setState({ currentTime: times[option] })
    // }
    // updateRecord = (record) => {
    //     this.setState({ currentRecord: record })
    // }
    // addRecord = (e) => {
    //     e.preventDefault();
    //     const newRecord =  {date: this.state.currentDate,
    //                         time: this.state.currentTime,
    //                         record: this.state.currentRecord};
    //     const newRecords = this.state.records.concat(newRecord);
    //     this.setState({ records: newRecords });
    //     this.setState({currentDate: "", currentTime: "", currentRecord: ""});
    // }        

    render() {
        return (
            <>
                <form>  
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
                </form>
              {/*  <div className="div">
                    {this.state.records.map(record => (
                        <div key={record.date + record.time}>
                            <p>{record.date },
                               {" " + record.time},
                               {" " + record.record}
                            </p>
                        </div>
                        )
                    )}
                        
                
                

                    </div> */}
            </>
            );
    }
}

export default RecordFeelings;
