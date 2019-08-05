import React, { Component } from 'react';
import { Game } from '../../components/game/Game';
import { EMPTY } from '../../cellValue';
import * as gameMode from '../../gameMode';
import './ticTacToe.css';

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
    this.setState({ gameMode: chosenGameMode });
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.gameMode == null && (
          <div>
            <button
              className="gameModeButton"
              id={gameMode.HUMANVSHUMAN}
              onClick={this.handleClick}>
              Human
            </button>
            <button
              className="gameModeButton"
              id={gameMode.HUMANVSRANDOM}
              onClick={this.handleClick}>
              Random
            </button>
            <button
              className="gameModeButton"
              id={gameMode.HUMANVSUNBEATABLE}
              onClick={this.handleClick}>
              Hard
            </button>
          </div>
        )}
        {this.state.gameMode != null && (
          <Game board={Array(9).fill(EMPTY)} gameMode={this.state.gameMode} />
        )}
      </div>
    );
  }
}
