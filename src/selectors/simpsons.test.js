import {
  getQuote,
  getName,
  getImage
} from './simpsons';

describe('selectors', () => {
  let state = null;

  beforeEach(() => {
    state = {
      simpsons: {
        quote: 'blah',
        name: 'Bart Simpson',
        image: 'bart.com'
      }
    };
  });

  it('returns list of quotes', () => {
    expect(getQuote(state)).toEqual('blah');
  });

  it('returns name', () => {
    expect(getName(state)).toEqual('Bart Simpson');
  });

  it('returns name', () => {
    expect(getImage(state)).toEqual('bart.com');
  });
});
