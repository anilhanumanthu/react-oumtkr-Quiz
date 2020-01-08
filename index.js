import React, { Component } from 'react';
import { render } from 'react-dom';
import './assets/style.css';
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

class QuizBee extends Component {

  state = {
    questionBank : [],
    score : 0,
    responses : 0
  };

  getQuestions = () => {
    quizService().then(question => {
      this.setState({
        questionBank : question
      });
    });
  };
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score : 0,
      responses : 0
    });
  };
  componentDidMount(){
    this.getQuestions();
  }
  computeAnswer = (answer,correctAnswer) => {
    if(answer === correctAnswer){
      this.setState({score : this.state.score + 1});
    }
    this.setState({
      responses : this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  }
  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 && this.state.responses < 5 && this.state.questionBank.map(({question,answers,correct,questionId}) => {
          return(
          <QuestionBox 
          question={question} 
          options={answers} 
          key={questionId}
          selected={answer => this.computeAnswer(answer,correct)} />)
        })}

        {this.state.responses === 5 ? <Result result={this.state.score} playAgain={this.playAgain} /> : null }

      </div>
    );
  }
}

render(<QuizBee />, document.getElementById('root'));
