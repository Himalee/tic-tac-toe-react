import * as boardHelper from '../src/components/board/boardHelper';

it('returns list of available moves', () => {
  const grid = ['X', ''];
  expect(boardHelper.isMoveAvailable(grid, 0)).toEqual(false);
  expect(boardHelper.isMoveAvailable(grid, 1)).toEqual(true);
})
