import React, {Component} from 'react';
import {Game} from '../../components/game/Game';
import {EMPTY} from '../../cellValue';
import * as gameMode from '../../gameMode';

export class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  humanVsHumanGame() {
    return (
      <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSHUMAN} />
    );
  }

  humanVsRandomGame() {
    return (
      <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSRANDOM} />
    );
  }

  handleClick(e) {
    const chosenGameMode = e.target.id;
    this.setState({gameMode: chosenGameMode});
  }

  setUpGame() {
    if (this.state.gameMode === gameMode.HUMANVSHUMAN) {
      return this.humanVsHumanGame();
    } else if (this.state.gameMode === gameMode.HUMANVSRANDOM) {
      return this.humanVsRandomGame();
    }
  }

  render() {
    return (
      <div>
        <button id={gameMode.HUMANVSHUMAN} onClick={this.handleClick}>
          Human
        </button>
        <button id={gameMode.HUMANVSRANDOM} onClick={this.handleClick}>
          Random
        </button>
        {this.setUpGame()}
      </div>
    );
  }
}
