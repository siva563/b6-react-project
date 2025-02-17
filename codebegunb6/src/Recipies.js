import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Recipies.css";

const Recipies = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((response) => setRecipes(response.data.recipes))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 title">Zomato Clone</h1>
      <input
        type="text"
        className="form-control mb-3 search-bar"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {recipes
          .filter((recipe) =>
            recipe.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((recipe) => (
            <div className="col-md-4 mb-4" key={recipe.id}>
              <div className="card recipe-card">
                <img
                  src={recipe.image}
                  className="card-img-top recipe-image"
                  alt={recipe.name}
                />
                <div className="card-body">
                  <h5 className="card-title recipe-title">{recipe.name}</h5>
                  <p className="card-text recipe-cuisine">{recipe.cuisine}</p>
                  <a href="#" className="btn btn-primary recipe-btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recipies;
