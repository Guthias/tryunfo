import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardOnDeck from './CardOnDeck';

export default class Deck extends Component {
  state = {
    nameFilter: '',
    rarityFilter: '',
    trunfoFilter: false,
  };

  handdleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.id]: value,
    });
  }

  render() {
    const { nameFilter, rarityFilter, trunfoFilter } = this.state;
    const { cards, deleteCard } = this.props;
    return (
      <div className="deck-area">
        <div className="deck-card-filters">
          <h2>Todas as Cartas</h2>

          <h3>Filtros de Busca</h3>
          <input
            type="text"
            value={ nameFilter }
            id="nameFilter"
            onChange={ this.handdleChange }
            data-testid="name-filter"
            className="deck-card-input"
            placeholder="Nome da Carta"
          />

          <select
            type="text"
            value={ rarityFilter }
            id="rarityFilter"
            onChange={ this.handdleChange }
            data-testid="rare-filter"
            className="deck-card-input"
          >
            <option value="">todas</option>
            <option value="normal">normal</option>
            <option value="raro">rara</option>
            <option value="muito raro">muito raro</option>
          </select>

          <label htmlFor="trunfoFilter">
            <input
              id="trunfoFilter"
              type="checkbox"
              data-testid="trunfo-filter"
              checked={ trunfoFilter }
              onChange={ this.handdleChange }
            />
            Super Trunfo
          </label>
        </div>
        <div className="deck-cards">
          { cards
            .filter(({ name }) => name.includes(nameFilter))
            .filter(({ rare }) => !rarityFilter || rare === rarityFilter)
            .map(({ name, description, attr1, attr2, attr3, image, rare, trunfo }) => (
              <CardOnDeck
                key={ name }
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ image }
                cardRare={ rare }
                cardTrunfo={ trunfo }
                deleteCard={ () => deleteCard(name) }
              />))}
        </div>
      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    attr1: PropTypes.string.isRequired,
    attr2: PropTypes.string.isRequired,
    attr3: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rare: PropTypes.string.isRequired,
    trunfo: PropTypes.bool.isRequired,
  })).isRequired,
  deleteCard: PropTypes.func.isRequired,
};
