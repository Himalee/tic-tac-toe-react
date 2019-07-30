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

  handleClick(e) {
    const chosenGameMode = e.target.id;
    this.setState({gameMode: chosenGameMode});
  }

  createGame(gameMode) {
    return <Game board={Array(9).fill(EMPTY)} gameMode={gameMode} />;
  }

  setUpGame() {
    switch (this.state.gameMode) {
      case gameMode.HUMANVSHUMAN:
        return this.createGame(gameMode.HUMANVSHUMAN);
      case gameMode.HUMANVSRANDOM:
        return this.createGame(gameMode.HUMANVSRANDOM);
      default:
        return 'Choose a game mode';
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
