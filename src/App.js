import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  allInputsValid = () => {
    const {
      name,
      description,
      image,
      attr1,
      attr2,
      attr3,
    } = this.state;

    const maxAttr = 90;
    const maxTotalAttr = 210;

    // Source: https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l
    const notSmallAttr = Math.min(+attr1, +attr2, +attr3) >= 0;
    const notBigAttr = Math.max(+attr1, +attr2, +attr3) <= maxAttr;
    const validTotaAttrSum = (+attr1 + +attr2 + +attr3) <= maxTotalAttr;
    const validAttr = notSmallAttr && notBigAttr && validTotaAttrSum;

    const allValid = !(name && description && image && validAttr);

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

  onSaveButtonClick = ({ target }) => {
    console.log(target);
  }

  render() {
    const { name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      isSaveButtonDisabled } = this.state;

    return (
      <div className="create-card-area">
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <div className="card-preview-area">
          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
