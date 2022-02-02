import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  isInline(inline) {
    if (inline === true) return 'inline';
  }

  render() {
    const { title, id, type, inline, dataId, value, onchange } = this.props;

    return (
      <div>
        <label className={ `create-card-label ${this.isInline(inline)}` } htmlFor={ id }>
          <span className="create-card-label-content">
            { title }
          </span>

          {
            type === 'textarea'
              ? (
                <textarea
                  className="create-card-textarea"
                  id={ id }
                  value={ value }
                  data-testid={ dataId }
                  onChange={ onchange }
                />)
              : (
                <input
                  className="create-card-input"
                  type={ type }
                  value={ value }
                  id={ id }
                  onChange={ onchange }
                  data-testid={ dataId }
                />)
          }
        </label>
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  inline: false,
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};
