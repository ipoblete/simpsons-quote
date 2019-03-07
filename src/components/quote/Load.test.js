import React from 'react';
import { shallow } from 'enzyme';
import Load from './Load';

jest.mock('../../services/simpsonsApi');

describe('Load', () => {
  it('simulates click events', () => {
    const fetch = jest.fn();
    const wrapper = shallow(<Load fetch={fetch}/>);
    expect(wrapper.find('button').simulate('click'));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(wrapper.find('button').simulate('click'));
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Load fetch={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
