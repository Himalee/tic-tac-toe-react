import * as cellValue from '../../cellValue';

export function determineMark(grid) {
  let numberOfX = countMark(cellValue.X, grid);
  let numberOfO = countMark(cellValue.O, grid);
  return (numberOfX > numberOfO) ? cellValue.O : cellValue.X
}

export function countMark(mark, grid) {
  let count = 0;
  let currentGrid = grid;
  currentGrid.forEach(function(cell) {
    if(cell === mark)
      count++;
  });
  return count;
}
