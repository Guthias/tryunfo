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
    const filteredCards = trunfoFilter
      ? cards.filter(({ cardTrunfo }) => cardTrunfo)
      : cards
        .filter(({ cardName }) => cardName.includes(nameFilter))
        .filter(({ cardRare }) => !rarityFilter || cardRare === rarityFilter);

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
            disabled={ trunfoFilter }
          />

          <select
            type="text"
            value={ rarityFilter }
            id="rarityFilter"
            onChange={ this.handdleChange }
            data-testid="rare-filter"
            className="deck-card-input"
            disabled={ trunfoFilter }
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
          {
            filteredCards
              .map((card) => (
                <CardOnDeck
                  key={ card.cardName }
                  { ...card }
                  deleteCard={ () => deleteCard(card.cardName) }
                />))
          }
        </div>
      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  deleteCard: PropTypes.func.isRequired,
};
