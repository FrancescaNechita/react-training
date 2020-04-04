import React, { Component } from 'react';
import axios from 'axios';

import { BasicCocktailItem } from './basic-coktail-item/BasicCoktailItem';
import './CocktailList.css';

export class CocktailList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktails: []
    };
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then(response => {
        this.setState({ cocktails: response.data.drinks });
      });
  }

  selectItem = (coktailItem) => {
    this.props.selectItem(coktailItem);
  }

  render() {
    const cocktails = this.state.cocktails.map(cocktail =>
      <BasicCocktailItem cocktail={cocktail} key={cocktail.idDrink} selectItem={this.selectItem}></BasicCocktailItem>);

    return (
      <section>
        <h1>{this.props.name}</h1>
        <hr />
        <div className="cocktails-grid">
          {
            cocktails
          }
        </div>
      </section>
    );
  }
}
