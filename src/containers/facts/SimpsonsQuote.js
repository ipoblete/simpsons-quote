import Quote from '../../components/quote/Quote';
import { connect } from 'react-redux';
import { getQuote, getCharacterImage, getCharacterName, isLoading } from '../../selectors/simpsons';
import { fetchQuote } from '../../action/simpsons';
import { withFetch } from '../../components/quote/withFetch';

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName:  getCharacterName(state),
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
