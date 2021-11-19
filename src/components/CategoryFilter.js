import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { categories } from '../Redux/Actions/mealActions';

const CategoryFilter = ({ handleFilterChange }) => {
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
  const myCategory = useSelector((state) => state.filter);
  const recipes = useSelector((state) => state.setcategory.new.meals);
  const [recipe, setRecipe] = useState(recipes);
  console.log(recipe);
  const dispatch = useDispatch();
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${myCategory}`;

  const fetchCategories = async () => {
    try {
      const response = await axios.get(url);
      dispatch(categories(response.data.meals));
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategories();
  }, [myCategory, recipe]);

  return (
    <>
      <div>
        <select onChange={handleFilterChange} name="filter">
          {filters.map((filter) => (
            <option name="category" value={filter} key={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>
      <div>
        {recipe &&
          recipes.map((meal) => {
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
    </>
  );
};

export default CategoryFilter;
