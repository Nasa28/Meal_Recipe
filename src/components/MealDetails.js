import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { categories } from '../Redux/Actions/mealActions';
import Loading from './Loading';
import '../styles/Details.css';
const MealDetails = () => {
  const details = useSelector((state) => state.setcategory.detail.meals);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const fetchDetails = async () => {
    try {
      const res = await axios.get(url);
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
        <Loading />
      </main>
    );
  }
  const { strMeal, strMealThumb, strInstructions } = details;
  return (
    <div className="details-page">
      <div>
        <h3 className="text-center">{strMeal}</h3>
        <img className="img" src={strMealThumb} alt={strMeal} />
      </div>
      <div>
        <h2 className="text-center">INSTRUCTIONS</h2>
        <p className="description">{strInstructions}</p>
      </div>
    </div>
  );
};

export default MealDetails;
