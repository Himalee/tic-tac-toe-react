import { EMPTY } from '../../cellValue';

export function isMoveAvailable(grid, index) {
  return grid[index] === EMPTY;
}

export function availableMoves(grid) {
  let validMoves = [];
  grid.forEach(function(value, i) {
    if (value === EMPTY) {
      validMoves.push(i);
    }
  });
  return validMoves;
}
