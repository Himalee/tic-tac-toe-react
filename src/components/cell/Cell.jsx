import React from 'react';
import { EMPTY } from '../../cellValue';
import './cell.css';

export function Cell(props) {
  return (
    <button
      class="button"
      id={props.id}
      disabled={props.cellLabel !== EMPTY}
      onClick={props.onClick}>
      {props.cellLabel}
    </button>
  );
}
