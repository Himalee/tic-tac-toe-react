import React, { Component } from 'react';
import { Game } from '../../components/game/Game';
import { EMPTY } from '../../cellValue';
import * as gameMode from '../../gameMode';

export class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: null,
      gameModeChosen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const chosenGameMode = e.target.id;
    this.setState({ gameModeChosen: true });
    this.setState({ gameMode: chosenGameMode });
  }

  render() {
    return (
      <div>
        {!this.state.gameModeChosen ? (
          <div>
            <button id={gameMode.HUMANVSHUMAN} onClick={this.handleClick}>
              Human
            </button>
            <button id={gameMode.HUMANVSRANDOM} onClick={this.handleClick}>
              Random
            </button>
          </div>
        ) : null}
        {this.state.gameModeChosen ? (
          <Game board={Array(9).fill(EMPTY)} gameMode={this.state.gameMode} />
        ) : null}
      </div>
    );
  }
}
