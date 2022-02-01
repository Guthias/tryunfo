import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class CardOnDeck extends Component {
  render() {
    const { deleteCard } = this.props;

    return (
      <>
        <Card { ...this.props } />
        <div className="card-button-area">
          <button
            type="button"
            data-testid="delete-button"
            onClick={ deleteCard }
          >
            Excluir
          </button>
        </div>
      </>
    );
  }
}

CardOnDeck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
};
