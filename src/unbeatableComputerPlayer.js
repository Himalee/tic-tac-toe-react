import { availableMoves } from '../src/components/board/boardHelper';
import * as lineAnalysis from '../src/lineAnalysis';

export const STARTINGDEPTH = 1;

export function getMove(grid, depth, mark) {
  let scores = {};
  if (lineAnalysis.isThereADraw(grid)) {
    return 0;
  } else if (lineAnalysis.checkForWinner(grid).winnerFound) {
    return -(1000 / depth);
  }
  availableMoves(grid).forEach(move => {
    let newGrid = markGrid(grid.slice(), move, mark);
    let opponentMark = switchMarks(mark);
    scores[move] = -getMove(newGrid, depth + 1, opponentMark);
  });
  return getBestMoveOrBestScore(scores, depth);
}

function getBestMoveOrBestScore(scores, depth) {
  if (depth === 1) {
    return getBestMove(scores);
  }
  return getBestScore(scores);
}

function markGrid(grid, move, mark) {
  grid[move] = mark;
  return grid;
}

function getBestScore(scores) {
  return Math.max.apply(null, Object.values(scores));
}

function getBestMove(scores) {
  return parseInt(
    Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b)),
    10,
  );
}

function switchMarks(mark) {
  return mark === 'X' ? 'O' : 'X';
}
