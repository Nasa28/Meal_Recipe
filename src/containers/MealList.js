import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meal from '../components/Meal';
import { setMeals } from '../Redux/Actions/mealActions';

const MealList = () => {
  const dispatch = useDispatch();
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const fetchMeals = async () => {
    try {
      const response = await axios.get(url);
      dispatch(setMeals(response.data.categories));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div>
      <Meal />;
    </div>
  );
};

export default MealList;
