import { connect } from 'react-redux';
import { fetchQuote } from '../../actions/simpsons';
import { getCharacterImage, getCharacterName, getQuote, isLoading } from '../../selectors/simpsons';
import Quote from '../../components/quote/Quote';
import { withFetch } from '../../components/quote/withFetch';

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterImage: getCharacterImage(state),
  characterName: getCharacterName(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Quote));
