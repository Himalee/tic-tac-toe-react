import * as gameHelper from '../../../src/components/game/gameHelper';

it('determines next players mark', () => {
  const grid = [
    'X', '', 'X',
    'O', '', '',
    '', '', '']
  expect(gameHelper.determineMark(grid)).toEqual('O');
})

it('determines game status when game has not reached an end state', () => {
  const grid = [
    'X', '', 'X',
    'O', '', '',
    '', '', '']
  expect(gameHelper.status(grid)).toEqual('Keep playing...');
})

it('determines game status when player X wins', () => {
  const grid = [
    'X', 'X', 'X',
    'O', '', '',
    '', '', '']
  expect(gameHelper.status(grid)).toEqual('Player X wins!');
})

it('determines game status when player O wins', () => {
  const grid = [
    'X', 'X', 'O',
    'O', 'O', '',
    'O', '', '']
  expect(gameHelper.status(grid)).toEqual('Player O wins!');
})

it('determines game status when there is a draw', () => {
  const grid = [
    'X', 'X', 'O',
    'O', 'O', 'X',
    'X', 'O', 'O']
  expect(gameHelper.status(grid)).toEqual('It\'s a draw!');
})
