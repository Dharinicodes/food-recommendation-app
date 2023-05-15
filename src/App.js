import React from "react";
import "./styles.css";
import { useState } from "react";

const foodRecommendation = {
  southindian: [
    { name: "Sambar Vada 🍲", rating: "4.1/5" },
    { name: "Mysore Masala Dosa", rating: "3.9/5" }
  ],

  northindian: [
    {
      name: "Paratha Umesh Singh Da with Paneer Makhanwala 🥘",
      rating: "4.7/5"
    },

    {
      name: "Amritsari Chole Bhature",
      rating: "4.5/5"
    }
  ],

  panasian: [
    {
      name: "Singaporean Noodles with Momos 🍜",
      rating: "4.3/5"
    },

    {
      name: "Veg Thai Noodles with Fresh Greens",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedCusine, setCuisine] = useState("southindian");
  function cuisineClickHandler(cuisine) {
    setCuisine(cuisine);
  }

  return (
    <div className="App">
      <h1>🤤 Goodu Foodu 🍛</h1>
      <div>
        Take a look at my favourite foods. Pick a cuisine to get started
      </div>
      {Object.keys(foodRecommendation).map((cuisine) => (
        <button onClick={() => cuisineClickHandler(cuisine)}>{cuisine} </button>
      ))}
      <hr />
      <div>
        <ul>
          {foodRecommendation[selectedCusine].map((food) => (
            <li>
              <div> {food.name} </div>
              <div> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
