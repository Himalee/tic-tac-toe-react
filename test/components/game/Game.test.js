import Enzyme from 'enzyme';
import React from 'react';
import {Game} from '../../../src/components/game/Game';
import {Cell} from '../../../src/components/cell/Cell';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('marks board with X on click', () => {
  const wrapper = Enzyme.mount(<Game boardSize={9} />);
  wrapper.find(Cell).first().simulate('click');
  expect(wrapper.state('grid')).toEqual(['X', '', '', '', '', '', '', '', '']);
});

it('does not allow user to pick a cell that has already been chosen', () => {
  const wrapper = Enzyme.mount(<Game boardSize={9}/>);
  wrapper.setState({grid: ['O', '', '', '', '', '', '', '', ''] });
  wrapper.find(Cell).first().simulate('click');
  expect(wrapper.state('grid')).toEqual(['O', '', '', '', '', '', '', '', '']);
});

it('switches mark when marking the board', () => {
  const wrapper = Enzyme.mount(<Game boardSize={9}/>);
  wrapper.find(Cell).first().simulate('click');
  wrapper.find(Cell).at(1).simulate('click');
  expect(wrapper.state('grid')).toEqual(['X', 'O', '', '', '', '', '', '', '']);
});

it('displays game status when the game is still in play', () => {
  const wrapper = Enzyme.mount(<Game boardSize={9}/>);
  wrapper.find(Cell).first().simulate('click');
  wrapper.find(Cell).at(1).simulate('click');
  expect(wrapper.containsMatchingElement(<h2>Keep playing...</h2>)).toBeTruthy();
});

it('displays game status when the player X wins', () => {
  const wrapper = Enzyme.mount(<Game boardSize={9}/>);
  wrapper.setState({grid:[
    'X', 'X', '',
    'O', '', 'O',
    '', '', '']});
  wrapper.find(Cell).at(2).simulate('click');
  expect(wrapper.containsMatchingElement(<h2>Player X wins!</h2>)).toBeTruthy();
});

it('displays game status when there is a draw', () => {
  const wrapper = Enzyme.mount(<Game boardSize={9}/>);
  wrapper.setState({grid:[
    'X', 'O', 'O',
    'O', 'X', 'X',
    '', 'X', 'O']});
  wrapper.find(Cell).at(6).simulate('click');
  expect(wrapper.containsMatchingElement(<h2>It's a draw!</h2>)).toBeTruthy();
});

it('does not allow user to pick a cell if game has reached a terminal state', () => {
  const wrapper = Enzyme.mount(<Game boardSize={9}/>);
  wrapper.setState({grid:[
    'X', 'X', 'X',
    '', '', 'O',
    '', '', 'O']});
  wrapper.find(Cell).at(6).simulate('click');
  expect(wrapper.state('grid')).toEqual(['X', 'X', 'X', '', '', 'O', '', '', 'O']);
});
