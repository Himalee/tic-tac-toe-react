import * as gameHelper from '../src/components/game/gameHelper';

it('determines next players mark', () => {
  const grid = ['X', '', 'X', 'O', '', '', '', '', '']
  expect(gameHelper.determineMark(grid)).toEqual('O');
})
