import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchQuote, FETCH_QUOTE } from './simpsons';

jest.mock('../services/simpsonsApi.js');

describe('simpsons actions', () => {
  it(`fetchQuote creates an action where the payload 
      is a quote derived from a promise`, done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    store.dispatch(fetchQuote());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_START'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_QUOTE,
        payload: 'In theory, Communism works! In theory.'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_END'
      });
      done();
    }, 500);
  });
});
