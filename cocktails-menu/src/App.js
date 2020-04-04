import React, { Component } from 'react';

import { AppHeader } from './app-header/AppHeader';
import { BasicCocktail } from './basic-cocktail/BasicCoktail';
import { CocktailList } from './coktail-list/CocktailList';
import { CocktailDetails } from './cocktail-details/CocktailDetails';

import { DisplayType } from './DisplayType.tsx';
import './assets/Inputs.css'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayType: DisplayType.OnlyCategories,
      selectedCocktail: null,
      cocktailCategories: [
        ['Alcoholic', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'],
        ['Non-Alcoholic', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'],
        ['Odinary', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'],
        ['Cocktail glass', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass'],
        ['Champagne flute', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute']
      ]
    }
  }

  showBasicCocktail = (data) => {
    this.setState({
      displayType: DisplayType.BasicCocktail,
      selectedCocktail: data
    });
  }

  displayMainMenu = () => {
    this.setState({
      displayType: DisplayType.OnlyCategories,
      selectedCocktail: null
    })
  }

  openCocktailDetails = () => {
    this.setState({
      displayType: DisplayType.CategoriesAndCocktailDetails,
    })
  }

  render() {
    const cocktailLists = this.state.cocktailCategories.map(category => {
      const [name, url] = category;
      return <CocktailList name={name} url={url} key={`coktailList${name.replace(/\s/g, '')}`}
        selectItem={this.showBasicCocktail} />
    });

    const menuItemNames = this.state.cocktailCategories.map(category => category[0]);

    return (
      <div className="app">
        <AppHeader menuItemNames={menuItemNames} />
        <div className="search-wrapper">
          <input id="search-input" className="basic-input" placeholder="Search" />
        </div>

        {
          this.state.displayType === DisplayType.BasicCocktail ?
            <BasicCocktail cocktail={this.state.selectedCocktail}
              goToMainMenu={this.displayMainMenu}
              openCocktailDetails={this.openCocktailDetails} />

            : this.state.displayType === DisplayType.CategoriesAndCocktailDetails ?
              <React.Fragment>
                <CocktailDetails cocktail={this.state.selectedCocktail} hideDetails={this.displayMainMenu} />
                {cocktailLists}
              </React.Fragment>
              : cocktailLists
        }
      </div>
    );
  }
}

export default App;
