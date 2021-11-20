import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Meal.css';

const Meal = ({ id, name, image }) => {
  return (
    <div className="meal-card " key={id}>
      <Link className="cards " to={`/meal/${id}`}>
        <div>
          <img className="image" src={image} alt={name} />
        </div>
        <div>
          <h3 className="title">{name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Meal;
