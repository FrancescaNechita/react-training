import React from 'react';
import { Link } from 'react-router-dom';
import './BasicCocktailItem.css';

export const BasicCocktailItem = (props) => {
  return <div className="cocktail-tile" >
    <img src={props.cocktail.strDrinkThumb} alt="Cocktail" />
    <Link to={`/${props.routePath}/${props.cocktail.idDrink}`}>
      <p>{props.cocktail.strDrink}</p>
    </Link>
  </div>;
}
