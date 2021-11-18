import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Select = () => {
  const recipes = useSelector((state) => state.setcategory.new.meals);

  const filters = [
    'All',
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];

  return (
    <div>
      {recipes.map((meal) => {
        const { idMeal, strMeal, strMealThumb } = meal;
        return (
          <div key={idMeal}>
            <Link to={`/meal/${idMeal}`}>
              <img src={strMealThumb} alt={strMeal} />
              <h3>{strMeal}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Select;
