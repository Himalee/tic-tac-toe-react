import Enzyme from 'enzyme';
import React from 'react';
import { TicTacToe } from '../../../src/components/ticTacToe/TicTacToe';
import { Game } from '../../../src/components/game/Game';
import { Cell } from '../../../src/components/cell/Cell';

it('sets game mode as human vs human', () => {
  const wrapper = Enzyme.mount(<TicTacToe />);
  wrapper
    .find('button')
    .first()
    .simulate('click');
  expect(wrapper.state('gameMode')).toEqual('humanVsHuman');
  expect(wrapper.find(Game)).toHaveLength(1);
});

it('sets game mode as human vs random computer player', () => {
  const wrapper = Enzyme.mount(<TicTacToe />);
  wrapper
    .find('button')
    .at(1)
    .simulate('click');
  expect(wrapper.state('gameMode')).toEqual('humanVsRandom');
  expect(wrapper.find(Game)).toHaveLength(1);
});

it('renders game mode buttons and does not render a Game if a game mode has not been selected yet', () => {
  const wrapper = Enzyme.mount(<TicTacToe />);
  expect(wrapper.find('button')).toHaveLength(2);
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
