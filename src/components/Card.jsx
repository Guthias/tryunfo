import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">
        <div className="card-name-area">
          <span data-testid="name-card">{ cardName }</span>
        </div>
        <div className="card-image-area">
          <img
            className="card-image"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>

        <div className="card-status-area">
          <div className="card-status">
            <span className="card-attribute">ATTACK</span>
            <span
              className="card-attribute-value"
              data-testid="attr1-card"
            >
              { cardAttr1 }
            </span>
          </div>

          <div className="card-status">
            <span className="card-attribute">DEFENSE</span>
            <span
              className="card-attribute-value"
              data-testid="attr2-card"
            >
              { cardAttr2 }
            </span>
          </div>

          <div className="card-status">
            <span className="card-attribute">SPEED</span>
            <span
              className="card-attribute-value"
              data-testid="attr3-card"
            >
              { cardAttr3 }
            </span>
          </div>
        </div>

        <div className="card-description-area">
          <span
            className="card-description"
            data-testid="description-card"
          >
            { cardDescription }
          </span>
        </div>

        <div className="card-hidden-info">
          <span
            className="card-attribute-value"
            data-testid="rare-card"
          >
            { cardRare }
          </span>
          { cardTrunfo
          && <div className="card-trunfo" data-testid="trunfo-card"> Super Trunfo </div>}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
