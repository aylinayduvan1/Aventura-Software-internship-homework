import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Kore() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = "dc1188b2e73d42d99fc0c2627d5634e7";
  const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
  const CUISINE = "Japanese";

  useEffect(() => {
    axios
      .get(`${BASE_URL}?apiKey=${API_KEY}&cuisine=${CUISINE}&number=6&query=${searchTerm}`)
      .then((response) => {
        setRecipes(response.data.results);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]);

  return (
    <div className="card">
      <div className='search-container'>
        <input
          className='search-input'
          type='text'
          placeholder='Search Recipe Title...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="food-card">
      {recipes.map((recipe) => (
        <div className="card2" key={recipe.id}>
          <h4>{recipe.title}</h4>
          <Link to={`/italian/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Kore;
