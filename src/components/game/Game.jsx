import React, { Component } from 'react';
import { Board } from '../board/Board';
import { isMoveAvailable } from '../board/boardHelper';
import * as gameHelper from '../game/gameHelper';
import { isGameOver } from '../../lineAnalysis';
import * as gameMode from '../../gameMode';
import { getMove } from '../../randomComputerPlayer';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.props.board,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const index = e.target.id;
    let grid = this.state.grid;
    switch (this.props.gameMode) {
      case gameMode.HUMANVSHUMAN:
        this.markGridWithHumanPlayerMove(grid, index);
        break;
      case gameMode.HUMANVSRANDOM:
        this.markGridWithHumanPlayerMove(grid, index);
        this.markGridWithRandomComputerPlayerMove(grid);
        break;
      default:
    }
    this.setState({ grid: grid });
  }

  markGridWithHumanPlayerMove(grid, index) {
    if (isMoveAvailable(grid, index) && !isGameOver(grid)) {
      grid[index] = gameHelper.determineMark(this.state.grid);
    }
    return grid;
  }

  markGridWithRandomComputerPlayerMove(grid) {
    if (!isGameOver(grid)) {
      grid[getMove(grid)] = gameHelper.determineMark(grid);
    }
    return grid;
  }

  render() {
    return (
      <div>
        <Board updatedGrid={this.state.grid} handleClick={this.handleClick} />
        <p>{gameHelper.determineGameStatus(this.state.grid)}</p>
      </div>
    );
  }
}
