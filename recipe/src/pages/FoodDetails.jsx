import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function FoodDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("ingredients");

  const API_KEY = "dc1188b2e73d42d99fc0c2627d5634e7";
  const BASE_URL = "https://api.spoonacular.com/recipes";

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="food-detail-body">
    <Navbar/>
    <div className="detail-center">
    <div className="detail-body">
      <div className="detail">
        <div className="detail-left">
            <h1>{recipe.title ? recipe.title : "Loading..."}</h1>
            {recipe.image ? (
              <img className="detail-img" src={recipe.image} alt={recipe.title} />
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="detail-right">
          <div className="context">
            <div className="detail-tabs">
              <button
                className={activeTab === "ingredients" ? "active" : ""}
                onClick={() => handleTabClick("ingredients")}
              >
                materials
              </button>
              <button
                className={activeTab === "recipe" ? "active" : ""}
                onClick={() => handleTabClick("recipe")}
              >
                recipe
              </button>
              </div>
            <div className="detail-content">
              {activeTab === "ingredients" && (
                <>
                  <h2>Materials:</h2>
                  <ul>
                    {recipe.extendedIngredients &&
                      recipe.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original},</li>
                      ))}
                  </ul>
                </>
              )}
              {activeTab === "recipe" && (
                <>
                  <h2>Recipe:</h2>
                  <p>{recipe.instructions ? recipe.instructions : "Loading..."}</p>
                </>
              )}
            </div>
          </div>

          </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default FoodDetails;
