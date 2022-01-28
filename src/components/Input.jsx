import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { title, id } = this.props;

    return (
      <div>
        <label htmlFor={ id }>
          { title }
          <input type="text" id={ id } data-testid={ `${id}-input` } />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
