import Enzyme from 'enzyme';
import React from 'react';
import {TicTacToe} from '../../../src/components/ticTacToe/TicTacToe';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('sets game mode as human vs human', () => {
  const wrapper = Enzyme.mount(<TicTacToe />);
  wrapper
    .find('button')
    .first()
    .simulate('click');
  expect(wrapper.state('gameMode')).toEqual('humanVsHuman');
});

it('sets game mode as human vs random computer player', () => {
  const wrapper = Enzyme.mount(<TicTacToe />);
  wrapper
    .find('button')
    .at(1)
    .simulate('click');
  expect(wrapper.state('gameMode')).toEqual('humanVsRandom');
});
