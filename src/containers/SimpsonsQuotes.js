import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quote from '../components/quote/Quote';
import { connect } from 'react-redux';
import { getQuote, getCharacterImage, getCharacterName } from '../selectors/simpsons';
import { fetchQuote } from '../actions/simpsons';

class SimpsonsQuotes extends PureComponent {
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
      <Quote { ...this.props }/>
    );
  }
}

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterImage: getCharacterImage(state),
  characterName: getCharacterName(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuotes);
