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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="create-card-form">
        <Input
          title="Nome"
          id="cardName"
          dataId="name-input"
          value={ cardName }
          onchange={ onInputChange }
        />
        <Input
          type="textarea"
          title="Descrição"
          id="cardDescription"
          dataId="description-input"
          value={ cardDescription }
          onchange={ onInputChange }
        />
        <Input
          type="number"
          title="Attack"
          id="cardAttr1"
          dataId="attr1-input"
          inline
          value={ cardAttr1 }
          onchange={ onInputChange }
        />
        <Input
          type="number"
          title="Defense"
          id="cardAttr2"
          dataId="attr2-input"
          inline
          value={ cardAttr2 }
          onchange={ onInputChange }
        />
        <Input
          type="number"
          title="Speed"
          id="cardAttr3"
          dataId="attr3-input"
          inline
          value={ cardAttr3 }
          onchange={ onInputChange }
        />
        <Input
          title="Imagem"
          id="cardImage"
          dataId="image-input"
          value={ cardImage }
          onchange={ onInputChange }
        />
        <Select
          title="Raridade"
          id="cardRare"
          dataId="rare-input"
          onchange={ onInputChange }
          selected={ cardRare }
          options={ selectOptions }
        />
        { hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span>
          : (
            <Checkbox
              title="Super Trunfo"
              checked={ cardTrunfo }
              onchange={ onInputChange }
              id="cardTrunfo"
              dataId="trunfo-input"
            />)}
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
