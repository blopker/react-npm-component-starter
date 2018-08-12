import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MySuperCoolComponent extends Component {
  handleClick = () => {
    // console.log('Click!');
  };

  render() {
    const { color, children } = this.props;
    return (
      <button onClick={this.handleClick} style={{ color }}>
        {children}
      </button>
    );
  }
}

MySuperCoolComponent.propTypes = {
  color: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default MySuperCoolComponent;
