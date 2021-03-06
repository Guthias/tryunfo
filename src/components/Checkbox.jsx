import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends Component {
  render() {
    const { title, id, onchange, checked, dataId } = this.props;

    return (
      <div>
        <label className="create-card-label-checkbox" htmlFor={ id }>
          <input
            className="create-card-checkbox"
            type="checkbox"
            checked={ checked }
            id={ id }
            data-testid={ dataId }
            onChange={ onchange }
          />
          { title }
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onchange: PropTypes.func.isRequired,
};
