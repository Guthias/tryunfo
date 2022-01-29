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
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="create-card-area">
        <Input
          title="Nome"
          id="name"
          value={ cardName }
          onchange={ onInputChange }
        />
        <Input
          type="textarea"
          title="Descrição"
          id="description"
          value={ cardDescription }
          onchange={ onInputChange }
        />
        <Input
          type="number"
          title="Attr01"
          id="attr1"
          inline
          value={ cardAttr1 }
          onchange={ onInputChange }
        />
        <Input
          type="number"
          title="Attr02"
          id="attr2"
          inline
          value={ cardAttr2 }
          onchange={ onInputChange }
        />
        <Input
          type="number"
          title="Attr03"
          id="attr3"
          inline
          value={ cardAttr3 }
          onchange={ onInputChange }
        />
        <Input
          title="Imagem"
          id="image"
          inline
          value={ cardImage }
          onchange={ onInputChange }
        />
        <Select
          title="Raridade"
          id="rare"
          value={ cardRare }
          options={ selectOptions }
        />
        <Checkbox
          title="Super Trunfo"
          value={ cardTrunfo }
          onchange={ onInputChange }
          id="trunfo"
        />
        <button
          className="form-button"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}
