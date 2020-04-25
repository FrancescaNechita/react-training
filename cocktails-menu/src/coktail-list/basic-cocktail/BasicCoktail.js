import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import '../../assets/Buttons.css';
import './BasicCocktail.css';

const findByIdBaseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export class BasicCocktail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktail: null
    };
  }

  componentDidMount() {
    axios.get(`${findByIdBaseUrl}${this.props.match.params.cocktailId}`)
      .then(response => {
        console.log('request', response);
        var cocktails = response.data.drinks;
        this.setState({ cocktail: cocktails.length > 0 ? cocktails[0] : null });
      });
  }

  goBack = () => {
    this.props.goToMainMenu();
  }

  openCocktailDetails = () => {
    this.props.openCocktailDetails();
  }

  render() {
    console.log('myCocktailDetails', this.state.cocktail);
    if (!this.state.cocktail) {
      return <div>Loading...</div>
    }
    return <div className="basic-cocktail-container" >
      <p onClick={this.openCocktailDetails}>{this.state.cocktail.strDrink}</p>
      <img src={this.state.cocktail.strDrinkThumb} alt="Cocktail" />
      <div className="button-wrapper">
        <Link to="/" >
          <button className="basic-button" > Back</button>
        </Link>
      </div>
    </div>
  }
}

export default withRouter(BasicCocktail);
