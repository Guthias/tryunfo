import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      selectOptions: [
        {
          value: 'normal',
          text: 'Normal',
        },
        {
          value: 'raro',
          text: 'Raro',
        },
        {
          value: 'muito raro',
          text: 'Muito Raro',
        },
      ],
    };
  }

  render() {
    const { selectOptions } = this.state;
    return (
      <form className="create-card-area">
        <Input title="Nome" id="name" />
        <Input type="textarea" title="Descrição" id="description" />
        <Input type="number" title="Attr01" id="attr1" />
        <Input type="number" title="Attr02" id="attr2" />
        <Input type="number" title="Attr03" id="attr3" />
        <Input title="Imagem" id="image" />
        <Select title="Raridade" id="rare" options={ selectOptions } />
        <Input title="Super Trunfo" type="checkbox" id="trunfo" />
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
