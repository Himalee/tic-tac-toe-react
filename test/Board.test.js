import Enzyme from 'enzyme';
import React from 'react';
import {Board} from '../src/components/board/Board';
import {Cell} from '../src/components/cell/Cell';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('displays 9 cells for a 3x3 board', () => {
  const wrapper = Enzyme.shallow(<Board grid={Array(9).fill('')}/>);
  expect(wrapper.find(Cell)).toHaveLength(9);
});

it('marks board with X on click', () => {
  const wrapper = Enzyme.shallow(<Board />);
  wrapper.setState({grid: ['', '', '', '', '', '', '', '', ''] });
  wrapper.find(Cell).first().simulate('click');
  expect(wrapper.state('grid')).toEqual(['X', '', '', '', '', '', '', '', '']);
});

it('does not allow to pick a cell that has already been chosen', () => {
  const wrapper = Enzyme.shallow(<Board />);
  wrapper.setState({grid: ['O', '', '', '', '', '', '', '', ''] });
  wrapper.find(Cell).first().simulate('click');
  expect(wrapper.state('grid')).toEqual(['O', '', '', '', '', '', '', '', '']);
});
