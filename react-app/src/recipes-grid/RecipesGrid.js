import React from 'react';
import { Receipe } from '../recipe/Recipe';

import './RecipesGrid.css'

export function RecipesGrid() {

  const pastaRecipe1 = {
    name: "Carbonara",
    photoSrc: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1001491_11.jpg?itok=-ns0A_kt"
  };
  const pastaRecipe2 = {
    name: "Pesto",
    photoSrc: "https://www.recipetineats.com/wp-content/uploads/2019/02/Pesto-Pasta_2-1.jpg"
  };

  const pizzaRecipe1 = {
    name: "Margherita",
    photoSrc: "https://onlineculinaryschool.net/wp-content/uploads/2018/10/online_culinary_school_pizza_margherita-1-1024x576.jpg"
  };
  const pizzaRecipe2 = {
    name: "Prosciutto e funghi",
    photoSrc: "https://imgp1.schaer.com/sites/default/files/2018-02/HeaderProducts_Pizza%20Prosciutto%20e%20Funghi.jpg"
  };

  const allRecipes = [...styleName('Pizza', pizzaRecipe1, pizzaRecipe2),
  ...styleName('Pasta', pastaRecipe1, pastaRecipe2)];

  return (
    <section>
      <h1>Here you can find all your recipes!</h1>
      <div className="recipes-grid">
        {
          allRecipes.map((r, index) => <Receipe name={r.name} photoSrc={r.photoSrc} key={index}></Receipe>)
        }
      </div>
    </section>
  );
}

function styleName(type, ...args) {
  let styledItems = [];

  args.forEach(element => {
    styledItems.push({
      name: `${type}: ${element.name}`,
      photoSrc: element.photoSrc
    });
  });

  return styledItems;
}
