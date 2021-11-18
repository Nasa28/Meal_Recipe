import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Meal = () => {
  const meals = useSelector((state) => state.recipe.myMeals);
  const renderList = meals.map((meal) => {
    const {
      idCategory,
      strCategory,
      strCategoryThumb,
    } = meal;
    return (
      <div key={idCategory}>
        <Link to={`/meal/${idCategory}`}>
          <img src={strCategoryThumb} alt={strCategory} />
          <h3>{strCategory}</h3>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default Meal;
