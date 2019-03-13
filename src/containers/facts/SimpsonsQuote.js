import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quote from '../../components/quote/Quote';
import { fetchQuote } from '../../actions/simpsons';
import { getQuote, getCharacterName, getCharacterImage } from '../../selectors/simpsons';
import Load from '../../components/quote/Load';

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
      <>
        <Quote { ...this.props } />
        <Load fetch={this.props.fetch} />
      </>
    );
  }
}
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
)(SimpsonsQuote);
