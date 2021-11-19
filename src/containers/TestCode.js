import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { setMeals, changeFilter } from '../Redux/Actions/mealActions';
import Meal from '../components/Meal';

const TestCode = () => {
  const myCategory = useSelector((state) => state.filter);
  const recipes = useSelector((state) => state.recipe.myMeals);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
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

  const myFetch = () => {
    const result = [];
    filters.map((myCategory) => {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${myCategory}`;

      axios
        .get(url)
        .then((response) => {
          const ability = response.data.meals
          const newCat = ability.map((cat) => ({
            ...cat,
            category: `${myCategory}`,
          }));
          result.push(...newCat);
          dispatch(setMeals(result));
          setLoading(false);
        })
        .catch((err) => {
          return err;
        });
    });
  };

  useEffect(() => {
    myFetch();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />;
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
      <div>
        <select onChange={handleFilterChange} name="filter">
          {filters.map((filter) => (
            <option name="category" value={filter} key={filter}>
              {filter}
            </option>
          ))}
        </select>
        <div>
          <Meal filteredMeals={filteredMeals} />
        </div>
      </div>
    </>
  );
};

export default TestCode;
