import React, { Component } from 'react';
import Card from './Card';

export default class Deck extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="deck-area">
        <h1>Todas as Cartas</h1>
        { cards.map(({ name, description, attr1, attr2, attr3, image, rare, trunfo }) => (
          <Card
            key={ name }
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
          />))}
      </div>
    );
  }
}
