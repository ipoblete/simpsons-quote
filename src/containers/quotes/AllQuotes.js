import Quotes from '../../components/quotes/Quotes';
import { getQuotes, isLoading } from '../../selectors/Simpsons';
import { connect } from 'react-redux';
import { withFetch } from '../../components/withFetch';
import { getQuotePromise } from '../../actions/Simpsons';

const mapStateToProps = state => ({
    quotes: getQuotes(state),
    isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
    fetch() {
        dispatch(getQuotePromise());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withFetch(Quotes));
