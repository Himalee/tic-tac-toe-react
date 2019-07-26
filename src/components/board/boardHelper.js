import {EMPTY} from '../../cellValue';

export function isMoveAvailable(grid, index) {
  return grid[index] === EMPTY;
}
