import React, { useState } from 'react';

const Dashboard = ({ checkedForms, forms, handleCheckboxChange, handleRecedForms, quizData, recForms }) =>  {
     
    // const [checked, setChecked] = useState(null);

    return (
        <>
        <h2>Recommended forms</h2>
        <p>Your responses indicate these forms may be helpful:</p>
        {recForms.map((item, index) => {
            return (
                <li key={`R${index}`}>{forms[item]}</li>
                    )
                }
            )}
        <p>Check off the forms you'd like to use. Each one deals with a type of personal growth. You can change this whenever you like.</p>
        <form onSubmit={handleRecedForms}
            className="dashboard">
         
        {/* sends checkboxes "up" to App  */}
        {forms.map((list, index) => {
            return (
                <div key={`D${index}`}>
                <input 
                    type="checkbox"
                    key={`F${index}`} 
                    value={forms[index]}
                    onChange={(e) => handleCheckboxChange(e)}
                    checked={(checkedForms.indexOf(forms[index]) !== -1)}
                    />
                      
                <label 
                    type="text" 
                    key={`L${index}`}
                    style={{color: "#282c34"}}
                    >
                    {forms[index]}
                    </label>
                <br/>
                </div>
                )
            })}
             
            </form>
        </>
        )
    
}

export default Dashboard;