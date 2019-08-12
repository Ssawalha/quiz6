import React from 'react';
import './App.css';
import YahtzeeBox from './yahtzeebox/YahtzeeBox';

class App extends React.Component {
  state = {
    dice: [
      {dicenum: 1, roll: 0},
      {dicenum: 2, roll: 0},
      {dicenum: 3, roll: 0},
      {dicenum: 4, roll: 0},
      {dicenum: 5, roll: 0},
      {dicenum: 6, roll: 0}
    ]
  }

  rollDice = () => {
    this.setState ({
      dice: [
      {dicenum: 1, roll: Math.floor(Math.random() * Math.floor(6))},
      {dicenum: 2, roll: Math.floor(Math.random() * Math.floor(6))},
      {dicenum: 3, roll: Math.floor(Math.random() * Math.floor(6))},
      {dicenum: 4, roll: Math.floor(Math.random() * Math.floor(6))},
      {dicenum: 5, roll: Math.floor(Math.random() * Math.floor(6))},
      {dicenum: 6, roll: Math.floor(Math.random() * Math.floor(6))}
    ]
    })
  }



  render(){

    return (
      <div>
        <button className='buttonStyle' onClick={this.rollDice}
        >Roll Dice</button>
        <YahtzeeBox 
          dicenum={this.state.dice[0].dicenum} 
          roll={this.state.dice[0].roll}/>
        <YahtzeeBox
          dicenum={this.state.dice[1].dicenum} 
          roll={this.state.dice[1].roll}/>
        <YahtzeeBox 
          dicenum={this.state.dice[2].dicenum} 
          roll={this.state.dice[2].roll}/>
        <YahtzeeBox 
          dicenum={this.state.dice[3].dicenum} 
          roll={this.state.dice[3].roll}/>
        <YahtzeeBox 
          dicenum={this.state.dice[4].dicenum} 
          roll={this.state.dice[4].roll}/>
        <YahtzeeBox 
          dicenum={this.state.dice[5].dicenum} 
          roll={this.state.dice[5].roll}/>
      </div>
    );
  }
}
export default App;
