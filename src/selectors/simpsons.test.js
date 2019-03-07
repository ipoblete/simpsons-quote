import { 
  getQuote, 
  getCharacterName,
  getCharacterImage,
  isLoading, 
  // getCharacterImage, 
  // isLoading 
} from './simpsons';

describe('simpsons selectors test', () => {
  it('can get a quote from state', () => {
    const state = {
      simpsons: {
        quote: 'i am a quote'
      }
    };

    const selectedQuote = getQuote(state);
    expect(selectedQuote).toEqual('i am a quote');
  });

  it('can get a character name from state', () => {
    const state = {
      simpsons: {
        characterName: 'name mcname'
      }
    };
    const selectedCharacterName = getCharacterName(state);
    expect(selectedCharacterName).toEqual('name mcname');
  });

  it('can get a character image from state', () => {
    const state = {
      simpsons: {
        characterImage: 'img'
      }
    };

    const selectedCharacterImg = getCharacterImage(state);
    expect(selectedCharacterImg).toEqual('img');
  });
  
  it('can get loading from state', () => {
    const state = {
      simpsons: {
        loading: true
      }
    };

    const selectedLoading = isLoading(state);
    expect(selectedLoading).toEqual(true);
  });
});
