import * as lineAnalysis from '../src/lineAnalysis';
import { EMPTY } from '../src/cellValue';

it('returns true if X wins', () => {
  const grid = ['X', 'X', 'X', 'O', 'O', EMPTY, EMPTY, EMPTY, EMPTY];
  expect(lineAnalysis.checkForWinner(grid)).toEqual({
    winnerFound: true,
    winningMove: 'X',
  });
});

it('returns true if O wins', () => {
  const grid = ['O', 'O', 'O', 'X', 'X', EMPTY, EMPTY, EMPTY, EMPTY];
  expect(lineAnalysis.checkForWinner(grid)).toEqual({
    winnerFound: true,
    winningMove: 'O',
  });
});

it('returns true if there is a draw', () => {
  const grid = ['O', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'];
  expect(lineAnalysis.isThereADraw(grid)).toEqual(true);
});

it('returns false if there is not a draw and the board is full', () => {
  const grid = ['O', 'X', 'X', 'X', 'X', 'O', 'O', 'X', 'O'];
  expect(lineAnalysis.isThereADraw(grid)).toEqual(false);
});
