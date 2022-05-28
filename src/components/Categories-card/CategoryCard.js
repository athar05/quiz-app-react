import React from "react";
import Categories from "../../Data/Categories";

let categories = Categories;

function CategoryCard() {
  return (
    <div className="quiz-category-listing">
      {categories.map((cat) => (
        <div
          className="category-card"
          key={cat.category}
          onClick={() => console.log(cat.category.toLowerCase())}
        >
          <img src={`${cat.img}`} alt="" className="category-image" />
          <h4 key={cat.value}>{cat.category}</h4>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
