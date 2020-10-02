import React from 'react';

class Dashboard extends React.Component {
    state = { 
        checked: null,
    }
   
    render() {
        return (
        <>
        <h2>Recommended forms</h2>
        <p>Your responses indicate these forms may be helpful:</p>
        {this.props.recForms.map((item, index) => {
            return (
                <li key={`R${index}`}>{this.props.forms[item]}</li>
                    )
                }
            )}
        <p>Check off the forms you'd like to use. Each one deals with a type of personal growth. You can change this whenever you like.</p>
        <form onSubmit={ this.props.handleRecedForms}
            className="dashboard">
         
        {/* sends checkboxes "up" to App  */}
        {this.props.forms.map((list, index) => {
            return (
                <div key={`D${index}`}>
                <input 
                    type="checkbox"
                    key={`F${index}`} 
                    value={this.props.forms[index]}
                    onChange={(e) => this.props.handleCheckboxChange(e)}
                    checked={(this.props.checkedForms.indexOf(this.props.forms[index]) !== -1)}
                    />
                      
                <label 
                    type="text" 
                    key={`L${index}`}
                    style={{color: "#282c34"}}
                    >
                    {this.props.forms[index]}
                    </label>
                <br/>
                </div>
                )
            })}
             
            </form>
        </>
        )
    }
}

export default Dashboard;