import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Quote quote={'this is a quote'} 
        characterName={'harry'}
        characterImage={'http://image.com'}
        fetch={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
