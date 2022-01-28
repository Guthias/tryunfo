import React, { Component } from 'react';

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
