import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';
import {
  getQuote,
  getName,
  getImage
} from '../../selectors/simpsons';
import { fetchFacts } from '../../actions/simpsons';

class SimpsonsQuote extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }
  
  render() {
    const { image, name, quote } = this.props;
    return <Quote
      image={image}
      name={name}
      quote={quote}
    />;
  }
}

const mapStateToProps = state => {
  return ({
    quote: getQuote(state),
    name: getName(state),
    image: getImage(state)
  });
};

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFacts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
