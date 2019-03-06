import {
  updateQuote
} from './simpsons';

describe('actions', () => {
  it('returns action with quote', () => {
    expect(updateQuote('blah')).toEqual({
      type: 'UPDATE_QUOTE',
      payload: 'blah'
    });
  });
});
