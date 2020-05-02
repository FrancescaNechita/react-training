import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AppHeader from './app-header/AppHeader';
import BasicCocktail from './coktail-list/basic-cocktail/BasicCoktail';
import CocktailList from './coktail-list/CocktailList';

import './assets/Inputs.css'
import './App.css';

const routeNames = ['alcoholic', 'non-alcoholic', 'ordinary', 'cocktail-glass', 'champagne-flute'];
const cocktailCategories = [
  ['Alcoholic', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'],
  ['Non-Alcoholic', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'],
  ['Odinary', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'],
  ['Cocktail glass', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass'],
  ['Champagne flute', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute']
];

export const App = () => {
  const cocktailLists = cocktailCategories.map((category, index) => {
    const [name, url] = category;
    return <CocktailList name={name} url={url} routePath={routeNames[index]} key={`coktailList${name.replace(/\s/g, '')}`} />
  });

  const cocktailListsRoutes = cocktailCategories.map((category, index) => {
    const [name, url] = category;
    return <Route path={`/${routeNames[index]}`} render={() => <CocktailList name={name} url={url}
      key={`coktailList${name.replace(/\s/g, '')}`} routePath={routeNames[index]} />} />
  });

  const cocktailListItemsRoutes = cocktailCategories.map((category, index) => {
    return <Route path={`/${routeNames[index]}/:cocktailId`} component={BasicCocktail} />
  });

  return (
    <div className="app">
      <BrowserRouter>
        <AppHeader menuItemNames={routeNames} />

        <div className="search-wrapper">
          <input id="search-input" className="basic-input" placeholder="Search" />
        </div>
        <Switch>
          {
            cocktailListItemsRoutes
          }
          {
            cocktailListsRoutes
          }
          <Route path="/" render={() => cocktailLists} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
