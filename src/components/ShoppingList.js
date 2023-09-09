// ShoppingList.js
import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"; // Import the Filter component

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      {/* Render the Filter component */}
      <Filter onCategoryChange={handleCategoryChange} />

      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

