import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    return (
      <div>
        <label htmlFor={ id }>
          { title }
          <select id={ id }>
            <value>Teste</value>
          </select>
        </label>
      </div>
    );
  }
}
