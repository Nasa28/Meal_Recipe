import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Meal from '../components/Meal';
import { setMeals, changeFilter } from '../Redux/Actions/mealActions';
import Loading from '../components/Loading';
import CategoryFilter from '../components/CategoryFilter';

const MealList = () => {
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

  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }
  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <Meal />;
    </div>
  );
};

export default MealList;
