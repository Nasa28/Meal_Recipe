import PropTypes from 'prop-types';
import filters from './filterArray';

const CategoryFilter = ({ handleFilterChange }) => (
  <div>
    <select className="select" onChange={handleFilterChange} name="filter">
      {filters.map((filter) => (
        <option name="category" value={filter} key={filter}>
          {filter}
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
