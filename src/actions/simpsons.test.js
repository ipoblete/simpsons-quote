import {
  updateQuote,
  updateName,
  updateImage
} from './simpsons';

describe('actions', () => {
  it('returns action with quote', () => {
    expect(updateQuote('blah')).toEqual({
      type: 'UPDATE_QUOTE',
      payload: 'blah'
    });
  });

  it('returns action with name', () => {
    expect(updateName('Marge Simpson')).toEqual({
      type: 'UPDATE_NAME',
      payload: 'Marge Simpson'
    });
  });

  it('returns action with image', () => {
    expect(updateImage('marge.com')).toEqual({
      type: 'UPDATE_IMAGE',
      payload: 'marge.com'
    });
  });
});
