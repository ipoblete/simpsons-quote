import reducer from './simpsons';
import { FETCH_QUOTE, FETCH_QUOTES_LOADING } from '../actions/simpsons';

describe('simpsons reducer', () => {
  it('can fetch quotes from state', () => {
    const state = {
      quote: 'i am a quote',
      loading: false
    };

    const reducerQuote = reducer(state, {
      type: FETCH_QUOTE,
      payload: [{
        quote: 'i am a quote',
        loading: false
      }]
    });
    expect(reducerQuote).toEqual({ quote: 'i am a quote',
      loading: false });
  });

  it('can fetch loading from state', () => {
    const state = {
      quote: 'i am a quote',
      loading: false
    };
    const reducerLoading = reducer(state, {
      type: FETCH_QUOTES_LOADING,
      payload: {
        quote: 'i am a quote',
        loading: true
      }
    });
    expect(reducerLoading).toEqual({ quote: 'i am a quote', loading: true });
  });
});
