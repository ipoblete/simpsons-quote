import { getQuotes } from './Simpsons';

describe('selector test', () => {
    it('return the array of quotes which is really just one quote', () => {
        const state = {
            simpsons: {
                quote: []
            }
        };
        const result = getQuotes(state);

        expect(result).toEqual([]);
    });
})
;
