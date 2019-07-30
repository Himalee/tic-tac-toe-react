import Enzyme from 'enzyme';
import React from 'react';
import {Board} from '../../../src/components/board/Board';
import {Cell} from '../../../src/components/cell/Cell';
import {EMPTY} from '../../../src/cellValue';

it('displays 9 cells for a 3x3 board', () => {
  const wrapper = Enzyme.shallow(<Board updatedGrid={Array(9).fill(EMPTY)} />);
  expect(wrapper.find(Cell)).toHaveLength(9);
});
