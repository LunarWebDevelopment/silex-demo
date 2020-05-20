import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {

  state = {
    currentClue: null,
  }

  getRandomClue = () => {
    console.log("Function");
    axios.get('http://jservice.io/api/random').then(res => {
      this.setState({
        currentClue: res.data,
      })
      console.log(this.state.currentClue);
    })
  }

  render() {
    return (
      <div className="App">
         <button onClick={this.getRandomClue} type="button">Get Clue</button>
         {this.state.currentClue && (
           <p>{this.state.currentClue[0].question}</p>
         )}
      </div>
    );
  }
}

export default App;
