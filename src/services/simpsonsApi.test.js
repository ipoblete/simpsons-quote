const { getQuote } = require('./simpsonsApi');

jest.mock('./simpsonsApi');

describe('simpsonsApi service', () => {
  it('gets a quote', () => {
    return getQuote()
      .then(quote => {
        expect(quote).toEqual('In theory, Communism works! In theory.');
      });
  });
});
