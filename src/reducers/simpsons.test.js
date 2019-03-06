import reducer from './simpsons';

describe('reducers', () => {
  let state = {};

  beforeEach(() => {
    state = {
      quote: 'blah',
      charName: 'Bart Simpson',
      charImage: 'bart.com'
    };
  });

  it('updates quote', () => {
    const action = {
      type: 'UPDATE_QUOTE',
      payload: 'blah shorts'
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      quote: 'blah shorts'
    });
  });
});
