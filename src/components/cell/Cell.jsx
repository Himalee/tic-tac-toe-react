import React from 'react';
import './cell.css';

export function Cell(props) {
  return <button
    onClick={() => props.onClick()}>
    {props.cellLabel}
    </button>
}
