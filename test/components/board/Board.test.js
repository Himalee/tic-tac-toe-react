import Enzyme from 'enzyme';
import React from 'react';
import {Board} from '../../../src/components/board/Board';
import {Cell} from '../../../src/components/cell/Cell';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('displays 9 cells for a 3x3 board', () => {
  const wrapper = Enzyme.shallow(
    <Board updatedGrid={['', '', '', '', '', '', '', '', '']} />,
  );
  expect(wrapper.find(Cell)).toHaveLength(9);
});
