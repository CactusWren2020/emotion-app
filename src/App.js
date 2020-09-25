import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Forms from './components/Forms';
import Sheets from './components/Sheets';
import Nav from './components/Nav';

import Quiz from './components/quiz/Quiz';
 

import HowToUse from './components/HowToUse';
import About from './components/About';

import Feelings from "./components/Feelings";
import FeelingsSheet from "./components/FeelingsSheet"; 
import LikesAndDislikes from "./components/LikesAndDislikes";
import LikesAndDislikesSheet from "./components/LikesAndDislikesSheet";
import SayingNo from "./components/SayingNo";
import SayingNoSheet from "./components/SayingNoSheet";
import AskingForHelp from "./components/AskingForHelp";
import AskingForHelpSheet from "./components/AskingForHelpSheet";
import PrioritizingEnjoyment from "./components/PrioritizingEnjoyment";
import PrioritizingEnjoymentSheet from "./components/PrioritizingEnjoymentSheet";
import Eating from "./components/Eating";
import EatingSheet from "./components/EatingSheet";
import Exercise from "./components/Exercise";
import ExerciseSheet from "./components/ExerciseSheet";
import RestAndRelaxation from "./components/RestAndRelaxation";
import RestAndRelaxationSheet from "./components/RestAndRelaxationSheet";
import SelfDiscipline from "./components/SelfDiscipline";
import SelfDisciplineSheet from "./components/SelfDisciplineSheet";
import SelfSoothing from "./components/SelfSoothing";
import SelfSoothingSheet from "./components/SelfSoothingSheet"


class App extends React.Component {
  state = { 
      currentDate: "",
      currentTime: "",

      currentRecord: "",
      records: [],

      currentLikeOrDislike: "",
      currentText: "",
      likesAndDislikes: [],

      currentNos: "",
      nos: [],

      currentAsks: "",
      asks: [],

      currentEnjoys: "",
      enjoys: [],

      currentEats: "",
      eats: [],

      currentExercise: "",
      exercise: [],

      currentRests: "",
      rest: [],

      currentDiscipline: "",
      disciplines: [],

      currentSoothe: "",
      soothes: []
  }
  /* Utility Functions */
  updateDate = (date) => {
    this.setState({ currentDate: date })
  }
  updateTime = (option) => {
    const times = ["", "morning", "afternoon", "evening"];
    this.setState({ currentTime: times[option] })
}
  /* Rest and Relaxation */
  updateRest = (val) =>{
    this.setState({ currentRests: val })
  }
  addRest = (e) => {
    e.preventDefault();
    const newRest = {date: this.state.currentDate, rest: this.state.currentRests};
    const newRests = this.state.rest.concat(newRest);
    this.setState({ rest: newRests });
  }
  /* Exercise */
  updateExercise = (val) => {
    this.setState({ currentExercise: val })
  }
  addExercise = (e) => {
    e.preventDefault();
    const newExercise = {date: this.state.currentDate,
                        exercise: this.state.currentExercise};
    const newExercises = this.state.exercise.concat(newExercise);
    this.setState({ exercise: newExercises })
  }
  /* Eating Healthy */
  updateEats = (num) => {
    this.setState({ currentEats: num })
  }
  addEats = (e) => {
    e.preventDefault();
    const newEat = {date: this.state.currentDate,
                    numEats: this.state.currentEats};
    const newEats = this.state.eats.concat(newEat);
    this.setState({ eats: newEats });
  }
  /* Prioritizing Enjoyment */
  updateEnjoys = (num) => {
    this.setState({ currentEnjoys: num });
  }
  addEnjoys = (e) => {
    e.preventDefault();
    const newEnjoy = {date: this.state.currentDate,
                      numEnjoys: this.state.currentEnjoys};
    const newEnjoys = this.state.enjoys.concat(newEnjoy);
    this.setState({ enjoys: newEnjoys });
  }
  /* Asking for Help Functions */
  updateAsks = (num) => {
    this.setState({ currentAsks: num });
  }
  addAsks = (e) => {
    e.preventDefault();
    const newAsk = {date: this.state.currentDate,
                    numAsks: this.state.currentAsks};
    const newAsks = this.state.asks.concat(newAsk);
    this.setState({ asks: newAsks });
  }
  /* Saying No Functions */ 
    updateNos = (num) => {
      this.setState({ currentNos: num });
      }
    addNos = (e) => {
      e.preventDefault();
      const newNo = {date: this.state.currentDate,
                      numNos: this.state.currentNos};
      const newNos = this.state.nos.concat(newNo);
      this.setState({ nos: newNos });
    }
  /* Self Discipline */
  updateDiscipline = (discipline) => {
    this.setState({ currentDiscipline: discipline });
  }
  addDiscipline = (e) => {
    e.preventDefault();
    const newDiscipline = {date: this.state.currentDate, time: this.state.currentTime, discipline: this.state.currentDiscipline};
    const newDisciplines = this.state.records.concat(newDiscipline);
    this.setState({ disciplines: newDisciplines });
  }
  /* Record Feelings Functions */  
    
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
  /* Like or Dislike Functions */
    updateLikeOrDislike = (option) => {
      const likeOrDislike = ["", "Like", "Dislike"];
      this.setState({ currentLikeOrDislike: likeOrDislike[option]})
    }
    updateText = (text) => {
      this.setState({ currentText: text });
    }
    addLikeOrDislike = (e) => {
      e.preventDefault();
      const newLikeOrDislike = {date: this.state.currentDate,
                                likeOrDislike: this.state.currentLikeOrDislike,
                                text: this.state.currentText
      }
      const newLikeOrDislikes = this.state.likesAndDislikes.concat(newLikeOrDislike);
      this.setState({ likesAndDislikes: newLikeOrDislikes });
      this.setState({currentDate: "", currentLikeOrDislike: "", currentText: ""})
    }
  /* Self-Soothing Functions */
  updateSoothe = (text) => {
    this.setState({ currentSoothe: text });
  }
  addSoothe = (e) => {
    e.preventDefault();
    const newSoothe = {date: this.state.currentDate, soothe: this.state.currentSoothe};
    const newSoothes = this.state.soothes.concat(newSoothe);
    this.setState({ soothes: newSoothes });
  }
   
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            
            <Link to="/" className="header-text"><h1 >Emotion App</h1></Link>
            <Nav />
             <Switch>
            <Route 
              exact path="/forms"
              render={() => <Forms />}/>
            </Switch>

            <Switch>
            <Route 
              exact path="/sheets"
              render={() => <Sheets />}/>
            </Switch>

            <Switch>
              <Route
                exact path="/how-to-use"
                  render={() => <HowToUse />}/>
            </Switch>

            <Switch>
              <Route  
                exact path="/about"
                render={() => <About />}/>
            </Switch>

            <Switch>
              <Route 
                exact path="/quiz"
                render={() => <Quiz />}/>
            </Switch>

             
            {/* Feelings */}
            <Switch>
            <Route 
              exact path="/feelings"
              render={() => <Feelings
                updateDate={this.updateDate}
                updateTime={this.updateTime}
                updateRecord={this.updateRecord}
                addRecord={this.addRecord}
              />} 
            /> 
          </Switch>
          
          <Switch>
            <Route
              exact path="/feelings-sheet"
              render={() => <FeelingsSheet records={this.state.records}/>}
            />
          </Switch>
        
          {/* Likes and Dislikes */}
          <Switch>
            <Route
              exact path="/likes-and-dislikes"
              render={() => <LikesAndDislikes 
                updateDate={this.updateDate}
                updateLikeOrDislike={this.updateLikeOrDislike}
                updateText={this.updateText}   
                addLikeOrDislike={this.addLikeOrDislike}             
              />} 
            />    
          </Switch>
          
          <Switch>
            <Route
              exact path="/likes-and-dislikes-sheet"
              render={() => <LikesAndDislikesSheet
                              likesAndDislikes={this.state.likesAndDislikes}/>
                      }
              />
            </Switch>
            
           {/* Saying No */}
            <Switch>
              <Route
                exact path="/saying-no"
                render={() => <SayingNo 
                                updateDate={this.updateDate}
                                updateNos={this.updateNos}
                                 
                                addNos={this.addNos} />}
                />
            </Switch>          
            
            <Switch>
              <Route
                exact path="/saying-no-sheet"
                render={() => <SayingNoSheet 
                                nos={this.state.nos}/>}
              />  
            </Switch> 
            {/* Asking for Help */}
           <Switch>
            <Route
              exact path="/asking-for-help"
              render={() => <AskingForHelp
                                updateDate={this.updateDate}
                                updateAsks={this.updateAsks}
                                addAsks={this.addAsks}
                                />}
            />
            </Switch>
            
            <Switch>
              <Route
                exact path="/asking-for-help-sheet"
                render={() => <AskingForHelpSheet
                                asks={this.state.asks}/>}
              />
                               
            </Switch>
        
            {/* Prioritizing Enjoyment */}
            <Switch>
                <Route 
                  exact path="/prioritizing-enjoyment"
                  render={() => <PrioritizingEnjoyment  
                                  updateDate={this.updateDate}
                                  updateEnjoys={this.updateEnjoys}
                                  addEnjoys={this.addEnjoys}
                                />}
                 />
            </Switch>
          
            <Switch>
              <Route
                    exact path="/prioritizing-enjoyment-sheet"
                    render={() => <PrioritizingEnjoymentSheet
                                    enjoys={this.state.enjoys}/>}
              />
              </Switch>      
              
              {/* Eating Healthy */}
              <Switch>
                <Route
                    exact path="/eating"
                    render={()=> <Eating  
                                  updateDate={this.updateDate}
                                  updateEats={this.updateEats}
                                  addEats={this.addEats}
                                />}
                />
              </Switch>
              
              <Switch>
                <Route
                  exact path="/eating-sheet"
                  render={() => <EatingSheet
                                  eats={this.state.eats}/>}
                  />
              </Switch>
              
              {/* Exercise */}
              <Switch>
                <Route
                  exact path="/exercise"
                  render={() => <Exercise 
                                  updateDate={this.updateDate}
                                  updateExercise={this.updateExercise}
                                  addExercise={this.addExercise}
                  />}
                />
                </Switch>
              
                <Switch>
                  <Route
                    exact path="/exercise-sheet"
                    render={() => <ExerciseSheet
                                    exercise={this.state.exercise} />}
                    />
                </Switch>
         
                <Switch>
                  <Route
                    exact path="/rest"
                    render={() => <RestAndRelaxation
                                    updateDate={this.updateDate}
                                    updateRest={this.updateRest}
                                    addRest={this.addRest}/>}
                  />
                </Switch>
                
                <Switch>
                  <Route  
                      exact path="/rest-sheet"
                      render={() => <RestAndRelaxationSheet
                                      rest={this.state.rest}/>}
                  />
                </Switch>
               
                <Switch>
                  <Route  
                      exact path="/self-discipline"
                      render={() => <SelfDiscipline
                                      updateDate={this.updateDate}
                                      updateTime={this.updateTime}
                                      updateDiscipline={this.updateDiscipline}
                                      addDiscipline={this.addDiscipline}/>}
                  />
                </Switch>
               
                <Switch>
                  <Route
                    exact path="/self-discipline-sheet"
                    render={() => <SelfDisciplineSheet
                                    disciplines={this.state.disciplines}/>}
                  />
                </Switch>
               
                <Switch>
                    <Route
                      exact path="/self-soothing"
                      render={() => <SelfSoothing
                                      updateDate={this.updateDate}
                                      updateSoothe={this.updateSoothe}
                                      addSoothe={this.addSoothe}/>}
                    />
                </Switch>
                
                <Switch>
                    <Route  
                        exact path="/self-soothing-sheet"
                        render={() => <SelfSoothingSheet
                                        soothes={this.state.soothes}/>}
                    />
                </Switch>
                </header>
      
      </div>
     
    </Router>
    )
  }
}

export default App;
