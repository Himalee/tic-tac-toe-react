import React from 'react';
import './cell.css';

export function Cell(props) {
  return <button id={props.id}
    onClick={props.onClick}>
    {props.cellLabel}
    </button>
}
