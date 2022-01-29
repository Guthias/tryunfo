import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { title, id, type } = this.props;

    return (
      <div>
        <label className="create-card-label" htmlFor={ id }>
          { title }

          {
            type === 'textarea'
              ? <textarea className="create-card-textarea" id={ id } data-testid={ `${id}-input` } />
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
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
