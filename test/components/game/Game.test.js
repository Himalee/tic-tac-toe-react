import Enzyme from 'enzyme';
import React from 'react';
import {Game} from '../../../src/components/game/Game';
import {Cell} from '../../../src/components/cell/Cell';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('marks board with X on click', () => {
  const wrapper = Enzyme.mount(<Game />);
  wrapper.find(Cell).first().simulate('click');
  expect(wrapper.state('grid')).toEqual(['X', '', '', '', '', '', '', '', '']);
});

it('does not allow to pick a cell that has already been chosen', () => {
  const wrapper = Enzyme.mount(<Game />);
  wrapper.setState({grid: ['O', '', '', '', '', '', '', '', ''] });
  wrapper.find(Cell).first().simulate('click');
  expect(wrapper.state('grid')).toEqual(['O', '', '', '', '', '', '', '', '']);
});

it('switches mark when marking the board', () => {
  const wrapper = Enzyme.mount(<Game />);
  wrapper.find(Cell).first().simulate('click');
  wrapper.find(Cell).at(1).simulate('click');
  expect(wrapper.state('grid')).toEqual(['X', "O", "", "", "", "", "", "", ""]);
});
