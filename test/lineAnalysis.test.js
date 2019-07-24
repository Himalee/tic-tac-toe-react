import * as lineAnalysis from '../src/lineAnalysis';

it('returns true if X wins', () => {
  const grid=[
    'X', 'X', 'X',
    'O', 'O', '',
    '', '', '']
  expect(lineAnalysis.isThereAWinner(grid)).toEqual({winnerFound:true, winningMove: 'X'});
})

it('returns true if O wins', () => {
  const grid=[
    'O', 'O', 'O',
    'X', 'X', '',
    '', '', '']
  expect(lineAnalysis.isThereAWinner(grid)).toEqual({winnerFound:true, winningMove: 'O'});
})

it('returns true if there is a draw', () => {
  const grid=[
    'O', 'O', 'X',
    'X', 'X', 'O',
    'O', 'X', 'O']
  expect(lineAnalysis.isThereADraw(grid)).toEqual(true);
})

it('returns false if there is not a draw and the board is full', () => {
  const grid=[
    'O', 'X', 'X',
    'X', 'X', 'O',
    'O', 'X', 'O']
  expect(lineAnalysis.isThereADraw(grid)).toEqual(false);
})
