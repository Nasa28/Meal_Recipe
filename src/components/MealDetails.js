import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { categories } from '../Redux/Actions/mealActions';
import Loading from './Loading';
const MealDetails = () => {
  const details = useSelector((state) => state.setcategory.detail.meals);
  console.log(details);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const fetchDetails = async () => {
    try {
      const res = await axios.get(url);
      console.log(res);
      dispatch(categories(res.data.meals[0]));
       setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }
  const { strMeal, strMealThumb, strInstructions } = details;
  return (
    <div>
      <div>
        <h3>{strMeal}</h3>
        <p>{strInstructions}</p>
        <img src={strMealThumb} alt={strMeal} />
      </div>
    </div>
  );
};

export default MealDetails;
