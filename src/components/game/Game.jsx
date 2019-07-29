import React, {Component} from 'react';
import {Board} from '../board/Board';
import {isMoveAvailable} from '../board/boardHelper';
import * as gameHelper from '../game/gameHelper';
import {isGameOver} from '../../lineAnalysis';
import {EMPTY} from '../../cellValue';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(this.props.boardSize).fill(EMPTY),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const index = e.target.id;
    const grid = this.state.grid.slice();
    if (isMoveAvailable(grid, index) && !isGameOver(grid)) {
      grid[index] = gameHelper.determineMark(this.state.grid);
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
