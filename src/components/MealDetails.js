import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const MealDetails = () => {
  const meals = useSelector((state) => state.recipe.myMeals);

  const { id } = useParams();

  const mealInfo = meals.filter((meal) => meal.idCategory === id);

  return (
    <div>
      <div>
        <h3>{mealInfo[0].strCategory}</h3>
        <p>{mealInfo[0].strCategoryDescription}</p>
        <img src={mealInfo[0].strCategoryThumb} alt={mealInfo[0].strCategory} />
      </div>
    </div>
  );
};

export default MealDetails;
