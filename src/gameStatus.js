export const DRAW = "It's a draw!";

export function showWinner(move) {
  return `Player ${move} wins!`;
}

export function showPlayerTurn(move) {
  return `Player ${move}'s turn`;
}
