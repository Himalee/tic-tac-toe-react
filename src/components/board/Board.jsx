import React from 'react';
import {Cell} from '../cell/Cell'

export function Board(props) {
  return props.grid.map((cell, index) => {
    return <Cell
      cellLabel={props.grid[index]}
    />
  });
}
