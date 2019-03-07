import reducer from './simpsons';

describe('reducers', () => {
  let state = {};

  beforeEach(() => {
    state = {
      quote: 'blah',
      name: 'Bart Simpson',
      image: 'bart.com'
    };
  });

  it('updates state', () => {
    const payload = {
      quote: 'blah2',
      character: 'Marge Simpson',
      image: 'marge.com'
    };
    const action = {
      type: 'FETCH_FACTS',
      payload
    };
    const result = reducer(state, action);

    expect(result).toEqual({
      ...state,
      quote: 'blah2',
      name: 'Marge Simpson',
      image: 'marge.com'
    });
  });
});
