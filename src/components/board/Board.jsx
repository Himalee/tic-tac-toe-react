import React, { Component }  from 'react';
import {Cell} from '../cell/Cell'
import './board.css';
import * as cellValue from '../../cellValue';

export class Board extends Component {
  constructor(props){
    super(props);
    this.state={
      grid: Array(9).fill(cellValue.EMPTY)
    };
  }

  handleClick(gridIndex) {
    const grid=this.state.grid.slice();
    grid[gridIndex]=cellValue.X;
    this.setState({grid: grid});
  }

  renderGrid() {
    const updatedGrid=this.state.grid.map((cell, index) =>
        <Cell
          cellLabel={this.state.grid[index]}
          onClick={() => this.handleClick(index)}
          key={index}
        />
    )
    return (
      <div class='gridContainer'>{updatedGrid}</div>
    );
  }

  render() {
    return (
      this.renderGrid()
    );
  }
}
