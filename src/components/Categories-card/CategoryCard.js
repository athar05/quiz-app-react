import React, { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import Categories from "../../Data/Categories";
import { Link } from "react-router-dom";

let categories = Categories;

function CategoryCard() {
  const { setCategory } = useContext(CategoryContext);
  return (
    <div className="quiz-category-listing">
      {categories.map((cat) => (
        <Link to="/rules">
          <div
            className="category-card"
            key={cat.category}
            onClick={() => {
              setCategory({ value: cat.value });
            }}
          >
            <img src={`${cat.img}`} alt="" className="category-image" />
            <h4 key={cat.value}>{cat.category}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryCard;
