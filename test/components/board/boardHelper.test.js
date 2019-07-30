import * as boardHelper from '../../../src/components/board/boardHelper';
import { EMPTY } from '../../../src/cellValue';

it('checks whether move is available', () => {
  const grid = ['X', EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
  expect(boardHelper.isMoveAvailable(grid, 0)).toEqual(false);
  expect(boardHelper.isMoveAvailable(grid, 1)).toEqual(true);
});

it('gets remaining available moves', () => {
  const grid = ['X', 'O', 'X', EMPTY, EMPTY, 'O', EMPTY, EMPTY, EMPTY];
  expect(boardHelper.availableMoves(grid)).toEqual([3, 4, 6, 7, 8]);
});
