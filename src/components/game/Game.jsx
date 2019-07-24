import React, {Component}  from 'react';
import {Board} from '../board/Board';
import * as boardHelper from '../board/boardHelper';
import * as gameHelper from '../game/gameHelper';
import * as cellValue from '../../cellValue';

export class Game extends Component {
  constructor(props){
    super(props);
    this.state={
      grid: Array(this.props.boardSize).fill(cellValue.EMPTY)
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(e) {
    const index=e.target.id;
    const grid=this.state.grid.slice();
    if (boardHelper.isMoveAvailable(grid, index)) {
      grid[index]=gameHelper.determineMark(this.state.grid)
    }
    this.setState({grid: grid});
  }

  render() {
    return (
      <Board updatedGrid={this.state.grid}
        onClick={this.handleClick}/>
    );
  }
}
