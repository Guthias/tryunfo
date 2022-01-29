import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';

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
        <Input type="number" title="Attr01" id="attr1" inline />
        <Input type="number" title="Attr02" id="attr2" inline />
        <Input type="number" title="Attr03" id="attr3" inline />
        <Input title="Imagem" id="image" inline />
        <Select title="Raridade" id="rare" options={ selectOptions } />
        <Checkbox title="Super Trunfo" id="trunfo" />
        <button
          className="form-button"
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}
