import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  }, [myCategory]);

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
    </>
  );
};

export default CategoryFilter;
