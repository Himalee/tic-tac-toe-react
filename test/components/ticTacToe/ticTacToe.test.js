import Enzyme from 'enzyme';
import React from 'react';
import { TicTacToe } from '../../../src/components/ticTacToe/TicTacToe';

it('displays 3 game mode buttons label', () => {
  const wrapper = Enzyme.shallow(<TicTacToe />);
  expect(wrapper.find('button')).toHaveLength(3);
});

it('displays game mode buttons labels', () => {
  const wrapper = Enzyme.shallow(<TicTacToe />);
  expect(wrapper.text()).toEqual('HumanRandomHard');
});

it('should call mock function when button is clicked', () => {
  const wrapper = Enzyme.shallow(<TicTacToe />);
  const mockFn = jest.fn();
  wrapper.setProps({ handleGameModeClick: mockFn });
  wrapper
    .find('button')
    .first()
    .simulate('click');
  expect(mockFn).toHaveBeenCalled();
});
