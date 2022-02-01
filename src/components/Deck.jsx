import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardOnDeck from './CardOnDeck';

export default class Deck extends Component {
  render() {
    const { cards, deleteCard } = this.props;
    return (
      <div className="deck-area">
        <h1>Todas as Cartas</h1>
        { cards.map(({ name, description, attr1, attr2, attr3, image, rare, trunfo }) => (
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
