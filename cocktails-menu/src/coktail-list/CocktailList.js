import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { BasicCocktailItem } from './basic-coktail-item/BasicCoktailItem';
import './CocktailList.css';

function CocktailList(props) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        setCocktails(response.data.drinks);
      });
  }, [props.url]);

  const htmlCocktails = cocktails.map(cocktail =>
    <BasicCocktailItem cocktail={cocktail} routePath={props.routePath}
      key={cocktail.idDrink} ></BasicCocktailItem>);

  return (
    <Fragment>
      <h1>{props.name}</h1>
      <hr />
      <div className="cocktails-grid">
        {
          htmlCocktails
        }
      </div>
    </Fragment>
  );
}

export default withRouter(CocktailList);
