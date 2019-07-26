import * as cellValue from '../src/cellValue';
import * as gameHelper from '../src/components/game/gameHelper';

export function isThereAWinner(grid) {
  let winningResults = {winnerFound: false, winningMove: null};
  winningLines(grid).forEach(line => {
    const potentialWinningLine = markedLine(line, grid);
    if (
      potentialWinningLine.every(cell =>
        isThereAWinningLine(cell, potentialWinningLine),
      )
    )
      winningResults = {
        winnerFound: true,
        winningMove: potentialWinningLine[0],
      };
  });
  return winningResults;
}

export function isThereADraw(grid) {
  const numberOfEmptyCells = gameHelper.countMark(cellValue.EMPTY, grid);
  return numberOfEmptyCells === 0 && !isThereAWinner(grid).winnerFound;
}

export function isGameOver(grid) {
  return isThereAWinner(grid).winnerFound || isThereADraw(grid);
}

function markedLine(line, grid) {
  let markedLine = [];
  line.forEach(index => {
    markedLine.push(grid[index]);
  });
  return markedLine;
}

function isThereAWinningLine(cell, line) {
  return cell === line[0] && cell !== cellValue.EMPTY;
}

function winningLines(grid) {
  return horizontalLines(grid).concat(verticalLines(grid), diagonalLines(grid));
}

function horizontalLines(grid) {
  const listOfIndex = createListOfIndex(grid);
  const size = gridDimension(grid);
  return chunkArrayInGroups(listOfIndex, size, 0);
}

function createListOfIndex(grid) {
  return Array.from(Array(grid.length).keys());
}

function gridDimension(grid) {
  return Math.sqrt(grid.length);
}

function verticalLines(grid) {
  return transpose(horizontalLines(grid));
}

function transpose(lines) {
  return lines[0].map((col, index) => lines.map(row => row[index]));
}

function diagonalLines(grid) {
  const size = gridDimension(grid);
  return [
    diagonalLine(grid, 0, size + 1),
    diagonalLine(grid, size - 1, size - 1),
  ];
}

function diagonalLine(grid, firstIndex, increaseIndexBy) {
  let diagonal = [];
  const listOfIndex = createListOfIndex(grid);
  const size = gridDimension(grid);
  while (diagonal.length < size) {
    diagonal.push(listOfIndex[firstIndex]);
    firstIndex += increaseIndexBy;
  }
  return diagonal;
}

function chunkArrayInGroups(grid, size, startingIndex) {
  let lines = [];
  for (let i = startingIndex; i < grid.length; i += size) {
    lines.push(grid.slice(i, i + size));
  }
  return lines;
}
