import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';
import Load from '../../components/quote/Load';
import { fetchQuote } from '../../actions/simpsons';
import { getCharacterImage, getCharacterName, getQuote } from '../../selectors/simpsons';

class SimpsonsQuote extends React.PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Fragment>
        <Quote {...this.props } />
        <Load fetch={this.props.fetch} />
      </Fragment>
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
    return dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
