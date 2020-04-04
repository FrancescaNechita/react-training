import React from 'react';
import './CocktailDetails.css';

export class CocktailDetails extends React.Component {

  hideDetails = () => {
    this.props.hideDetails();
  }

  render() {
    return <div className="cocktail-details">
      <div>
        <div>
          <button className="basic-button" onClick={this.hideDetails}>HideDetails</button>
        </div>
        <img src={this.props.cocktail.strDrinkThumb} alt="Cocktail" />
      </div>
      <div>
        <p><span className="detail">Title</span>: {this.props.cocktail.strDrink}</p>
        <p><span className="detail">Id</span>: {this.props.cocktail.idDrink}</p>
      </div>
    </div>
  }
}
