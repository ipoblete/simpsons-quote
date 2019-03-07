import { FETCH_QUOTE, FETCH_QUOTES_LOADING, fetchQuote } from './simpsons';

jest.mock('../services/simpsonsApi.js');

describe('simpsons action', () => {
  it('can fetch quotesInfo', () => {
    const quoteAction = fetchQuote();
    expect(quoteAction).toEqual({
      type: FETCH_QUOTE,
      loadStart: FETCH_QUOTES_LOADING,
      payload: Promise.resolve({
        'quote': 'I hope I didn\'t brain my damage.',
        'character': 'Homer Simpson',
        'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
        'characterDirection': 'Right'
      })
    });
  });
});
