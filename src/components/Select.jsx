import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { id, title, options } = this.props;

    return (
      <div>
        <label className="create-card-label" htmlFor={ id }>
          { title }
          <select className="create-card-select" id={ id } data-testid={ `${id}-input` }>
            { options.map(({ value, text }) => (
              <option key={ value } value={ value }>{ text }</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};
