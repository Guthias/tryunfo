import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import './index.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
    };
  }

  allInputsValid = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxAttr = 90;
    const maxTotalAttr = 210;

    // Source: https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l
    const notSmallAttr = Math.min(+cardAttr1, +cardAttr2, +cardAttr3) >= 0;
    const notBigAttr = Math.max(+cardAttr1, +cardAttr2, +cardAttr3) <= maxAttr;
    const validTotaAttrSum = (+cardAttr1 + +cardAttr2 + +cardAttr3) <= maxTotalAttr;
    const validAttr = notSmallAttr && notBigAttr && validTotaAttrSum;

    const allValid = !(cardName && cardDescription && cardImage && validAttr);

    this.setState({
      isSaveButtonDisabled: allValid,
    });
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.id]: value,
    }, this.allInputsValid);
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cards,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    const newCards = cards;
    newCards.push(card);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cards: newCards,
    }, this.verifyTrunfo);
  }

  verifyTrunfo = () => {
    const { cards } = this.state;
    this.setState({
      hasTrunfo: cards.some(({ trunfo }) => trunfo),
    });
  }

  deleteCard = (cardName) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter(({ name }) => name !== cardName),
    }), this.verifyTrunfo);
  }

  render() {
    const { cards } = this.state;

    return (
      <>
        <div className="create-card-area">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div className="card-preview-area">
            <Card
              { ...this.state }
            />
          </div>
        </div>
        <Deck cards={ cards } deleteCard={ this.deleteCard } />
      </>
    );
  }
}

export default App;
