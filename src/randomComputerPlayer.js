import { availableMoves } from '../src/components/board/boardHelper';

export function getRandomMove(grid) {
  return availableMoves(grid)[
    Math.floor(Math.random() * availableMoves(grid).length)
  ];
}
