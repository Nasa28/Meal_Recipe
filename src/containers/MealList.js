import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { setMeals, changeFilter } from '../Redux/Actions/mealActions';
import Meal from '../components/Meal';
import filters from '../components/filterArray';
import '../styles/MealList.css';
import CategoryFilter from '../components/CategoryFilter';

const MealList = () => {
  const myCategory = useSelector((state) => state.filter);
  const recipes = useSelector((state) => state.recipe.myMeals);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const myFetch = () => {
    const result = [];
    filters.map((myCategory) => {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${myCategory}`;

      return axios
        .get(url)
        .then((response) => {
          const ability = response.data.meals;
          const newCat = ability.map((cat) => ({
            ...cat,
            category: `${myCategory}`,
          }));
          result.push(...newCat);
          dispatch(setMeals(result));
          setLoading(false);
        })
        .catch((err) => err);
    });
  };

  useEffect(() => {
    myFetch();
  }, []);

  if (loading) {
    return (
      <main data-testid="loading">
        <Loading />
      </main>
    );
  }

  const handleFilterChange = (e) => {
    e.preventDefault();

    dispatch(changeFilter(e.target.value));
  };
  const filteredMeals = recipes.filter(
    (meal) => meal.category === myCategory || myCategory === 'All',
  );
  return (
    <>
      <div className="category">
        <h3 data-testid="category">Choose Category</h3>
        <div>
          <CategoryFilter handleFilterChange={handleFilterChange} />
        </div>
      </div>
      <div className="container">
        <div className="meal-card">
          {filteredMeals.map((meal) => {
            const { idMeal, strMeal, strMealThumb } = meal;
            return (
              <Meal
                key={idMeal}
                name={strMeal}
                image={strMealThumb}
                id={idMeal}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MealList;
