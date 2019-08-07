import * as gameStatus from '../src/gameStatus';

it('displays winner', () => {
  expect(gameStatus.showWinner('X')).toEqual('Player X wins!');
});

it('displays player turn', () => {
  expect(gameStatus.showPlayerTurn('O')).toEqual("Player O's turn");
});
