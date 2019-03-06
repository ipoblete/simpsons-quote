import { connect } from 'react-redux';
import { getQuote, getCharacterName, getCharacterImage, isLoading } from '../../selectors/simpsons';
import { fetchQuote } from '../../actions/simpsons';
import { withFetch } from '../../components/withFetch';
import Quote from '../../components/quote/Quote';

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getCharacterImage(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Quote));

