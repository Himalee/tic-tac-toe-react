import Enzyme from 'enzyme';
import React from 'react';
import { Game } from '../../../src/components/game/Game';
import { Cell } from '../../../src/components/cell/Cell';
import { EMPTY } from '../../../src/cellValue';
import * as gameMode from '../../../src/gameMode';

export const LENGTH_OF_PAUSE_AFTER_MOVE = 500;

it('marks board with X on click', () => {
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSHUMAN} />,
  );
  wrapper
    .find(Cell)
    .first()
    .simulate('click');
  expect(wrapper.state('grid')).toEqual([
    'X',
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ]);
});

it('does not allow user to pick a cell that has already been chosen', () => {
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSHUMAN} />,
  );
  wrapper.setState({
    grid: ['O', EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  });
  wrapper
    .find(Cell)
    .first()
    .simulate('click');
  expect(wrapper.state('grid')).toEqual([
    'O',
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ]);
});

it('switches mark when marking the board', () => {
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSHUMAN} />,
  );
  wrapper
    .find(Cell)
    .first()
    .simulate('click');
  wrapper
    .find(Cell)
    .at(1)
    .simulate('click');
  expect(wrapper.state('grid')).toEqual([
    'X',
    'O',
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ]);
});

it('displays game status when the game is still in play', () => {
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSHUMAN} />,
  );
  wrapper
    .find(Cell)
    .first()
    .simulate('click');
  wrapper
    .find(Cell)
    .at(1)
    .simulate('click');
  expect(wrapper.containsMatchingElement(<p>Player X's turn</p>)).toBeTruthy();
});

it('displays game status when the player X wins', () => {
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSHUMAN} />,
  );
  wrapper.setState({
    grid: ['X', 'X', EMPTY, 'O', EMPTY, 'O', EMPTY, EMPTY, EMPTY],
  });
  wrapper
    .find(Cell)
    .at(2)
    .simulate('click');
  expect(wrapper.containsMatchingElement(<p>Player X wins!</p>)).toBeTruthy();
});

it('displays game status when there is a draw', () => {
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSHUMAN} />,
  );
  wrapper.setState({ grid: ['X', 'O', 'O', 'O', 'X', 'X', EMPTY, 'X', 'O'] });
  wrapper
    .find(Cell)
    .at(6)
    .simulate('click');
  expect(wrapper.containsMatchingElement(<p>It's a draw!</p>)).toBeTruthy();
});

it('does not allow user to pick a cell if game has reached a terminal state', () => {
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSHUMAN} />,
  );
  wrapper.setState({
    grid: ['X', 'X', 'X', EMPTY, EMPTY, 'O', EMPTY, EMPTY, 'O'],
  });
  wrapper
    .find(Cell)
    .at(6)
    .simulate('click');
  expect(wrapper.state('grid')).toEqual([
    'X',
    'X',
    'X',
    EMPTY,
    EMPTY,
    'O',
    EMPTY,
    EMPTY,
    'O',
  ]);
});

it('random computer player marks final position', () => {
  jest.useFakeTimers();
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSRANDOM} />,
  );
  wrapper.setState({
    grid: ['X', 'O', 'X', 'O', 'O', EMPTY, 'X', 'X', EMPTY],
  });
  wrapper
    .find(Cell)
    .at(8)
    .simulate('click');
  setTimeout(() => {
    expect(wrapper.state('grid')).toEqual([
      'X',
      'O',
      'X',
      'O',
      'O',
      'X',
      'X',
      'X',
      'O',
    ]);
  }, LENGTH_OF_PAUSE_AFTER_MOVE);
  jest.runAllTimers();
});

it('random computer player does not mark the board if the game has completed', () => {
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSRANDOM} />,
  );
  wrapper.setState({
    grid: ['X', EMPTY, 'X', 'O', EMPTY, 'O', EMPTY, EMPTY, EMPTY],
  });
  wrapper
    .find(Cell)
    .at(1)
    .simulate('click');
  expect(wrapper.state('grid')).toEqual([
    'X',
    'X',
    'X',
    'O',
    EMPTY,
    'O',
    EMPTY,
    EMPTY,
    EMPTY,
  ]);
});

it('unbeatable computer player chooses winning move', () => {
  jest.useFakeTimers();
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSUNBEATABLE} />,
  );
  wrapper.setState({
    grid: ['O', 'O', EMPTY, EMPTY, 'X', EMPTY, 'X', EMPTY, EMPTY],
  });
  wrapper
    .find(Cell)
    .at(7)
    .simulate('click');
  setTimeout(() => {
    expect(wrapper.state('grid')).toEqual([
      'O',
      'O',
      'O',
      EMPTY,
      'X',
      EMPTY,
      'X',
      'X',
      EMPTY,
    ]);
  }, LENGTH_OF_PAUSE_AFTER_MOVE);
  jest.runAllTimers();
});

it('unbeatable computer player O blocks opponent X from winning', () => {
  jest.useFakeTimers();
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSUNBEATABLE} />,
  );
  wrapper.setState({
    grid: ['X', EMPTY, EMPTY, EMPTY, 'O', EMPTY, EMPTY, EMPTY, EMPTY],
  });
  wrapper
    .find(Cell)
    .at(1)
    .simulate('click');
  setTimeout(() => {
    expect(wrapper.state('grid')).toEqual([
      'X',
      'X',
      'O',
      EMPTY,
      'O',
      EMPTY,
      EMPTY,
      EMPTY,
      EMPTY,
    ]);
  }, LENGTH_OF_PAUSE_AFTER_MOVE);
  jest.runAllTimers();
});

it('unbeatable computer player does not mark the board if the game has completed', () => {
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSUNBEATABLE} />,
  );
  wrapper.setState({
    grid: ['X', EMPTY, 'X', 'O', EMPTY, 'O', EMPTY, EMPTY, EMPTY],
  });
  wrapper
    .find(Cell)
    .at(1)
    .simulate('click');
  expect(wrapper.state('grid')).toEqual([
    'X',
    'X',
    'X',
    'O',
    EMPTY,
    'O',
    EMPTY,
    EMPTY,
    EMPTY,
  ]);
});
