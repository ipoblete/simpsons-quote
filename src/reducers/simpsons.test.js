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

  it('updates character name', () => {
    const action = {
      type: 'UPDATE_NAME',
      payload: 'Marge Simpson'
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      charName: 'Marge Simpson'
    });
  });

  it('updates character image', () => {
    const action = {
      type: 'UPDATE_IMAGE',
      payload: 'marge.com'
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      charImage: 'marge.com'
    });
  });
});
