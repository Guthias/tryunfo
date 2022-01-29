import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  isInline(inline) {
    if (inline === true) return 'inline';
  }

  render() {
    const { title, id, type, inline } = this.props;

    return (
      <div>
        <label className={ `create-card-label ${this.isInline(inline)}` } htmlFor={ id }>
          { title }

          {
            type === 'textarea'
              ? (
                <textarea
                  className="create-card-textarea"
                  id={ id }
                  data-testid={ `${id}-input` }
                />)
              : (
                <input
                  className="create-card-input"
                  type={ type }
                  id={ id }
                  data-testid={ `${id}-input` }
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
  title: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};
