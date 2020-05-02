import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../assets/Buttons.css';
import './BasicCocktail.css';

export function BasicCocktail(props) {
  const findByIdBaseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
      axios.get(`${findByIdBaseUrl}${props.match.params.cocktailId}`)
        .then(response => {
          var cocktails = response.data.drinks;
          setCocktail(cocktails.length > 0 ? cocktails[0] : null);
        });
  }, [props.match.params.cocktailId]);

  if (!cocktail) {
    return <div>Loading...</div>
  }
  return <div className="basic-cocktail-container" >
    <p>{cocktail.strDrink}</p>
    <img src={cocktail.strDrinkThumb} alt="Cocktail" />
    <div className="button-wrapper">
      <Link to="/" >
        <button className="basic-button" > Back</button>
      </Link>
    </div>
  </div>
}

export default BasicCocktail;
