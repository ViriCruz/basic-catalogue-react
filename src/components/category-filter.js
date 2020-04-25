import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const pokemonCategories = [
    'normal', 
    'fighting', 
    'flying', 
    'poison', 
    'ground', 
    'rock', 
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
    'unknown',
    'shadow'
  ];
  const { onClick } = props;
  return (
    <div className="form-group mt-5">
      <label htmlFor="category">
        Select Pokemon Category
        <select name="category" className="select-field" onChange={e => onClick(e)}>
          <option value="normal">normal</option>
          {pokemonCategories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategoryFilter;