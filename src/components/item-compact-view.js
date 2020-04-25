import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import whoIs from '../assets/pokemon.png';

const pokemonItem = ({ pokemon }) => (
  <li
    className="pokemon col-4"
  >
    <Link to={`/pokemon/${pokemon.name}`}>
      <img className="pokemon-pic" src={whoIs} alt={pokemon.name} />
      {pokemon.name}
    </Link>
  </li>
);

pokemonItem.defaultProps = {
  pokemon: {
    name: 'pikachu',
  },
};

pokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default pokemonItem;
