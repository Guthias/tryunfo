import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div>
        <label htmlFor="nome-do-input">
          Titulo do Input
          <input type="text" />
        </label>
      </div>
    );
  }
}
