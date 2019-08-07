import React from 'react';
import * as gameMode from '../../gameMode';

export function TicTacToe(props) {
  return (
    <div>
      <button
        className="gameModeButton"
        id={gameMode.HUMANVSHUMAN}
        onClick={props.handleGameModeClick}>
        {gameMode.HUMANVSHUMAN}
      </button>
      <button
        className="gameModeButton"
        id={gameMode.HUMANVSRANDOM}
        onClick={props.handleGameModeClick}>
        {gameMode.HUMANVSRANDOM}
      </button>
      <button
        className="gameModeButton"
        id={gameMode.HUMANVSUNBEATABLE}
        onClick={props.handleGameModeClick}>
        {gameMode.HUMANVSUNBEATABLE}
      </button>
    </div>
  );
}
