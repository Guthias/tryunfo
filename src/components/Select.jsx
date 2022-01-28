import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    const { id, title, options } = this.props;

    return (
      <div>
        <label htmlFor={ id }>
          { title }
          <select id={ id }>
            { options.map(({ value, text }) => (
              <option key={ value } value={ value }>{ text }</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}
