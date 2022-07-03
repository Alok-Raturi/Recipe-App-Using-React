import React, { useEffect, useState } from "react";
import Recipe from "./recipes";
import "./App.css";
const App = () => {
  const app_id = "ab0d8d1c";
  const app_key = "ef3738c3e1c2f934b312df18144de654";

  const [recipes, setReciepes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("butter");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
    );
    const data = await response.json();
    setReciepes(data.hits);
  };
  return (
    <div className="App">
      <form className="Search" onSubmit={getSearch}>
        <input
          type="text"
          className="SearchBar"
          value={search}
          onChange={updateSearch}
        />
        <button
          type="submit"
          className="Search-Button fa-solid fa-magnifying-glass"
        ></button>
      </form>
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          name={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingridients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;
