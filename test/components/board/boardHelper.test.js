import * as boardHelper from '../../../src/components/board/boardHelper';

it('checks whether move is available', () => {
  const grid = ['X', ''];
  expect(boardHelper.isMoveAvailable(grid, 0)).toEqual(false);
  expect(boardHelper.isMoveAvailable(grid, 1)).toEqual(true);
})
