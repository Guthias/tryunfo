import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {
  render() {
    return (
      <form>
        <Input title="Nome" id="name" />
        <Input title="Descrição" id="description" />
        <Input title="Attr01" id="attr1" />
        <Input title="Attr02" id="attr2" />
        <Input title="Attr03" id="attr3" />
        <Input title="Imagem" id="image" />
      </form>
    );
  }
}
