import Enzyme from 'enzyme';
import React from 'react';
import {TicTacToe} from '../../../src/components/ticTacToe/TicTacToe';
import {Game} from '../../../src/components/game/Game';

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
