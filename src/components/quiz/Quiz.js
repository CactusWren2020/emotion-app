import React from 'react';
import QuizHeader from './QuizHeader';
import quizData from './quizData';
 

class Quiz extends React.Component {
    state = {
        dataQuestion: quizData,
        currentQuestion: 0,
        answers: 0
    }
    setStateFunction = () => {
        this.setState( {
            dataQuestion: quizData
        })
    }
    updateAnswers = (answer) => {
        this.setState((prevState) => ({ answers: prevState.answers + answer,
            currentQuestion: prevState.currentQuestion + 1 }
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
                <form>
                    <QuizHeader /> 
                   {this.state.currentQuestion === (this.state.dataQuestion.length - 1) ?
                    <p>You answered yes to {this.state.answers} out of {this.state.dataQuestion.length - 1} questions</p>
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
                    </form>
                </div>
            </>
        )
    }
}

export default Quiz;