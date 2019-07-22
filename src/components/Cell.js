import React from 'react';

export function Cell(props) {
  return <button
    onClick={() => props.onClick()}>
    {props.cellLabel}
    </button>
}
