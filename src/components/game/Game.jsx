import React, { Component } from 'react';
import { Board } from '../board/Board';
import { TicTacToe } from '../ticTacToe/TicTacToe';
import { isMoveAvailable } from '../board/boardHelper';
import * as gameHelper from '../game/gameHelper';
import { isGameOver } from '../../lineAnalysis';
import * as gameMode from '../../gameMode';
import { getRandomMove } from '../../randomComputerPlayer';
import * as unbeatableComputerPlayer from '../../unbeatableComputerPlayer';
import * as cellValue from '../../cellValue';
import { EMPTY } from '../../cellValue';
import './game.css';

const LENGTH_OF_PAUSE_AFTER_MOVE = 500;

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(EMPTY),
      gameMode: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleGameModeClick = this.handleGameModeClick.bind(this);
  }

  handleClick(e) {
    const index = e.target.id;
    let grid = this.state.grid.slice();
    this.markGridWithHumanPlayerMove(grid, index);
    switch (this.state.gameMode) {
      case gameMode.HUMANVSRANDOM:
        setTimeout(
          () => this.markGridWithRandomComputerPlayerMove(grid),
          LENGTH_OF_PAUSE_AFTER_MOVE,
        );
        break;
      case gameMode.HUMANVSUNBEATABLE:
        setTimeout(
          () => this.markGridWithUnbeatableComputerPlayerMove(grid),
          LENGTH_OF_PAUSE_AFTER_MOVE,
        );
        break;
      default:
    }
  }

  handleGameModeClick(e) {
    const chosenGameMode = e.target.id;
    this.setState({ grid: Array(9).fill(EMPTY), gameMode: chosenGameMode });
  }

  markGridWithHumanPlayerMove(grid, index) {
    if (isMoveAvailable(grid, index) && !isGameOver(grid)) {
      grid[index] = gameHelper.determineMark(grid);
    }
    this.setState({ grid: grid });
  }

  markGridWithRandomComputerPlayerMove(grid) {
    if (!isGameOver(grid)) {
      grid[getRandomMove(grid)] = gameHelper.determineMark(grid);
    }
    this.setState({ grid: grid });
  }

  markGridWithUnbeatableComputerPlayerMove(grid) {
    if (!isGameOver(grid)) {
      grid[
        unbeatableComputerPlayer.getMove(
          grid,
          unbeatableComputerPlayer.STARTINGDEPTH,
          cellValue.O,
        )
      ] = gameHelper.determineMark(grid);
    }
    this.setState({ grid: grid });
  }

  render() {
    return (
      <div className="wrapper">
        <TicTacToe handleGameModeClick={this.handleGameModeClick} />
        <Board updatedGrid={this.state.grid} handleClick={this.handleClick} />
        <p>{gameHelper.determineGameStatus(this.state.grid)}</p>
      </div>
    );
  }
}
