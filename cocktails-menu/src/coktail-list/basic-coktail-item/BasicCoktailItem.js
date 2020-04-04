import React from 'react';
import './BasicCocktailItem.css';

export class BasicCocktailItem extends React.Component {
  selectItem = () => {
    this.props.selectItem(this.props.cocktail);
  }

  render() {
    return <div className="cocktail-tile" >
      <img src={this.props.cocktail.strDrinkThumb} alt="Cocktail" onClick={this.selectItem} />
      <p>{this.props.cocktail.strDrink}</p>
    </div>;
  }
}
