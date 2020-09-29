import React from 'react';

class Dashboard extends React.Component {
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    handleCheckboxChange = (e) => {
        console.log(e);
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
        <form onSubmit={this.handleFormSubmit}>
         
        {/* sends checkboxes "up" to App  */}
        {this.props.forms.map((list, index) => {
            return (
                <div key={`D${index}`}>
                <input 
                    type="checkbox"
                    key={`F${index}`} 
                    value={this.props.forms[index]}
                    onChange={(e) => this.handleCheckboxChange(e.target.value)}
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
            <button type="submit">Save Forms</button>
            </form>
        </>
        )
    }
}

export default Dashboard;