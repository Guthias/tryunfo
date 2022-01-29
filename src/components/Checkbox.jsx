import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { title, id } = this.props;

    return (
      <div>
        <label className="create-card-label-checkbox" htmlFor={ id }>
          <input
            className="create-card-checkbox"
            type="checkbox"
            id={ id }
            data-testid={ `${id}-input` }
          />
          { title }
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
