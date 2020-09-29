import React from 'react';
import QuizHeader from './QuizHeader';
import Dashboard from './Dashboard';
import { forms, quizData }from './quizData';
import SimpleStorage from 'react-simple-storage';

class Quiz extends React.Component {
    state = {
        dataQuestion: quizData,
        currentQuestion: 0,
        answers: 0,
        recForms: []  //store recommend forms as suggested by the responses
    }
    setStateFunction = () => {
        this.setState( {
            dataQuestion: quizData
        })
    }
    updateAnswers = (answer) => {
        let recForm = "";
        if (answer) { 
        let temp = quizData[this.state.currentQuestion].form; //form numbers to add to state
        recForm = temp.filter((item) => {
         if (this.state.recForms.indexOf(item) === -1) { //only add items that don't already exist in the array
            return item;
                } else {
                    return false;
                    }
                }
            )
        
        }
        console.log(recForm);
        this.setState((prevState) => ({ 
            answers: prevState.answers + answer,
            currentQuestion: prevState.currentQuestion + 1,
            recForms: [...prevState.recForms, ...recForm] //adds any new items (might be in array) to the old array
            }
        ));
    }
    reset = () => {
        console.log("hi")
        this.setState({ currentQuestion: 0, answers: 0 })
    }
    render() {
        return (
             <>
                <div className="card">
                <SimpleStorage parent={this}/>
                <div>
                    <QuizHeader /> 
                   {this.state.currentQuestion === (this.state.dataQuestion.length - 1) ?
                    <>
                    <p>You answered yes to {this.state.answers} out of {this.state.dataQuestion.length - 1} questions</p>
                    <Dashboard 
                        quizData={quizData}
                        forms={forms}
                        recForms={this.state.recForms}
                        />
                    </>
                    :
                   <>
                    <div key={quizData[ this.state.currentQuestion].id}
                        className="divHeight">
                        <p>{quizData[this.state.currentQuestion].question}</p>
                       
                        </div>
                        <button type="button"
                        value="1"
                        onClick={(e) => this.updateAnswers(parseInt(e.target.value))}>
                        Yes
                </button>
                <button type="button"
                        value="0"
                        onClick={(e) => this.updateAnswers(parseInt(e.target.value))}
                        >No or not sure
                </button>
                <button type="button"
                        onClick={this.reset}
                        >Reset
                </button>
                    
                </>   
                }
                    </div>
                </div>
            </>
        )
    }
}

export default Quiz;