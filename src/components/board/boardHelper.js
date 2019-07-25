import * as cellValue from '../../cellValue';

export function isMoveAvailable(grid, index) {
  return grid[index] === cellValue.EMPTY;
}
