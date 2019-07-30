import Enzyme from 'enzyme';
import React from 'react';
import {Game} from '../../../src/components/game/Game';
import {Cell} from '../../../src/components/cell/Cell';
import {EMPTY} from '../../../src/cellValue';
import * as gameMode from '../../../src/gameMode';

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
  expect(
    wrapper.containsMatchingElement(<h2>Keep playing...</h2>),
  ).toBeTruthy();
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
  expect(wrapper.containsMatchingElement(<h2>Player X wins!</h2>)).toBeTruthy();
});

it('displays game status when there is a draw', () => {
  const wrapper = Enzyme.mount(
    <Game board={Array(9).fill(EMPTY)} gameMode={gameMode.HUMANVSHUMAN} />,
  );
  wrapper.setState({grid: ['X', 'O', 'O', 'O', 'X', 'X', EMPTY, 'X', 'O']});
  wrapper
    .find(Cell)
    .at(6)
    .simulate('click');
  expect(wrapper.containsMatchingElement(<h2>It's a draw!</h2>)).toBeTruthy();
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

it('marks final position when playing a human vs random computer player game', () => {
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
});
