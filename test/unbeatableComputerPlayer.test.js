import * as unbeatableComputerPlayer from '../src/unbeatableComputerPlayer';
import { EMPTY } from '../src/cellValue';

it('player X returns last remaining move', () => {
  const grid = ['X', 'O', 'X', 'O', 'O', EMPTY, 'O', 'X', 'X'];
  expect(unbeatableComputerPlayer.getMove(grid, 1, 'X')).toEqual(5);
});

it('player O returns winning move with 2 moves left', () => {
  const grid = ['X', 'O', 'X', 'O', 'O', EMPTY, EMPTY, 'X', 'X'];
  expect(unbeatableComputerPlayer.getMove(grid, 1, 'O')).toEqual(5);
});

it('player X returns winning move with 3 moves left', () => {
  const grid = ['O', 'X', EMPTY, 'X', 'X', EMPTY, EMPTY, 'O', 'O'];
  expect(unbeatableComputerPlayer.getMove(grid, 1, 'X')).toEqual(5);
});

it('player X returns winning move with 5 moves remaining', () => {
  const grid = ['O', 'X', EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, 'X', 'O'];
  expect(unbeatableComputerPlayer.getMove(grid, 1, 'X')).toEqual(4);
});

it('player X blocks player O from winning', () => {
  const grid = ['O', 'O', EMPTY, 'X', EMPTY, EMPTY, EMPTY, 'X', EMPTY];
  expect(unbeatableComputerPlayer.getMove(grid, 1, 'X')).toEqual(2);
});

it('player O blocks player X from winning', () => {
  const grid = ['X', 'X', EMPTY, 'O', EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
  expect(unbeatableComputerPlayer.getMove(grid, 1, 'O')).toEqual(2);
});

it('player X chooses to win over blocking opponent from winning', () => {
  const grid = ['X', 'X', EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, 'O', 'O'];
  expect(unbeatableComputerPlayer.getMove(grid, 1, 'X')).toEqual(2);
});
