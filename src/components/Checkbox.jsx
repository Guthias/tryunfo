import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { title, id, onchange, checked } = this.props;

    return (
      <div>
        <label className="create-card-label-checkbox" htmlFor={ id }>
          <input
            className="create-card-checkbox"
            type="checkbox"
            checked={ checked }
            id={ id }
            data-testid={ `${id}-input` }
            onChange={ onchange }
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
  checked: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};
