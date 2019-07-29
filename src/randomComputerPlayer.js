import {EMPTY} from '../src/cellValue';

export function getMove(grid) {
  let validMoves = [];
  grid.forEach(function(value, i) {
    if (value === EMPTY) {
      validMoves.push(i);
    }
  });
  return validMoves[Math.floor(Math.random() * validMoves.length)];
}
