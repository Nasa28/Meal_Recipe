import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meal from '../components/Meal';
import { setMeals, changeFilter } from '../Redux/Actions/mealActions';
import Loading from '../components/Loading';
import CategoryFilter from '../components/CategoryFilter';
import Select from '../components/Select';

const MealList = () => {
  const recipes = useSelector((state) => state.setcategory.new);
  const [recipe, setRecipe] = useState(recipes);
  console.log(recipe);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const fetchMeals = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      dispatch(setMeals(response.data.categories));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleFilterChange = (e) => {
    e.preventDefault();

    dispatch(changeFilter(e.target.value));
  };

  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  return (
    <>
      <div>
        {recipe ? (
          <div>
            <CategoryFilter handleFilterChange={handleFilterChange} />

            <Meal />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default MealList;
