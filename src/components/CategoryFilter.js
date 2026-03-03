import React from "react";

function CategoryFilter({categories, selectedCategory, handelSelectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button key={category} value ={category} className={selectedCategory[category]} onClick={handelSelectedCategory}>{category}</button>})}
    </div>
  );
}

export default CategoryFilter;
