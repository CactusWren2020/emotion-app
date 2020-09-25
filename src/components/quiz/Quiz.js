import React from 'react';
import QuizHeader from './QuizHeader';
import quizData from './quizData';
 

class Quiz extends React.Component {
    state = {
        dataQuestion: [],
        currentQuestion: 0,
        answers: {yes: 0, no: 0}
    }
    setStateFunction = () => {
        this.setState( {
            dataQuestion: quizData
        })
    }
    componentDidMount() {
        this.setStateFunction();
    }

    render() {

        return (
            <>
                <div className="card">
                 <QuizHeader /> 
                 <form>
                 {
                     
                        <div>
                            <h2>{quizData[0].question}</h2>
                        </div>
                    
                 }
                 <div>
                    <input type="radio"
                        onChange={(e) => this.props.updateAnswer(e.target.value)} 
                        
                        name="radioButtons"
                        value="yes"/>
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" 
                        onChange={(e) => this.props.updateAnswer(e.target.value)}
                        name="radioButtons"
                        value="no"
                        />
                    <label htmlFor="no">No</label>
                </div>
                 <button type="button">Yes</button>
                 <button type="button">No</button>
                 <button type="button">Not sure</button>
                 </form>
                 </div>
            </>
        )
    }
}

export default Quiz;