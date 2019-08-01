import * as randomComputerPlayer from '../src/randomComputerPlayer';
import { EMPTY } from '../src/cellValue';

it('gets valid random move', () => {
  const grid = ['X', 'X', 'X', 'O', 'O', EMPTY];
  expect(randomComputerPlayer.getRandomMove(grid)).toEqual(5);
});
