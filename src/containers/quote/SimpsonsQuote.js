import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuote } from '../../actions/simpsons';
import { getQuote, getCharName, getCharImage } from '../../selectors/simpsons';
import Quote from '../../components/quote/Quote';

class SimpsonsQuote extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      < >
        <button onClick={() => this.props.fetch()}>Refresh</button>
        <Quote {...this.props}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharName(state),
  characterImage: getCharImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
