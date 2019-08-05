import Enzyme from 'enzyme';
import React from 'react';
import { TicTacToe } from '../../../src/components/ticTacToe/TicTacToe';
import { Game } from '../../../src/components/game/Game';
import { Cell } from '../../../src/components/cell/Cell';
import * as gameMode from '../../../src/gameMode';

it('sets game mode as human vs human', () => {
  const wrapper = Enzyme.mount(<TicTacToe />);
  wrapper
    .find('button')
    .first()
    .simulate('click');
  expect(wrapper.state('gameMode')).toEqual(gameMode.HUMANVSHUMAN);
  expect(wrapper.find(Game)).toHaveLength(1);
});

it('sets game mode as human vs random computer player', () => {
  const wrapper = Enzyme.mount(<TicTacToe />);
  wrapper
    .find('button')
    .at(1)
    .simulate('click');
  expect(wrapper.state('gameMode')).toEqual(gameMode.HUMANVSRANDOM);
  expect(wrapper.find(Game)).toHaveLength(1);
});

it('sets game mode as human vs unbeatable computer player', () => {
  const wrapper = Enzyme.mount(<TicTacToe />);
  wrapper
    .find('button')
    .at(2)
    .simulate('click');
  expect(wrapper.state('gameMode')).toEqual(gameMode.HUMANVSUNBEATABLE);
  expect(wrapper.find(Game)).toHaveLength(1);
});

it('renders game mode buttons and does not render a Game if a game mode has not been selected yet', () => {
  const wrapper = Enzyme.mount(<TicTacToe />);
  expect(wrapper.find('button')).toHaveLength(3);
  expect(wrapper.find(Game)).toHaveLength(0);
});

it('renders a Game and does not render game mode buttons if a game mode has been selected', () => {
  const wrapper = Enzyme.mount(<TicTacToe />);
  wrapper
    .find('button')
    .at(1)
    .simulate('click');
  expect(wrapper.find(Game)).toHaveLength(1);
  expect(wrapper.find(Cell)).toHaveLength(9);
});
