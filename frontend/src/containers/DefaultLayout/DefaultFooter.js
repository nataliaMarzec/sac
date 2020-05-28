import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://coreui.io">CoreUI</a> &copy; 2020 creativeLabs.</span>

        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>

        <span className="ml-auto">Powered by <a href="https://nataliamarzec.github.io/sac/">SAC Proyecto Final</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
