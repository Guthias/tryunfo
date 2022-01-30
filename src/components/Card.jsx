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
          <span>{ cardName }</span>
        </div>
        <div className="card-image-area">
          <img className="card-image" src={ cardImage } alt={ cardName } />
        </div>
        <div className="card-description-area">
          <span className="card-description">{ cardDescription }</span>
        </div>
        <div className="card-status-area">
          <div className="card-status">
            <span className="card-attribute">Attr1</span>
            <span className="card-attribute-value">{ cardAttr1 }</span>
          </div>

          <div className="card-status">
            <span className="card-attribute">Attr2</span>
            <span className="card-attribute-value">{ cardAttr2 }</span>
          </div>

          <div className="card-status">
            <span className="card-attribute">Attr3</span>
            <span className="card-attribute-value">{ cardAttr3 }</span>
          </div>

          <div className="card-status">
            <span className="card-attribute">Rarity</span>
            <span className="card-attribute-value">{ cardRare }</span>
          </div>

          {cardTrunfo && <div className="card-trunfo">Super Trunfo</div>}
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
