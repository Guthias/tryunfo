import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
  render() {
    return (
      <form>
        <Input title="Nome" id="name" />
        <Input type="textarea" title="Descrição" id="description" />
        <Input type="number" title="Attr01" id="attr1" />
        <Input type="number" title="Attr02" id="attr2" />
        <Input type="number" title="Attr03" id="attr3" />
        <Input title="Imagem" id="image" />
      </form>
    );
  }
}
