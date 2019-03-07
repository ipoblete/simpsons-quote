import {
  fetchFacts
} from './simpsons';

jest.mock('../services/simpsonsApi');

describe('actions', () => {
  it('returns action with fetchInfo', () => {
    expect(fetchFacts()).toEqual({
      type: 'FETCH_FACTS',
      payload: expect.any(Promise)
    });
  });
});
