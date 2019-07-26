import {isMoveAvailable} from '../../../src/components/board/boardHelper';

it('checks whether move is available', () => {
  const grid = ['X', ''];
  expect(isMoveAvailable(grid, 0)).toEqual(false);
  expect(isMoveAvailable(grid, 1)).toEqual(true);
});
