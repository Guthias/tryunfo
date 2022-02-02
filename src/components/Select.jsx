import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { id, title, options, selected, onchange, dataId } = this.props;

    return (
      <div>
        <label className="create-card-label" htmlFor={ id }>
          { title }
          <select
            className="create-card-select"
            id={ id }
            value={ selected }
            data-testid={ dataId }
            onChange={ onchange }
          >
            { options.map(({ value: optValue, text }) => (
              <option key={ optValue } value={ optValue }>{ text }</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};
