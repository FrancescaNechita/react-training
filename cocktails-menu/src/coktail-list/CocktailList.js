import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom'; //BrowserRouter, Route, Switch,
import axios from 'axios';

import { BasicCocktailItem } from './basic-coktail-item/BasicCoktailItem';
import './CocktailList.css';
// import BasicCocktail from './basic-cocktail/BasicCoktail';

class CocktailList extends Component {
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
      <BasicCocktailItem cocktail={cocktail} routePath={this.props.routePath}
        key={cocktail.idDrink} selectItem={this.selectItem}></BasicCocktailItem>);

    return (
      <Fragment>
        <h1>{this.props.name}</h1>
        <hr />
        <div className="cocktails-grid">
          {
            cocktails
          }
        </div>
        {/* <BrowserRouter>
          <Switch>
            <Route path={`/:cocktailId`} component={BasicCocktail} />
          </Switch>
        </BrowserRouter> */}
      </Fragment>
    );
  }
}

export default withRouter(CocktailList);
