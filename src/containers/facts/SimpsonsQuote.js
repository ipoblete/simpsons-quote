import { connect } from 'react-redux';
import Quote from '../../components/quote/Quote';
import { fetchQuote } from '../../actions/simpsons';
import { getQuote, getCharacterName, getCharacterImage } from '../../selectors/simpsons';

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getCharacterImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote);
