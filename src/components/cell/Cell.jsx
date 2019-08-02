import React from 'react';
import './cell.css';

export function Cell(props) {
  return (
    <button
      class="button"
      id={props.id}
      disabled={props.cellLabel !== ''}
      onClick={props.onClick}>
      {props.cellLabel}
    </button>
  );
}
