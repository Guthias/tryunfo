import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-name-area">
          <span>Piplup</span>
        </div>
        <div className="card-image-area">
          <img className="card-image" src="https://archives.bulbagarden.net/media/upload/4/42/Dawn_Piplup.png" alt="card-name" />
        </div>
        <div className="card-description-area">
          <span className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            a nam sequi suscipit modi consequatur ducimus quas quidem sit provident.
          </span>
        </div>
        <div className="card-status-area">
          <div className="card-status">
            <span className="card-attribute">
              Attr1
            </span>
            <span className="card-attribute-value">
              000
            </span>
          </div>

          <div className="card-status">
            <span className="card-attribute">
              Attr2
            </span>
            <span className="card-attribute-value">
              000
            </span>
          </div>

          <div className="card-status">
            <span className="card-attribute">
              Attr3
            </span>
            <span className="card-attribute-value">
              000
            </span>
          </div>
        </div>
      </div>
    );
  }
}
