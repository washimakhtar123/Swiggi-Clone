import React, { useEffect, useState } from "react";

const Category = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
