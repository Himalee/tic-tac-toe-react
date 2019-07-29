import React, {Component} from 'react';
import {Board} from '../board/Board';
import {isMoveAvailable} from '../board/boardHelper';
import * as gameHelper from '../game/gameHelper';
import {isGameOver} from '../../lineAnalysis';
import * as gameMode from '../../gameMode';
import {getMove} from '../../randomComputerPlayer';

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
    const grid = this.state.grid.slice();
    switch (this.props.gameMode) {
      case gameMode.HUMANVSHUMAN:
        if (isMoveAvailable(grid, index) && !isGameOver(grid)) {
          grid[index] = gameHelper.determineMark(this.state.grid);
        }
        break;
      case gameMode.HUMANVSRANDOM:
        if (isMoveAvailable(grid, index) && !isGameOver(grid)) {
          grid[index] = gameHelper.determineMark(this.state.grid);
          grid[getMove(grid)] = gameHelper.determineMark(grid);
        }
        break;
      default:
        this.setState({grid: grid});
    }
    this.setState({grid: grid});
  }

  render() {
    return (
      <div>
        <Board updatedGrid={this.state.grid} handleClick={this.handleClick} />
        <h2>{gameHelper.determineGameStatus(this.state.grid)}</h2>
      </div>
    );
  }
}
