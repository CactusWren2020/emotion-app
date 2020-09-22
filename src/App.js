import React from 'react';
import RecordFeelings from "./RecordFeelings";
import FeelingsSheet from "./FeelingsSheet"; 
import './App.css';

class App extends React.Component {
  state = { 
      currentDate: "",
      currentTime: "",
      currentRecord: "",
      records: []
  }
  updateDate = (date) => {
        this.setState({ currentDate: date })
    }
    updateTime = (option) => {
        const times = ["", "morning", "afternoon", "evening"];
        this.setState({ currentTime: times[option] })
    }
    updateRecord = (record) => {
        this.setState({ currentRecord: record })
    }
    addRecord = (e) => {
          e.preventDefault();
          const newRecord =  {date: this.state.currentDate,
                              time: this.state.currentTime,
                              record: this.state.currentRecord};
          const newRecords = this.state.records.concat(newRecord);
          this.setState({ records: newRecords });
          this.setState({currentDate: "", currentTime: "", currentRecord: ""});
      }       
  
  render() {
    const thing = [{date: "today", time: "afternoon", record: "awesome bro!"}];
    return (
    <div className="App">
      <header className="App-header">
         <h1>Emotion App</h1>
         <RecordFeelings
            updateDate={this.updateDate}
            updateTime={this.updateTime}
            updateRecord={this.updateRecord}
            addRecord={this.addRecord}
          />
         <FeelingsSheet records={this.state.records}/>
      </header>
      
    </div>
    )
  }
}

export default App;
