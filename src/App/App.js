// Importing files onto App.js //
import React, { Component } from 'react';
import './App.css';
import Question from '../Questions/Question';
import ProgressBar from '../ProgressBar/ProgressBar';
import MultiChoice from '../MultiChoice/MultiChoice';
import HeaderComponent from './HeaderComponent';
import Results from '../Results/Results';
import { Button } from 'react-bootstrap';
import { Line } from 'rc-progress';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0
    };
    // .bind(this) gets the setState and overwrites the original states. //
    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.newQuiz = this.newQuiz.bind(this);

    // Create an array for quiz_data with questions, correct answer and possible answers.//
    this.quiz_data = [
      {
        question: "What is the Saga's most repeated line?",
        correct_answer: "I've got a bad feeling about this",
        possible_answers: ["IT'S A TRAP!", "Do or do not, there is no try", "I've got a bad feeling about this", "May the force be with you"]
      },
      {
        question: "Who was piloting the Y-Wing that escapes the destruction of the first Death Star?",
        correct_answer: "Keyan Farlander",
        possible_answers: ["Admiral Ackbar", "Bail Organa", "Keyan Farlander", "Wedge"]
      },
      {
        question: "Who is the actor in the suit when Darth Vader's face is revealed?",
        correct_answer: "Sebastian Shaw",
        possible_answers: ["Harrison Ford", "David Prowse", "James Earl Jones", "Sebastian Shaw"]
      },
      {
        question: "What does the name Yoda mean?",
        correct_answer: "Warrior",
        possible_answers: ["Master", "Small", "Warrior", "Soldier"]
      },
      {
        question: "Which reference is continually used in the saga?",
        correct_answer: "1138",
        possible_answers: ["The old republic", "The Balmora Run", "1138", "Greedo"]
      }
    ]
  }
// Submitting our answer once we have chosen. If answer is correct, the score will increase
// by one, and will move to the next question. 
// If the answer is incorrect, the score will remain the same and moves onto the next question.
  submitAnswer() {
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'Not yet!'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1,
        selected: 'Not yet!'
      })
    }
  }

// Once chosen an answer, but it is incorrect, this function allows users to //
// update their answer //
  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }

// Renders a new quiz, progress will restart //
  newQuiz() {
    this.setState({
      progress: 0,
      score: 0
    })
  }


// Rendering components from different files using props. //
  render() {
    return (
      <div>
       <HeaderComponent />
        <h2>Quiz App</h2>
        

        {this.state.progress < this.quiz_data.length ? (
          <div className="quiz">
            <Question current_question={this.quiz_data[this.state.progress].question} />
            <ProgressBar current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
            <Line percent={(this.state.progress + 1)/(this.quiz_data.length)*100} strokeWidth="2" strokeColor="#4080ff" />
            <MultiChoice 
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected} />
          </div>
        )
        : (
        <Results
         score={this.state.score} 
         handleRetry={this.newQuiz} />
         )}
      </div>
    );
  }
}

// exporting the class App so that other files can access that function. //
export default App;
