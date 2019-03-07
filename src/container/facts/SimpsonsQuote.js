import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../../action/simpsons';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';

class SimpsonsQuote extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    fetchQuote: PropTypes.func.isRequired
  };

  componentDidMount() {
    const quote = this.props.quote;
    if(quote) {
      this.props.fetchQuote();
    }
  }
  render() {
    return <Quote {...this.props} />;

  }
}
const mapStateToProps = state => ({
  facts: fetchQuote(state)
});

const mapDispatchToProps = dispatch => ({
  action: dispatch()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
