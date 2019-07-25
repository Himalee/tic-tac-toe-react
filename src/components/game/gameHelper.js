import * as cellValue from '../../cellValue';
import * as gameStatus from '../../gameStatus';
import * as lineAnalysis from '../../lineAnalysis';

export function determineMark(grid) {
  let numberOfX = countMark(cellValue.X, grid);
  let numberOfO = countMark(cellValue.O, grid);
  return numberOfX > numberOfO ? cellValue.O : cellValue.X;
}

export function countMark(mark, grid) {
  let count = 0;
  grid.forEach(cell => {
    if (cell === mark) count++;
  });
  return count;
}

export function status(grid) {
  let status;
  if (lineAnalysis.isThereAWinner(grid).winnerFound) {
    status = gameStatus.winner(lineAnalysis.isThereAWinner(grid).winningMove);
  } else if (lineAnalysis.isThereADraw(grid)) {
    status = gameStatus.DRAW;
  } else {
    status = gameStatus.CONTINUE_PLAYING;
  }
  return status;
}
