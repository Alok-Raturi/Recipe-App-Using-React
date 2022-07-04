import React, { useEffect, useState } from "react";
import Recipe from "./recipes";
import "./App.css";
import Form from "./search";

const App = () => {
  const app_id = "ab0d8d1c";
  const app_key = "ef3738c3e1c2f934b312df18144de654";

  const [recipes, setReciepes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("butter");

  // Inside this hook, everything will be executed whenever page reloads or any change made in query.
  useEffect(() => {
    getRecipes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // This will help us to get what is typed inside the search box.
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // This function will help us to update the search bar.
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // This function will fetch the receipes from the API.
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
    );
    const data = await response.json();
    setReciepes(data.hits);
  };

  return (
    <div className="App">
      <Form getSearch={getSearch} search={search} updateSearch={updateSearch} />
      <div className="receipe">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            name={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingridients={recipe.recipe.ingredients}
            cuisineType={recipe.recipe.cuisineType}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
