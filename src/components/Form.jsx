import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      <form className="create-card-form">
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
          onchange={ onInputChange }
          selected={ cardRare }
          options={ selectOptions }
        />
        <Checkbox
          title="Super Trunfo"
          checked={ cardTrunfo }
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

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
