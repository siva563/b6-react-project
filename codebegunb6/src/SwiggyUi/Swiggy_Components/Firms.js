import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "./Swiggy.css"; 

const Firms = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((response) => setRecipes(response.data.recipes))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 title"></h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <Card className="recipe-card">
              <div className="image-container">
                <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
                <div className="overlay">
                  <span className="price-tag">${recipe.price}</span>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="recipe-name">{recipe.name}</Card.Title>
                <Card.Text>
                  <span className="category">{recipe.category}</span>
                </Card.Text>
                <div className="rating">⭐ {recipe.rating} / 5</div>
                <Button variant="primary" className="view-btn">
                  View Recipe
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Firms;
