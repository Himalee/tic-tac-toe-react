import React from 'react';
import {Cell} from '../cell/Cell';
import './board.css';

export function Board(props) {
  const updatedGrid = props.updatedGrid.map((cell, index) => (
    <Cell
      id={index}
      cellLabel={props.updatedGrid[index]}
      onClick={props.handleClick}
      key={index}
    />
  ));
  return <div className="gridContainer">{updatedGrid}</div>;
}
