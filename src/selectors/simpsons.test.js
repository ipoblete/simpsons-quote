import {
  getQuote
} from './simpsons';

describe('selectors', () => {
  let state = null;

  beforeEach(() => {
    state = {
      simpsons: {
        quote: 'blah',
        charName: 'Bart Simpson',
        charImage: 'image.com'
      }
    };
  });

  it('returns list of quotes', () => {
    expect(getQuote(state)).toEqual('blah');
  });
});
