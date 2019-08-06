import * as gameHelper from '../../../src/components/game/gameHelper';
import { EMPTY } from '../../../src/cellValue';

it('determines next players mark', () => {
  const grid = ['X', EMPTY, 'X', 'O', EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
  expect(gameHelper.determineMark(grid)).toEqual('O');
});

it('determines game status when game has not reached an end state', () => {
  const grid = ['X', EMPTY, 'X', 'O', EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
  expect(gameHelper.determineGameStatus(grid)).toEqual("Player O's turn");
});

it('determines game status when player X wins', () => {
  const grid = ['X', 'X', 'X', 'O', EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
  expect(gameHelper.determineGameStatus(grid)).toEqual('Player X wins!');
});

it('determines game status when player O wins', () => {
  const grid = ['X', 'X', 'O', 'O', 'O', EMPTY, 'O', EMPTY, EMPTY];
  expect(gameHelper.determineGameStatus(grid)).toEqual('Player O wins!');
});

it('determines game status when there is a draw', () => {
  const grid = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'O'];
  expect(gameHelper.determineGameStatus(grid)).toEqual("It's a draw!");
});
