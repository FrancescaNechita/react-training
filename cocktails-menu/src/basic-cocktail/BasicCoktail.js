import React from 'react';
import './BasicCocktail.css';
import '../assets/Buttons.css';

export class BasicCocktail extends React.Component {

  goBack = () => {
    this.props.goToMainMenu();
  }

  openCocktailDetails = () => {
    this.props.openCocktailDetails();
  }

  render() {
    return <div className="basic-cocktail-container" >
      <p onClick={this.openCocktailDetails}>{this.props.cocktail.strDrink}</p>
      <img src={this.props.cocktail.strDrinkThumb} alt="Cocktail" />
      <div className="button-wrapper">
        <button className="basic-button" onClick={this.goBack}> Back</button>
      </div>
    </div>;
  }
}
