import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardOnDeck from './CardOnDeck';

export default class Deck extends Component {
  render() {
    const { cards, deleteCard } = this.props;
    return (
      <div className="deck-area">
        <div className="deck-card-filters">
          <h2>Todas as Cartas</h2>

          <h3>Filtros de Busca</h3>
          <input
            type="text"
            data-testid="name-filter"
            className="deck-card-input"
            placeholder="Nome da Carta"
          />
        </div>
        <div className="deck-cards">
          { cards
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
