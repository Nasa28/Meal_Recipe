import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Meal = ({ filteredMeals }) => {
  const meals = useSelector((state) => state.recipe.myMeals);
  const renderList = filteredMeals.map((meal) => {
    const { idMeal, strMeal, strMealThumb } = meal;
    return (
      <div key={idMeal}>
        <Link to={`/meal/${idMeal}`}>
          <img src={strMealThumb} alt={strMeal} />
          <h3>{strMeal}</h3>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default Meal;
