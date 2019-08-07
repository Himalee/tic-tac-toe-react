import Enzyme from 'enzyme';
import React from 'react';
import { GameModeSelector } from '../../../src/components/gameModeSelector/GameModeSelector';

it('displays 3 game mode buttons label', () => {
  const wrapper = Enzyme.shallow(<GameModeSelector />);
  expect(wrapper.find('button')).toHaveLength(3);
});

it('displays game mode buttons labels', () => {
  const wrapper = Enzyme.shallow(<GameModeSelector />);
  expect(wrapper.text()).toEqual('HumanRandomHard');
});

it('should call mock function when button is clicked', () => {
  const wrapper = Enzyme.shallow(<GameModeSelector />);
  const mockFn = jest.fn();
  wrapper.setProps({ handleGameModeClick: mockFn });
  wrapper
    .find('button')
    .first()
    .simulate('click');
  expect(mockFn).toHaveBeenCalled();
});
