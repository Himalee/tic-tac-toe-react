import Enzyme from 'enzyme';
import React from 'react';
import { Cell } from '../../../src/components/cell/Cell';

it('displays cell label', () => {
  const wrapper = Enzyme.shallow(<Cell />);
  wrapper.setProps({ cellLabel: 'X' });
  expect(wrapper.text()).toEqual('X');
});

it('should call mock function when button is clicked', () => {
  const wrapper = Enzyme.shallow(<Cell />);
  const mockFn = jest.fn();
  wrapper.setProps({ onClick: mockFn });
  wrapper.simulate('click');
  expect(mockFn).toHaveBeenCalled();
});
