import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware/index';
import { getQuotePromise, FETCH_QUOTE } from './Simpsons';
jest.mock('../services/simpsonsApi.js');

describe('some description', () => {
    it('does things', done => {
        const reducer = jest.fn();
        const store = createStore(
            reducer, 
            applyMiddleware(...middleware)
        );
        store.dispatch(getQuotePromise(10));
        setTimeout(() => {
            expect(reducer).toHaveBeenCalledWith(undefined, {
                type: FETCH_QUOTE,
                payload: ['my quote']
            });
            done();
        }, 500);
    });
});
