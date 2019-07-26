import {isMoveAvailable} from '../../../src/components/board/boardHelper';
import {EMPTY} from '../../../src/cellValue';

it('checks whether move is available', () => {
  const grid = ['X', EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
  expect(isMoveAvailable(grid, 0)).toEqual(false);
  expect(isMoveAvailable(grid, 1)).toEqual(true);
});
